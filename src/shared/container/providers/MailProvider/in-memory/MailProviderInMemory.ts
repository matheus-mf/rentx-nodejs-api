import { IMailProvider, ISendMailProps } from "../IMailProvider";

class MailProviderInMemory implements IMailProvider {
  private message: unknown[] = [];
  async sendMail(data: ISendMailProps): Promise<void> {
    this.message.push(data);
  }
}

export { MailProviderInMemory };
