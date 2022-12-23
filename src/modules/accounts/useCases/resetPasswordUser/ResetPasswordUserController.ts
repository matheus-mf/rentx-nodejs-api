import { Request, Response } from "express";
import { container } from "tsyringe";

import ResetPasswordUserUseCase from "./ResetPasswordUserUseCase";

export default class ResetPasswordUserController {
  async handle(request: Request, responde: Response): Promise<Response> {
    const { token } = request.query;
    const { password } = request.body;
    const resetPasswordUserUseCase = container.resolve(
      ResetPasswordUserUseCase
    );

    await resetPasswordUserUseCase.execute({ token: String(token), password });
    return responde.send();
  }
}
