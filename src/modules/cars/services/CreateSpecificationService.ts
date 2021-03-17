import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IResquet {
  name: string;
  description: string;
}

export default class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ description, name }: IResquet): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new Error("Specification Already exists!");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
