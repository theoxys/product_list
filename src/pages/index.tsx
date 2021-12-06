import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { api } from "../services/api";
import { Product } from "../interfaces/product";
import { useEffect, useState } from "react";
import { Price } from "../components/Price";

const Home: NextPage = ({ products }: any) => {
  const [productList, setProductList] = useState([] as Product[]);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main-content">
        {productList.map((product: Product) => (
          <div key={product.ProductID} className="product-container">
            <Image
              src={product.ThumbnailURL}
              alt={product.Name}
              width={150}
              height={150}
              className="p-thumb"
            />
            <h1 className="p-name">{product.Name}</h1>
            <Price price={product.Price} retailPrice={product.RetailPrice} />
            <button className="btn">View Details</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await api.get("products");

  const productList = response.data;

  return {
    props: {
      products: productList,
    },
  };
};

export default Home;
