import { resolve } from "path";
import { inject, injectable } from "tsyringe";
import { v4 as uuidV4 } from "uuid";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRespository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { IMailProvider } from "@shared/container/providers/MailProvider/IMailProvider";
import { AppError } from "@shared/errors/AppError";

@injectable()
class SendForgotPasswordMailUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DayjsDateProvider")
    private dayjsDateProvider: IDateProvider,
    @inject("EtherealMailProvider")
    private mailProvider: IMailProvider
  ) {}
  async execute(email: string): Promise<void> {
    const templatePath = resolve(
      __dirname,
      "..",
      "..",
      "views",
      "emails",
      "forgotPassword.hbs"
    );

    const expires_hour = 3;
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User does not exists !");
    }

    const token = uuidV4();

    const expires_date = this.dayjsDateProvider.addHours(expires_hour);

    await this.usersTokensRepository.create({
      refresh_token: token,
      user_id: user.id,
      expires_date,
    });

    const variables = {
      name: user.name,
      link: `${process.env.FORGOT_MAIL_URL}${token}`,
    };
    let body = `O link para o reset é: ${process.env.FORGOT_MAIL_URL}${token}\n`;
    body += `Caso não tenha sido você que solicitou essa mensagem basta ignora-la`;

    await this.mailProvider.sendMail(
      email,
      "Recuperação de Senha",
      body,
      variables,
      templatePath
    );
  }
}

export { SendForgotPasswordMailUseCase };
