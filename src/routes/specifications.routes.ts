import { Router } from "express";

import SpecificationsRepository from "../modules/cars/repositories/SpecificationsRepository";
import CreateSpecificationService from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  try {
    const { name, description } = request.body;

    const createSpecificationServe = new CreateSpecificationService(
      specificationsRepository
    );

    createSpecificationServe.execute({ name, description });
    return response.status(201).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default specificationsRoutes;
