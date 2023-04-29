import Header from "@/shared/Header/Header";
import React from "react";

const CustomerLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className=" lg:mt-0">{children}</div>
    </div>
  );
};

export default CustomerLayout;
