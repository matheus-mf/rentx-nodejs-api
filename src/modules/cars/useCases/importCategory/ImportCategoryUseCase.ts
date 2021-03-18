import { Express } from "express";

export default class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    console.log(file);
  }
}
