import React from "react";
import Footer from "./Footer";
import Header from "./Header";

// import global css file
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="inner__wrapper">
        <Header />
        <main className="content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
