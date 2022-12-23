import { Request, Response } from "express";
import { container } from "tsyringe";

import RefreshTokensUseCase from "./RefreshTokensUseCase";

export default class RefreshTokensController {
  async handle(request: Request, responde: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.headers["x-access-token"] ||
      request.query.token;

    const refreshTokensUseCase = container.resolve(RefreshTokensUseCase);

    const new_tokens = await refreshTokensUseCase.execute(token);

    return responde.json(new_tokens);
  }
}
