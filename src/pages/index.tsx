import { type NextPage } from "next";
import Head from "next/head";
import Hero from "~/sections/homepage/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <Hero />
      </main>
    </>
  );
};

export default Home;
