import ProductCard from "@/common/ProductCard";
import Subscribe from "@/common/Subscribe";
import OfferBanar from "@/components/OfferBanar";
import CommonLayout from "@/layouts/commonLayout";
import CustomerLayout from "@/layouts/customerLayout";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Shop = () => {
  return (
    <section className="">
      <CommonLayout>
        <div className="mt-14 lg:mt-0">
          <OfferBanar />
        </div>

        <div className="lg:p-0 p-3">
          <div className="my-6 border p-3 flex flex-col lg:flex-row justify-between items-center">
            <p className="p-3">Showing 1–9 of 27 results</p>
            <div>
              <select className="py-3 px-6 bg-white border">
                <option value="">Sort Filtering</option>
                <option value="">Latest Product</option>
                <option value="">Price low to high</option>
                <option value="">Price high to to </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((Number, i) => {
              return <ProductCard info={i} />;
            })}
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
  );
};

Shop.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default Shop;
