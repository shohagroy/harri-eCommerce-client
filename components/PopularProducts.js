import ProductCard from "@/common/ProductCard";
import { useGetProductsQuery } from "@/features/products/productApi";
import CommonLayout from "@/layouts/commonLayout";
import React from "react";

const PopularProducts = () => {
  const productQuery = {
    search: "",
    skip: 0,
    sort: 1,
    searchByCategory: "",
  };

  const {
    data: products,
    isLoading: productLoading,
    isError: isProductError,
    error: productError,
  } = useGetProductsQuery(productQuery);

  return (
    <section className="p-3">
      <CommonLayout>
        <div className="flex flex-col lg:justify-between lg:flex-row items-center">
          <div className="leading-none w-full">
            <h3 className="text-4xl font-bold border-l-4 border-red-600 px-2">
              Popular Products
            </h3>
          </div>
          <div className="mt-3 font-semibold w-full flex justify-between items-center">
            <button className="w-full text-center border-b-2 text-red-600 border-red-600 p-2">
              Top Rated
            </button>
            <button className="w-full text-center p-2">Best Selling</button>
            <button className="w-full text-center p-2">Latest Product</button>
          </div>
        </div>

        <div className="my-6 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {products?.data.map((product) => (
            <ProductCard key={product?._id} info={product} />
          ))}
        </div>
      </CommonLayout>
    </section>
  );
};

export default PopularProducts;
