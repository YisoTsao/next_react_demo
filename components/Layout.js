import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div className="bg-gray-300">
    <Head />
    <NavBar />
    {children}
    {/* <Footer /> */}
  </div>
);

export default Layout;
