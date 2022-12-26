import { SES } from "aws-sdk";
import fs from "fs";
import handlebars from "handlebars";
import nodemailer, { Transporter } from "nodemailer";
import { injectable } from "tsyringe";

import { IMailProvider, ISendMailProps } from "../IMailProvider";

@injectable()
class SESMailProvider implements IMailProvider {
  private client: Transporter;
  constructor() {
    this.client = nodemailer.createTransport({
      SES: new SES({
        apiVersion: "2010-12-01",
        region: process.env.AWS_DEFAULT_REGION,
      }),
    });
  }

  async sendMail({
    to,
    from = "Rentx <noreplay@renxt.com.br>",
    subject,
    variables,
    path,
  }: ISendMailProps): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString("utf-8");

    const templateParse = handlebars.compile(templateFileContent);

    const templateHtml = templateParse(variables);

    await this.client.sendMail({
      to,
      from,
      subject,
      html: templateHtml,
    });
  }
}

export { SESMailProvider };
