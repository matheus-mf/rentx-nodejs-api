import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export default class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category Already exists!");
    }

    await this.categoriesRepository.create({
      name,
      description,
    });
  }
}
