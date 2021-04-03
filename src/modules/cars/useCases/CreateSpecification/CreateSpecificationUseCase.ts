import { inject, injectable } from "tsyringe";

import AppError from "@errors/AppError";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export default class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  public async execute({ description, name }: IRequest): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new AppError("Specification Already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}
