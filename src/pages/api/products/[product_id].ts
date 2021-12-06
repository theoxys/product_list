const fsp = require("fs").promises;
const path = require("path");
import type { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { product_id } = req.query;
    console.log(product_id);

    const jsonFile = await fsp.readFile(
      path.join(__dirname, "../../../../../src/data/productList.json")
    );
    const jsonData = JSON.parse(jsonFile);

    const productData = jsonData.find(
      (product: any) => product.ProductID === parseInt(product_id.toString())
    );

    console.log(productData);

    res.status(200).json(productData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error in Json file" });
  }
}
