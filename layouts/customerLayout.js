import Footer from "@/shared/Footer/Footer";
import Header from "@/shared/Header/Header";
import React from "react";

const CustomerLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className=" lg:mt-0">{children}</div>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
