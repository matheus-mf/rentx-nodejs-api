import { ICreateSpecificationDTO } from "@modules/cars/dtos/ICreateSpecificationDTO";

import Specification from "../infra/typeorm/entities/Specification";

interface ISpecificationsRepository {
  create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository };
