import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0 | Prahlad-Timalsina</title>
      </Head>
      {/* header component */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />
      </main>
    </div>
  );
}
