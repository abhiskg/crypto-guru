import type { ReactNode } from "react";
import Banner from "./Banner";
import { Footer } from "./Footer";
import Header from "./Header";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Banner />
      <Header />
      {children}
      <Footer />
    </>
  );
};
