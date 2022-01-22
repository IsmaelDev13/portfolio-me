/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GoogleSpreadsheet } from "google-spreadsheet";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== "POST") {
    return response.status(400).send("400 Bad request");
  }
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    private_key: process.env.GOOGLE_PRIVATE_KEY!,
  });

  await doc.loadInfo();
  await doc.updateProperties({ title: "Portfolio Docs" });

  // create a sheet and set the header row
  const sheet = await doc.addSheet({ headerValues: ["email"] });
  const portRow = await sheet.addRow({
    email: request.body.email,
  });

  const rows = await sheet.getRows(); // can pass in { limit, offset }
  return response.status(201).send("OK");
};
