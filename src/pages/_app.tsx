import { type AppType } from "next/dist/shared/lib/utils";
import { MainLayout } from "~/layout/MainLayout";
import { Rubik } from "next/font/google";

import "~/styles/globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rubik",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${rubik.variable} font-sans`}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
};

export default MyApp;
