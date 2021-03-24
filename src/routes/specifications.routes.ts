import { Router } from "express";

import CreateCategoryController from "../modules/cars/useCases/createCategory/CreateCategoryController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateCategoryController();

specificationsRoutes.post("/", createSpecificationController.handle);

export default specificationsRoutes;
