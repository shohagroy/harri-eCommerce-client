import CommonLayout from "@/layouts/commonLayout";
import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Shops", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "About Us", link: "/" },
  ];

  return (
    <section className="border-b py-3 shadow-sm bg-blue-200/30">
      <CommonLayout>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg"
              alt="logo"
            />

            <div className="ml-8">
              {Links.map((menu) => (
                <Link className="mx-2" href={menu.link}>
                  {menu.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative">
              <input
                className="bg-white w-[300px] py-2 px-3 rounded-full"
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

            <div className="ml-4 flex items-center">
              <button className="mx-2">
                <FiUser size={25} />
              </button>

              <div className="relative">
                <button className="mx-1">
                  <AiOutlineHeart size={30} />
                </button>
                <small className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center bg-red-600 text-white font-bold rounded-full">
                  1
                </small>
              </div>

              <div className="relative">
                <button className="mx-2">
                  <AiOutlineShoppingCart size={30} />
                </button>

                <div>
                  <small className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center bg-red-600 text-white font-bold rounded-full">
                    1
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>

      {/* mobile menu  */}
      <div className=""></div>
    </section>
  );
};

export default Header;
