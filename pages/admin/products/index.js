import { useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import ProductsTable from "@/components/admin/Products/ProductsTable";
import CommonLayout from "@/layouts/commonLayout";
import { useGetCategorysQuery } from "@/features/category/categoryApi";
import Link from "next/link";
import { useGetProductsQuery } from "@/features/products/productApi";
import Head from "next/head";

const Products = () => {
  const query = {
    search: "",
    skip: 0,
  };
  const {
    data: categories,
    isLoading,
    isError,
    isSuccess,
  } = useGetCategorysQuery(query);

  const prices = [
    {
      _id: 1,
      name: "Low to High",
    },
    {
      _id: 2,
      name: "High to Low",
    },
  ];

  const {
    data: products,
    isLoading: productLoading,
    isError: isProductError,
    error: productError,
  } = useGetProductsQuery(query);

  return (
    <>
      <Head>
        <title>Admin | Products</title>
      </Head>
      <main>
        <section className="  bg-gray-100 min-h-screen">
          <CommonLayout>
            <div className="">
              <h3 className="lg:py-4 text-xl font-semibold p-2 ">Products</h3>

              {/* products search section  */}
              <div className="my-3 grid grid-cols-1 lg:grid-cols-4 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
                <input
                  className="w-full p-3 focus:outline-none rounded-md border bg-gray-100"
                  type="text"
                  placeholder={"search by product name"}
                />

                <div>
                  <select
                    name="category"
                    id=""
                    className="w-full p-3 rounded-md border bg-gray-100 active:bg-white capitalize"
                  >
                    <option value={""} className="hidden">
                      Category
                    </option>

                    {categories?.data?.map((item, i) => (
                      <option className="" key={i} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    name="category"
                    id=""
                    className="w-full p-3 rounded-md border bg-gray-100 active:bg-white"
                  >
                    {prices?.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Link href={"/admin/addNewProduct"}>
                    <button className="w-full h-full p-3 lg:p-0 bg-[#0E9F6E] rounded-md text-white hover:bg-[#07895e] duration-300">
                      + Add Product
                    </button>
                  </Link>
                </div>
              </div>

              {/* products table  */}
              <ProductsTable products={products?.data} />
            </div>
          </CommonLayout>
        </section>
      </main>
    </>
  );
};

Products.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Products;
