/** @format */

import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {
        // add all page
        children
      }
      {}

      <Footer />
    </>
  );
};

export default Layout;
