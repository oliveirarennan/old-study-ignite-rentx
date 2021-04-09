import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DatejsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProviderInMemory: MailProviderInMemory;

describe("Send Forgot Mail", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    dateProvider = new DayjsDateProvider();
    usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
    mailProviderInMemory = new MailProviderInMemory();
    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      usersRepositoryInMemory,
      usersTokensRepositoryInMemory,
      dateProvider,
      mailProviderInMemory
    );
  });

  it("should be able to send a forgot Mail", async () => {
    const sendMail = spyOn(mailProviderInMemory, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "719880",
      email: "orico@puwe.rw",
      name: "Ruby Love",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("orico@puwe.rw");

    expect(sendMail).toHaveBeenCalled();
  });

  it("shloud not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("dibsikor@cajir.ss")
    ).rejects.toEqual(new AppError("User does not exists !"));
  });

  it("should be able to create an user token", async () => {
    const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");

    await usersRepositoryInMemory.create({
      driver_license: "510440",
      email: "kuw@viz.km",
      name: "Lucille Cohen",
      password: "1234",
    });

    await sendForgotPasswordMailUseCase.execute("kuw@viz.km");

    expect(generateTokenMail).toBeCalled();
  });
});
