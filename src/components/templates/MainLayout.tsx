"use client";
import React from "react";
import "@/styles/global.css";
import "@/styles/styles.scss";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Footer from "@/components/organisms/Footer";
import Header from "../organisms/Header";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider store={store}>
          <Header />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default MainLayout;
