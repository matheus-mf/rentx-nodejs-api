import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import AppErre from "../errors/AppErre";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppErre("Token missing", 401);
  }
  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(
      token,
      "b5fd664ba7c28a798365d454d651b5ee"
    ) as IPayload;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new AppErre("User dos not existis!", 401);
    }
    next();
  } catch {
    throw new AppErre("Invalid token!", 401);
  }
}
