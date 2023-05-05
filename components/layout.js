import Navbar from "./navbar";
import SideMenu from "./sidemenu";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SideMenu />

      <main>{children}</main>
    </>
  );
};

export default Layout;
