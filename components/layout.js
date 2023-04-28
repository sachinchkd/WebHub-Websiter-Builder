import Navbar from "./navbar";
import SideMenu from "./sidemenu";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SideMenu />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
