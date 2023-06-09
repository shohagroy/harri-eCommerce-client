import Header from "@/components/admin/Header";
import SideBar from "@/components/admin/SideBar";
import { useGetLoginUserQuery } from "@/features/auth/authApi";
import React from "react";

const AdminLayout = ({ children }) => {
  // const { data, isLoading, isError, isSuccess } = useGetLoginUserQuery();

  // console.log(data, isLoading, isError, isSuccess);
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="">
          <SideBar />
        </div>

        <div className="w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
