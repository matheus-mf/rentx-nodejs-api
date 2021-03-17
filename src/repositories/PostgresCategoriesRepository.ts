import Category from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  private readonly categoriesPg: Category[];

  constructor() {
    this.categoriesPg = [];
  }

  list(): Category[] {
    return this.categoriesPg;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
      created_ad: new Date(),
    });

    this.categoriesPg.push(category);
  }

  findByName(name: string): Category {
    return this.categoriesPg.find((category) => category.name === name);
  }
}

export default PostgresCategoriesRepository;
