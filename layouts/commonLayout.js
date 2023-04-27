import React from "react";

const CommonLayout = ({ children }) => {
  console.log(children);
  return <div className="max-w-[1460px] mx-auto">{children}</div>;
};

export default CommonLayout;
