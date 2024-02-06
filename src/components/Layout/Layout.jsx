import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import Navbar from "../Navbar/Navbar";


const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[70px]">
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
