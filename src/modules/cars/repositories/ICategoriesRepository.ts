import { ICreateCategoryDTO } from "@modules/cars/dtos/ICreateCategoryDTO";

import Category from "../infra/typeorm/entities/Category";

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository };
