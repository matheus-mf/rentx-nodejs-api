import { Request, Response } from "express";
import { container } from "tsyringe";

import UpdateUserAvatarUseCase from "./UpdateUserAvatarUseCase";

export default class UpdateUserAvatarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const avatar_file = request.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({ user_id, avatar_file });

    return response.status(204).send();
  }
}
