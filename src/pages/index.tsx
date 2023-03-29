import { type NextPage } from "next";
import Head from "next/head";
import BestSellerBrands from "~/sections/homepage/BestSellerBrands";
import Blog from "~/sections/homepage/Blog";
import Contact from "~/sections/homepage/Contact";
import Hero from "~/sections/homepage/Hero";
import HostingPartner from "~/sections/homepage/HostingPartner";
import Investor from "~/sections/homepage/Investor";
import Newsletter from "~/sections/homepage/Newsletter";
import ProfitableMiners from "~/sections/homepage/ProfitableMiners";
import ShopByBrand from "~/sections/homepage/ShopByBrand";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crypto Guru</title>
      </Head>
      <main className="overflow-hidden">
        <Hero />
        <ShopByBrand />
        <ProfitableMiners />
        <Investor />
        <HostingPartner />
        <BestSellerBrands />
        <Contact />
        <Blog />
        <Newsletter />
      </main>
    </>
  );
};

export default Home;
