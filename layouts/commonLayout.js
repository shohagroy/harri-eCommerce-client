import React from "react";

const CommonLayout = ({ children }) => {
  return (
    <div className="lg:max-w-[1024px] xl:max-w-[1240px] mx-auto">
      {children}
    </div>
  );
};

export default CommonLayout;
