import React from "react";
import { Inter } from "next/font/google";
import Dashford from "./dashford";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Dashford />
      </Layout>
    </>
  );
}
