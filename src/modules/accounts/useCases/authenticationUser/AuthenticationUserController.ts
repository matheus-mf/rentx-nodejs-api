import { Request, Response } from "express";
import { container } from "tsyringe";

import AuthenticationUserUseCase from "./AuthenticationUserUseCase";

export default class AuthenticationUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticationUserUseCase = container.resolve(
      AuthenticationUserUseCase
    );

    const authenticateInfo = await authenticationUserUseCase.execute({
      email,
      password,
    });

    return response.json(authenticateInfo);
  }
}
