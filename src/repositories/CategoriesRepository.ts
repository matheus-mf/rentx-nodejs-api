import Category from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

export default class CategoriesRepository implements ICategoriesRepository {
  private readonly categories: Category[];

  constructor() {
    this.categories = [];
  }

  list(): Category[] {
    return this.categories;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_ad: new Date(),
    });

    this.categories.push(category);
  }

  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
}
