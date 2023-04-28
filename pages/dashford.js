import Header from "../components/header";
import Cards from "../components/card";
import Website from "./website";
import Link from "next/link";
import Demo from "../components/demo";

const Dashford = () => {
  // const openTab = (e) => {
  //   e.preventDefault();
  //   window.open("/window", "_blank");
  // };

  return (
    <div>
      <Link legacyBehavior href="/website">
        <a target="_blank">
          <Header Title="Date" buttonTitle="Go to your website" />
        </a>
      </Link>

      <Cards />
      <Demo />
    </div>
  );
};

export default Dashford;
