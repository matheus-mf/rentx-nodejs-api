import { Request, Response } from "express";
import { container } from "tsyringe";

import SendForgotPasswordMailUseCase from "./SendForgotPasswordMailUseCase";

export default class SendForgotPasswordMailController {
  async handle(request: Request, responde: Response): Promise<Response> {
    const { email } = request.body;
    const sendForgotPasswordMailUseCase = container.resolve(
      SendForgotPasswordMailUseCase
    );

    await sendForgotPasswordMailUseCase.execute(email);

    return responde.send();
  }
}
