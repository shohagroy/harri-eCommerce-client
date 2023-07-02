import { useGetCategorysQuery } from "@/features/category/categoryApi";
import CommonLayout from "@/layouts/commonLayout";
import Link from "next/link";
import React from "react";

const CategoryContainer = () => {
  const query = { search: "", skip: 0 };
  const { data: categories } = useGetCategorysQuery(query);

  console.log(categories);
  const categorys = [
    {
      name: "Camera Bluetooth & Headset",
      image:
        "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F9hsZsq3%2Fproduct-cat-7.jpg&w=384&q=75",
      linkL: "/",
    },
    {
      name: "Ipad Phone & Tablets",
      image:
        "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FzfTZRSf%2Fproduct-cat-1.jpg&w=384&q=75",
      linkL: "/",
    },

    {
      name: "Planer & Virtual",
      image:
        "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F58zCBkK%2Fproduct-cat-2.jpg&w=384&q=75",
      linkL: "/",
    },

    {
      name: "Spinning Reel & Kettle",
      image:
        "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F7Y7RjMq%2Fproduct-cat-6.jpg&w=384&q=75",
      linkL: "/",
    },
    {
      name: "Computers Monitor & Laptop",
      image:
        "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fp004GJX%2Fproduct-cat-4.jpg&w=384&q=75",
      linkL: "/",
    },

    {
      name: "Exercise Bike & Shaver Clean",
      image:
        "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FydM73jB%2Fproduct-cat-5.jpg&w=384&q=75",
      linkL: "/",
    },
    {
      name: "Wireless & Watches",
      image:
        "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FQHTxCfc%2Fproduct-cat-3.jpg&w=384&q=75",
      linkL: "/",
    },
  ];
  return (
    <section className="my-6 p-3 lg:p-0">
      <CommonLayout>
        <div className="relative w-full flex gap-2 overflow-x-auto text-center font-semibold text-gray-500 ">
          {categories?.data?.data?.map((category) => {
            const { name, icon } = category || {};
            return (
              <Link href={`/shop?search=${name}`}>
                <div
                  key={name}
                  className="h-44 relative capitalize aspect-video rounded-sm "
                >
                  <img
                    className="h-44 w-full  object-center"
                    src={icon[0]?.url}
                    alt={name}
                  />

                  <div className="absolute left-0 top-0 p-3 text-black w-full h-full">
                    <p className="text-center bg-white rounded-full p-1 mt-32">
                      {name}
                    </p>
                  </div>
                </div>
              </Link>

              // <div
              //   key={category.title}
              //   className="relative overflow-hidden rounded-lg shadow-md"
              // >
              //   <img
              //     src={category.image}
              //     alt={category.title}
              //     className="object-cover w-full h-64"
              //   />
              //   <div className="absolute inset-0 flex items-center justify-center p-4 bg-gray-900 bg-opacity-50 transition duration-300 opacity-0 hover:opacity-100">
              //     <h2 className="text-xl font-semibold text-white">
              //       {category.title}
              //     </h2>
              //   </div>
              // </div>
            );
          })}
        </div>
      </CommonLayout>
    </section>
  );
};

export default CategoryContainer;
