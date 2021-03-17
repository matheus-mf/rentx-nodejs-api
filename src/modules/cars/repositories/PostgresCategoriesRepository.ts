import Category from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

export default class PostgresCategoriesRepository
  implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log("create");
  }

  findByName(name: string): Category {
    console.log("findByName");
    return undefined;
  }

  list(): Category[] {
    console.log("list");
    return [];
  }
}
