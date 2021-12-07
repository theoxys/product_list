import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { api } from "../services/api";
import { Product } from "../interfaces/product";
import Price from "../components/Price";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { toast, Slide } from "react-toastify";
interface PageProps {
  product: Product;
}

const Product: NextPage<PageProps> = ({ product }) => {
  const handleShowToast = () => {
    toast("Product added successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Slide,
    });
  };

  return (
    <div>
      <Head>
        <title>{product.Name}</title>
        <meta name="description" content="Product list built in NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="detail-container">
        <div className="detail-image">
          <Image
            src={product.PictureURL}
            alt={product.Name}
            width={350}
            height={350}
          />
        </div>
        <section>
          <h1>{product.Name}</h1>
          <Rating
            fractions={2}
            initialRating={product.RatingAvg}
            readonly
            emptySymbol={<AiOutlineStar />}
            fullSymbol={<AiFillStar />}
          />
          <p>{product.Description}</p>
        </section>
        <div className="price-column">
          <Price price={product.Price} retailPrice={product.RetailPrice} />
          <div>
            <span>
              {product.Stock > 0
                ? `In stock: ${product.Stock}`
                : "Out Of Stock"}
            </span>
            <button className="btn" onClick={handleShowToast}>
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <footer className="detail-footer">
        <span>
          <strong>Brand:</strong> {product.Brand}
        </span>
        <span>
          <strong>Color:</strong> {product.Color}
        </span>
      </footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await api.get(`products/${params?.id}`);

  const productDetail = response.data;
  console.log(productDetail);
  return {
    props: {
      product: productDetail,
    },
  };
};

export default Product;
