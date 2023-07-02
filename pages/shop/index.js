import ProductCard from "@/common/ProductCard";
import Subscribe from "@/common/Subscribe";
import OfferBanar from "@/components/OfferBanar";
import { useGetCategorysQuery } from "@/features/category/categoryApi";
import { useGetProductsQuery } from "@/features/products/productApi";
import CommonLayout from "@/layouts/commonLayout";
import CustomerLayout from "@/layouts/customerLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [searchProducts, setSearchProducts] = useState("");
  const [showPage, setShowPage] = useState(1);
  const [sort, setSort] = useState(1);

  const route = useRouter();

  const { search } = route.query;

  const query = { search: "", skip: 0 };
  const { data: categories } = useGetCategorysQuery(query);

  const productQuery = {
    search: searchProducts,
    skip: showPage === 1 ? 0 : (showPage - 1) * 10,
    sort,
    searchByCategory: activeCategory,
  };

  // console.log(searchProducts);

  const {
    data: products,
    isLoading: productLoading,
    isError: isProductError,
    error: productError,
  } = useGetProductsQuery(productQuery);

  // console.log(products);

  useEffect(() => {
    setSearchProducts(search);
  }, [search]);

  return (
    <>
      <Head>
        <title>HarriShop | All Product</title>
      </Head>
      <main>
        <section className="">
          <CommonLayout>
            <div className="mt-14 lg:mt-0">
              <OfferBanar />
            </div>

            <div className="lg:p-0 p-3">
              <div className="grid grid-cols-4 gap-4">
                <div className="hidden lg:block ">
                  <div className="my-6 border p-3">
                    <p className="p-3 border-b text-2xl text-center font-semibold">
                      Product Category
                    </p>

                    <div className="my-2">
                      <button
                        onClick={() => setActiveCategory("")}
                        className={`p-5  m-1 text-white font-semibold w-full rounded-md ${
                          activeCategory === ""
                            ? "text-red-600 font-bold"
                            : "bg-blue-400"
                        }`}
                      >
                        All Category
                      </button>

                      {categories?.data?.data?.map((category) => {
                        const { _id, name, icon } = category || {};
                        return (
                          <button
                            onClick={() => setActiveCategory(_id)}
                            key={_id}
                            className={`p-3 bg-blue-400 capitalize m-1 text-white font-semibold w-full rounded-md flex justify-center items-center ${
                              activeCategory === _id
                                ? "bg-red-400"
                                : "bg-blue-400"
                            }`}
                          >
                            <img
                              className="h-10 p-1 w-10 mx-2 rounded-full"
                              src={icon[0]?.url}
                              alt="icon"
                            />
                            {name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="my-6 border p-3">
                    <p className="p-3 border-b text-2xl text-center font-semibold">
                      Price Filter
                    </p>

                    <div className="my-2 w-full">
                      <select
                        onChange={(e) => setSort(e.target.value)}
                        className="py-3 px-6 w-full bg-white border"
                      >
                        <option value="low">Price low to high</option>
                        <option value="high">Price high to Low </option>
                      </select>
                    </div>
                  </div>

                  <div className="my-6 border p-3 w-full h-[300px]">
                    <p className="p-3 border-b text-2xl text-center font-semibold">
                      sign up offer
                    </p>

                    <div className="my-2 w-full h-full flex justify-center items-center">
                      <p className="text-5xl text-red-600">1</p>
                    </div>
                  </div>

                  <div className="my-6 border p-3 w-full h-[500px]">
                    <p className="p-3 border-b text-2xl text-center font-semibold">
                      Advertisement
                    </p>

                    <div className="my-2 w-full h-full flex justify-center items-center">
                      <p className="text-5xl text-red-600">1</p>
                    </div>
                  </div>

                  <div className="my-6 border p-3 w-full h-[500px]">
                    <p className="p-3 border-b text-2xl text-center font-semibold">
                      Advertisement
                    </p>

                    <div className="my-2 w-full h-full flex justify-center items-center">
                      <p className="text-5xl text-red-600">2</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 lg:col-span-3  ">
                  <div className="my-6 border p-3 flex flex-col lg:flex-row justify-between items-center">
                    <p className="p-3">
                      Showing 1–12 of {products?.count} results
                    </p>

                    <p>another search items</p>
                    {/* <div>
                      <div className="relative">
                        <input
                          onChange={(e) => setSearchProducts(e.target.value)}
                          className="bg-white w-[300px] border-black border py-2 px-5 rounded-full"
                          type="text"
                          placeholder="search for products..."
                        />

                        <button className="absolute right-3 top-2.5">
                          <BsSearch
                            className="text-gray-500 hover:text-gray-700"
                            size={20}
                          />
                        </button>
                      </div>
                    </div> */}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {products?.data?.map((product) => {
                      return <ProductCard key={product?._id} info={product} />;
                    })}
                  </div>
                </div>
              </div>

              <div className=" my-10">
                <div className="p-4  flex w-full justify-center">
                  <div className="flex items-center">
                    <button className="p-2 hover:bg-gray-200 duration-300  flex items-center border mx-1">
                      <span>
                        <AiOutlineLeft />
                      </span>
                      <span>Prev </span>
                    </button>

                    <button className="p-2 bg-red-600 text-white duration-300 rounded-md mx-1">
                      1
                    </button>
                    <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                      2
                    </button>
                    <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                      3
                    </button>

                    <span>-</span>

                    <button className="p-2 hover:bg-gray-200 duration-300 rounded-md mx-1">
                      21
                    </button>
                    <button className="p-2 hover:bg-gray-200 duration-300  flex items-center border mx-1">
                      <span>Next</span>
                      <span>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CommonLayout>
          <Subscribe />
        </section>
      </main>
    </>
  );
};

Shop.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default Shop;
