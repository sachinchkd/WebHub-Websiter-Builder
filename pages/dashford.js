import Header from "../components/header";
import Cards from "../components/card";
import Website from "./website";
import Link from "next/link";

const Dashford = () => {
  return (
    <>
      <Link legacyBehavior href="/website">
        <a target="_blank">
          <Header Title="Date" buttonTitle="Go to your website" />
        </a>
      </Link>

      <Cards />
    </>
  );
};

export default Dashford;
