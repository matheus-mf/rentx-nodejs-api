import { inject, injectable } from "tsyringe";

import Category from "@modules/cars/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
export default class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  public async execute(): Promise<Category[]> {
    return this.categoriesRepository.list();
  }
}
