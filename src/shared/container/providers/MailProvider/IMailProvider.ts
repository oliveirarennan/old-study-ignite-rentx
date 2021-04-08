interface IMailProvider {
  sendMail(
    to: string,
    subject: string,
    variables: any,
    body: string,
    path: string
  ): Promise<void>;
}

export { IMailProvider };
