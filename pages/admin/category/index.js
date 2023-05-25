import AddNewCategory from "@/components/admin/Category/AddNewCategory";
import CategoryTable from "@/components/admin/Category/CategoryTable";
import AdminLayout from "@/Layouts/AdminLayout";
import CommonLayout from "@/layouts/commonLayout";
import { Drawer } from "antd";
import { useState } from "react";

import { useGetCategorysQuery } from "@/features/category/categoryApi";

const Category = () => {
  const [categoryDrawer, setCategoryDeawer] = useState(false);

  const { data, isLoading, isError, error } = useGetCategorysQuery();

  console.log(data, isLoading);

  // console.log(process.env.NEXT_APP_API_URL);

  return (
    <section className=" bg-gray-100 min-h-screen">
      <CommonLayout>
        <div className="">
          <h3 className="lg:py-4 text-xl font-semibold p-2 ">Category</h3>

          {/* products search section  */}
          <div className="my-3 grid grid-cols-1 lg:grid-cols-5  py-6 px-4 gap-6 rounded-md shadow-sm bg-white w-full">
            <div className="lg:col-span-4 col-span-2">
              <input
                className="w-full p-3 focus:outline-none rounded-md border bg-gray-100"
                type="text"
                placeholder="search by category name"
              />
            </div>

            <div className="w-full bg-red-200">
              <button
                onClick={() => setCategoryDeawer(true)}
                className="w-full h-full p-3 lg:p-0 bg-red-600/40 rounded-md text-white hover:bg-red-600 duration-300"
              >
                + Add Category
              </button>
            </div>
          </div>

          <CategoryTable />
        </div>
      </CommonLayout>

      <Drawer
        title={"Add Category"}
        placement="right"
        // width={300}
        onClose={() => setCategoryDeawer(false)}
        open={categoryDrawer}
      >
        <AddNewCategory
          categoryDrawer={categoryDrawer}
          setCategoryDeawer={setCategoryDeawer}
        />
      </Drawer>
    </section>
  );
};

Category.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Category;
