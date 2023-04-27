import Header from "@/shared/Header/Header";
import React from "react";

const CustomerLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default CustomerLayout;
