import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { FloatButton } from "antd";
export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatButton.BackTop />
    </>
  );
}
