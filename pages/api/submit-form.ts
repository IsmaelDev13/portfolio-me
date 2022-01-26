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
  // await doc.updateProperties({ title: "Portfolio Docs" });
  // create a sheet and set the header row
  const sheetID = process.env.SPREADSHEET_ID!;
  const sheet = doc.sheetsById[sheetID];

  // const sheet = await doc.addSheet({
  //   headerValues: ["name", "email", "comment"],
  // });
  console.log(sheet);
  const portRow = await sheet.addRows([
    { name: request.body.name },
    { email: request.body.email },
    { comment: request.body.comment },
  ]);
  console.log(portRow);

  const rows = await sheet.getRows(); // can pass in { limit, offset }
  return response.status(201).send("OK");
};
