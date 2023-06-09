import React from "react";

const PrivateLayout = ({ children }) => {
  const location = useLocation();

  if (loader) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-center">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ path: location }} replace></Navigate>;
  } else {
    return children;
  }
};
export default PrivateLayout;
