import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slider";
import ProductsList from "../components/ProductsList";
import axios from "axios";

// const inter = Inter({ subsets: ["latin"] });

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      {/* navbar */}

      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*  logo image */}
      <Slider />
      {/* product list */}
      <ProductsList pizzaList={pizzaList} />
    </div>
  );
}
// ==> fetch data from API use (serverSaidRandring)
export const getServerSideProps = async () => {
  // get
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
