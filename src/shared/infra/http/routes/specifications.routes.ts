import { Router } from "express";

import CreateSpecificationController from "@modules/cars/useCases/CreateSpecification/CreateSpecificationController";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", createSpecificationController.handle);

export default specificationsRoutes;
