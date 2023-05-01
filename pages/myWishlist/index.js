import CommonLayout from "@/layouts/commonLayout";
import CustomerLayout from "@/layouts/customerLayout";
import Link from "next/link";
import React from "react";
import { BiTrash } from "react-icons/bi";

const myWishlist = () => {
  const [count, setCount] = React.useState(1);
  return (
    <section className="mt-12 lg:mt-0">
      <div
        className=" shadow-md  lg:h-[300px] flex justify-center items-center"
        style={{
          backgroundImage: `url(https://hamart-shop.vercel.app/_next/static/media/cta-bg-1.3e8b3216.jpg)`,
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        <p className="p-12 text-2xl lg:text-4xl text-center font-bold ">
          My Wishlist
        </p>
      </div>

      <CommonLayout>
        <div className="bg-[#F0F2EE] mt-10">
          <Link href={"/shop"}>
            <p className="p-5">Continue Shopping</p>
          </Link>
        </div>

        <div className="my-6 p-3 lg:p-0 text-xs lg:text-normal">
          <div className="mx-auto ">
            <div className="overflow-x-auto">
              <table className="min-w-full ">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="border">
                  <tr className="text-center">
                    <th className="p-3 border">Image</th>
                    <th className="p-3 border">Product</th>
                    <th className="p-3 border">Unit Price</th>
                    <th className="p-3 border">Quantity</th>
                    <th className="p-3 border ">Total</th>
                    <th className="p-3 border">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-opacity-20 ">
                    <td className="p-3 border-r">
                      <div className="w-full h-full flex justify-center items-center">
                        <img
                          className="w-28 h-auto"
                          src="https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F2dDcxYr%2Fproduct-1.jpg&w=128&q=75"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="p-3 border-r">
                      <div className="w-full h-full flex justify-center items-center">
                        <Link href={"/"}>
                          <p className="text-xl font-semibold hover:text-red-600">
                            Buy Guild Planer - 900w
                          </p>
                        </Link>
                      </div>
                    </td>
                    <td className="p-3 border-r ">
                      <div className="w-full h-full flex justify-center items-center">
                        <p className="text-xl font-semibold hover:text-red-600">
                          $239
                        </p>
                      </div>
                    </td>

                    <td className="p-3 border-r ">
                      <div className="w-full h-full flex justify-center items-center">
                        <div className="flex items-center content-center my-auto  py-0 rounded-md border border-gray-100 font-semibold">
                          <div className="m-0">
                            <button
                              disabled={count < 2 ? true : false}
                              onClick={() => setCount(count - 1)}
                              className=" px-3 py-1 my-0 mx-auto text-lg "
                            >
                              −
                            </button>
                          </div>
                          <div className="m-0">
                            <p className=" px-3 py-1 my-0 mx-auto ">{count}</p>
                          </div>
                          <div className="m-0">
                            <button
                              onClick={() => setCount(count + 1)}
                              className=" px-3 py-1 my-0 mx-auto text-lg "
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="p-3 border-r ">
                      <div className="w-full h-full flex justify-center items-center">
                        <p className="text-xl font-semibold hover:text-red-600">
                          $239
                        </p>
                      </div>
                    </td>
                    <td className="p-3 border-r ">
                      <div className="w-full h-full flex justify-center items-center">
                        <button className="text-red-600">
                          <BiTrash size={30} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="my-4 p-3 lg:p-0">
          <Link href={"/myCart"}>
            <button className=" p-4 bg-black text-white font-semibold">
              Go to Cart
            </button>
          </Link>
        </div>
      </CommonLayout>
    </section>
  );
};

myWishlist.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default myWishlist;
