import { Inter } from "next/font/google";
import Dashford from "./dashford";
import Home from "./Home";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const router = useRouter();
  const [isUser, setIsUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const responseShop = JSON.parse(localStorage.getItem("response"));
    if (responseShop) {
      setLoading(false);
      setIsUser(true);
    } else {
      setLoading(false);
    }
  }, [loading]);
  if (error) {
    return (
      <div className="error">
        <h1>Error</h1>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    );
  }
  if (isUser) {
    return (
      <>
        <Navbar />
        <SideMenu />
        <main>
          <Dashford />
        </main>
      </>
    );
  } else {
    return (
      <>
        <Home />
      </>
    );
  }
}
