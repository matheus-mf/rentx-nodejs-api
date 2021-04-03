import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import AppError from "@shared/errors/AppError";

import CreateUserUseCase from "../createUser/CreateUserUseCase";
import AuthenticationUserUseCase from "./AuthenticationUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticationUserUseCase: AuthenticationUserUseCase;

let createUserUseCase: CreateUserUseCase;

describe("Authentication User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticationUserUseCase = new AuthenticationUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to authentication an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      name: "John Doe",
      email: "johndoe@exemple.com",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    const result = await authenticationUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authentication an nonexistent user", async () => {
    await expect(
      authenticationUserUseCase.execute({
        email: "false@email.com",
        password: "1234",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authentication an user with incorrect password", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      name: "John Doe",
      email: "johndoe@exemple.com",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticationUserUseCase.execute({
        email: user.email,
        password: "incorrect-password",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
