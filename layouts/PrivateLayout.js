import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const PrivateLayout = ({ children }) => {
  const router = useRouter();
  const { user, isLoading } = useSelector((state) => state.auth);

  console.log(user);

  useEffect(() => {
    if (!user?.email && !isLoading) {
      router.replace("/login", router.asPath);
    }
  }, [user, router]);

  if (isLoading) {
    return (
      <div className="h-screen bg-red-200 w-full flex justify-center items-center">
        <div className="text-center text-4xl">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!user?.email) {
    return null; // Render nothing while redirecting
  }

  return children;
};

export default PrivateLayout;
