import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import AppError from "@shared/errors/AppError";

import CreateUserUseCase from "../createUser/CreateUserUseCase";
import AuthenticationUserUseCase from "./AuthenticationUserUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;
let authenticationUserUseCase: AuthenticationUserUseCase;

let createUserUseCase: CreateUserUseCase;

describe("Authentication User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    dayjsDateProvider = new DayjsDateProvider();
    authenticationUserUseCase = new AuthenticationUserUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dayjsDateProvider
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
    ).rejects.toEqual(new AppError("Email or Password incorrect!"));
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
    ).rejects.toEqual(new AppError("Email or Password incorrect!"));
  });
});
