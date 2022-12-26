import { Request, Response } from "express";
import { container } from "tsyringe";

import ProfileUserUseCase from "./ProfileUserUseCase";

export default class ProfileUserController {
  async handle(request: Request, responde: Response): Promise<Response> {
    const { id } = request.user;

    const profileUserUseCase = container.resolve(ProfileUserUseCase);

    const user = await profileUserUseCase.execute(id);

    return responde.json(user);
  }
}
