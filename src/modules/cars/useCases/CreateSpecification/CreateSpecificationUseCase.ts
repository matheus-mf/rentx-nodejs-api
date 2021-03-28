import { inject, injectable } from "tsyringe";

import AppErre from "../../../../errors/AppErre";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IResquet {
  name: string;
  description: string;
}

@injectable()
export default class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  public async execute({ description, name }: IResquet): Promise<void> {
    const specificationAlreadyExists = await this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new AppErre("Specification Already exists!");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}
