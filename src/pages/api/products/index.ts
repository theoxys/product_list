const fsp = require("fs").promises;
const path = require("path");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const jsonFile = await fsp.readFile(
      path.join(__dirname, "../../../../src/data/productList.json")
    );
    const jsonData = JSON.parse(jsonFile);
    res.status(200).json(jsonData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error in Json file" });
  }
}
