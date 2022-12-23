export interface ISendMailProps {
  to: string;
  from?: string;
  subject: string;
  variables: unknown;
  path: string;
}

export interface IMailProvider {
  sendMail(data: ISendMailProps): Promise<void>;
}
