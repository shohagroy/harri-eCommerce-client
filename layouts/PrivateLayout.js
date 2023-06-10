import { useGetLoginUserQuery } from "@/features/auth/authApi";
import { useRouter } from "next/router";
import React from "react";

const PrivateLayout = ({ children }) => {
  const router = useRouter();

  const { data, isLoading } = useGetLoginUserQuery();

  if (isLoading) {
    return (
      <div className="h-screen bg-red-200 w-full flex justify-center items-center">
        <div className="text-center text-4xl">
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
