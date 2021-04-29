import { IMailProvider } from "../IMailProvider";

class MailProviderInMemory implements IMailProvider {
  private message: any[] = [];
  async sendMail(
    to: string,
    subject: string,
    variables: any,
    body: string,
    path: string
  ): Promise<void> {
    this.message.push({
      to,
      subject,
      variables,
      body,
      path,
    });
  }
}

export { MailProviderInMemory };
