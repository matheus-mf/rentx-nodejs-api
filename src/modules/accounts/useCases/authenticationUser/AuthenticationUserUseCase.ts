import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import AppError from "@errors/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export default class AuthenticationUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or Password incorrect!");
    }

    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new AppError("Email or Password incorrect!");
    }

    const token = sign({}, "b5fd664ba7c28a798365d454d651b5ee", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
    };
  }
}
