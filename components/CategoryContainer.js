import CommonLayout from "@/layouts/commonLayout";
import React from "react";

const CategoryContainer = () => {
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
          {categorys?.map((category) => {
            const { image, name, link } = category || {};
            return (
              <div className="h-44 relative  aspect-video rounded-sm  ">
                <img
                  className="h-44 w-full  object-cover object-center"
                  src={image}
                  alt={name}
                />

                <div className="absolute left-0 top-0 p-3 text-black w-full h-full">
                  <p className="text-center bg-white rounded-full p-1 mt-32">
                    {name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CommonLayout>
    </section>
  );
};

export default CategoryContainer;
