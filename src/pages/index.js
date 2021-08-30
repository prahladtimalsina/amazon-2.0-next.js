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
  const useDummyData = true;
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

// export async function getServerSideProps(context) {
//   const useDummyData = false;
//   const startIndex = context.query.start || "0";
//   const data = useDummyData
//     ? Response
//     : await fetch(
//         `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
//       ).then((response) => response.json());

//   return {
//     props: {
//       results: data,
//     },
//   };
// }
