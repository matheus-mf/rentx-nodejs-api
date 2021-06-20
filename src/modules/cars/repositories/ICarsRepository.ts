import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { IFindAvailableDTO } from "@modules/cars/dtos/IFindAvailableDTO";
import Car from "@modules/cars/infra/typeorm/entities/Car";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  save(car: Car): Promise<Car>;
  findById(id: string): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(data: IFindAvailableDTO): Promise<Car[]>;
  updateAvailable(id: string, available: boolean): Promise<void>;
}

export { ICarsRepository };
