import { type AppType } from "next/dist/shared/lib/utils";
import { MainLayout } from "~/layout/MainLayout";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
