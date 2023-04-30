import CommonLayout from "@/layouts/commonLayout";
import CustomerLayout from "@/layouts/customerLayout";
import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import ProductCard from "@/common/ProductCard";

const ProductDetails = () => {
  return (
    <section className="p-3 my-16 lg:p-0">
      <CommonLayout>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full h-full">
            <img
              className="w-full h-full"
              src="https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfpwMhjX%2Fproduct-rel-10-3.jpg&w=1080&q=75"
              alt=""
            />
          </div>
          <div className="w-full h-full">
            <div>
              <p className="text-red-600 border py-2 font-semibold w-[150px] text-center">
                48 In Stock
              </p>
              <p className="text-3xl py-2 font-semibold">
                Stariver Electric Kettle
              </p>

              <p className="my-2 text-sm">
                Shop Harry.com for every day low prices. Free shipping on orders
                $35+ or Pickup In-store and get
              </p>

              <h2 className="text-3xl font-bold">$59</h2>
            </div>

            <div className="flex items-center my-4">
              <div className="w-full my-3 lg:w-[300px]">
                <button className="w-full py-2 text-white bg-black flex justify-center items-center">
                  <span>
                    <AiOutlineShoppingCart size={20} />
                  </span>{" "}
                  Add to Cart
                </button>
              </div>

              <button className="w-10 h-10 ml-2 lg:ml-3  flex justify-center items-center border">
                <AiOutlineHeart size={20} />
              </button>
            </div>

            <div className="border-t">
              <p className="py-3 text-2xl font-bold">Description</p>

              <h2 className="text-xl font-semibold py-2">
                Stariver Electric Kettle
              </h2>
              <p>
                ★ [Practical Gooseneck Spout] - This kettle is designed with a
                gooseneck spout for precision control during pouring. The long
                and slender opening can greatly control the water flow to give a
                steady and predictable pour so that you can perfectly extract to
                enjoy a good cup of coffee, tea or milk. ★[Food Grade Stainless
                Steel] - This gooseneck kettle is 100% BPA-free, the interior of
                the kettle is totally made of food-grade stainless steel without
                any plastic. In order to bring you healthier drinking and higher
                life quality. There will be no plastic or metal taste in your
                water or coffee. ★ [Humanization Design] - One-touch switch is
                easy to operate the kettle, and the ergonomic design allows the
                kettle to be easily lifted off for pouring after the water
                boiling. The cool touch and grip design of handle can
                ergonomically give you a real and comfortable grip on your
                kettle.​
              </p>
            </div>

            <div className="mt-12">
              <p>
                <strong>SKU:</strong> 29045-SB-10
              </p>

              <p>
                <strong>Categories:</strong> iPhone Cases,Android
                Cases,Accessories
              </p>

              <div className="flex items-center mt-2">
                <p className="mr-2">
                  <strong>Tags:</strong>
                </p>

                <button className="px-3 border hover:bg-red-600 hover:text-white duration-300">
                  Stariver
                </button>
                <button className="px-3 border hover:bg-red-600 hover:text-white duration-300">
                  Electric
                </button>
                <button className="px-3 border hover:bg-red-600 hover:text-white duration-300">
                  Kettle
                </button>
              </div>

              <div className="flex items-center mt-6">
                <p className="mr-2">
                  <strong>Share:</strong>
                </p>

                <button className="hover:text-red-600 mr-2 duration-300">
                  <RiFacebookFill />
                </button>
                <button className="hover:text-red-600 mr-2 duration-300">
                  <AiOutlineTwitter />
                </button>
                <button className="hover:text-red-600 mr-2 duration-300">
                  <AiFillLinkedin />
                </button>
                <button className="hover:text-red-600 mr-2 duration-300">
                  <AiFillYoutube />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 lg:my-16">
          <p className="text-2xl font-bold border-l-4 border-red-600 pl-2">
            Related Products
          </p>

          <div className="mt-4">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {[...Array(5)].map((Number, i) => (
                <ProductCard info={i} key={i} />
              ))}
            </div>
          </div>
        </div>
      </CommonLayout>
    </section>
  );
};

ProductDetails.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default ProductDetails;
