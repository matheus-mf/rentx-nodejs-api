import { Request, Response } from "express";

import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

export default class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, description } = request.body;

      this.createSpecificationUseCase.execute({ name, description });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
