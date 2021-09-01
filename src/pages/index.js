import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Response from "../../Response";

export default function Home({ products }) {
  // console.log(products);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0 | Prahlad-Timalsina</title>
      </Head>
      {/* header component */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
        {/* Product feed */}

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const data = useDummyData
    ? Response
    : await fetch("https://fakestoreapi.com/products").then((response) =>
        response.json()
      );
  return {
    props: {
      products: data,
    },
  };
}
