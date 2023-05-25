import { Inter } from "next/font/google";
import Dashford from "./dashford";
import Layout from "../components/layout";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [error, setError] = useState("false");
  const [loading, setLoading] = useState("true");
  useEffect(() => {
    const responseShop = JSON.parse(localStorage.getItem("response"));
    if (!response) {
      setError("true");
    } else {
      setLoading(false);
      
    }
  }, [loading]);
  if (error)
    return (
      <>
        <Layout>
          <Dashford />
        </Layout>
      </>
    );
}
