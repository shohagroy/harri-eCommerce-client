import { useGetLoginUserQuery } from "@/features/auth/authApi";
import { useRouter } from "next/router";
import React from "react";

const PrivateLayout = ({ children }) => {
  const router = useRouter();

  const { data, isLoading, isError, isSuccess, error } = useGetLoginUserQuery();

  console.log(data, isLoading, isError, isSuccess, error);

  if (isLoading) {
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-center">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!data?.data?.email) {
    // return <Navigate to="/login" state={{ path: location }} replace></Navigate>;
    router.replace("/login", router.asPath);
    return null;
  } else {
    return children;
  }
};
export default PrivateLayout;
