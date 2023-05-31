import CommonLayout from "@/layouts/commonLayout";
import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { RiFacebookFill } from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineBars,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { HiOutlineXMark } from "react-icons/hi2";
import CartDrawer from "@/components/CartDrawer";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [userMenu, setUserMenu] = React.useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "Shops", link: "/shop" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "About Us", link: "/about-us" },
  ];

  const user = null;

  return (
    <section className="w-full border-b shadow-sm bg-[#F0F2EE]">
      <CommonLayout>
        <div className="hidden p-3 lg:flex justify-between items-center">
          <div className="flex items-center">
            <Link href={"/"}>
              <img
                src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg"
                alt="logo"
              />
            </Link>
            <div className="ml-8">
              {Links.map((menu) => (
                <Link key={menu.name} className="mx-2" href={menu.link}>
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
              <div className="relative">
                <button onClick={() => setUserMenu(!userMenu)} className="mx-2">
                  <FiUser size={25} />
                </button>

                {/* user modal menu  */}
                {userMenu && (
                  <div
                    className="absolute z-50 bottom-100 rounded-lg shadow-lg -left-12
               text-gray-600 text-sm font-semibold  bg-white w-[250px]"
                  >
                    <div>
                      {user ? (
                        <>
                          <Link
                            href={"/admin/dashboard"}
                            className="w-full flex items-center p-3 duration-300 hover:bg-gray-200 "
                          >
                            <RxDashboard className="mr-2" />
                            <span className="">Dashbord</span>
                          </Link>

                          <Link
                            href={"/admin/setting"}
                            className="w-full flex font-sm p-3 duration-300 hover:bg-gray-200 items-center"
                          >
                            <AiFillSetting className="mr-2" />
                            <span className="">Edit Profile</span>
                          </Link>

                          <button className="w-full rounded-lg rounded-t-none flex font-sm p-3 duration-300 hover:bg-gray-200 items-center">
                            <AiOutlineLogout className="mr-2" />
                            <span className="">Log Out</span>
                          </button>
                        </>
                      ) : (
                        <Link href="/login">
                          <button
                            onClick={() => setUserMenu(false)}
                            className="w-full rounded-lg rounded-t-none flex font-sm p-3 duration-300 hover:bg-gray-200 items-center"
                          >
                            <AiOutlineLogout className="mr-2" />
                            <span className="">Log in</span>
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative cursor-pointer">
                <Link href={"/myWishlist"}>
                  <button className="mx-1">
                    <AiOutlineHeart size={30} />
                  </button>
                </Link>

                <small className="absolute cursor-pointer top-0 right-0 w-5 h-5 flex justify-center items-center  bg-red-600 text-white font-bold rounded-full">
                  1
                </small>
              </div>

              <div
                className="relative "
                onClick={() => setOpenDrawer(!openDrawer)}
              >
                <button className="mx-2">
                  <AiOutlineShoppingCart size={30} />
                </button>

                <div className="cursor-pointer">
                  <small className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center bg-red-600 text-white font-bold rounded-full">
                    1
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile menu  */}
        <div className=" lg:hidden fixed w-full border-b  z-50 shadow-sm ">
          <div className="">
            <div className="flex h-[7vh] px-3 bg-[#F0F2EE] items-center justify-between">
              <img
                src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg"
                alt="logo"
              />
              {open ? (
                <button
                  onClick={() => setOpen(!open)}
                  className="w-10 h-10 flex justify-center items-center rounded-full border shadow-md"
                >
                  <HiOutlineXMark size={25} />
                </button>
              ) : (
                <button
                  className="w-10 h-10 flex justify-center items-center "
                  onClick={() => setOpen(!open)}
                >
                  <AiOutlineBars size={25} />
                </button>
              )}
            </div>

            <div
              className={`absolute  w-full ${
                open ? "left-0" : "left-[100%] duration-300"
              } bg-white`}
            >
              <div className="h-[93vh] w-full">
                <div className="m-3">
                  <ul>
                    {Links.map((menu) => (
                      <li
                        key={menu.name}
                        className="border-b py-2"
                        onClick={() => setOpen(!open)}
                      >
                        <Link className="mx-2" href={menu.link}>
                          {menu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className=" flex justify-center my-4">
                  <div className="relative ">
                    <input
                      className="bg-white w-[350px] border py-2 px-3 rounded-full"
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
                </div>

                <div className="flex items-center justify-center w-full">
                  <button className="m-2" onClick={() => setOpen(!open)}>
                    <FiUser size={25} />
                  </button>

                  <div className="relative  " onClick={() => setOpen(!open)}>
                    <Link href={"/myWishlist"}>
                      <button className="m-1">
                        <AiOutlineHeart size={30} />
                      </button>
                    </Link>
                    <small className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center bg-red-600 text-white font-bold rounded-full">
                      1
                    </small>
                  </div>

                  <div
                    className="relative cursor-pointer "
                    onClick={() => setOpen(!open)}
                  >
                    <button
                      className="m-2"
                      onClick={() => setOpenDrawer(!openDrawer)}
                    >
                      <AiOutlineShoppingCart size={30} />
                    </button>

                    <div>
                      <small className="absolute top-0 right-0 w-5 h-5 flex justify-center items-center bg-red-600 text-white font-bold rounded-full">
                        1
                      </small>
                    </div>
                  </div>
                </div>

                <div className="border-b mt-28 py-8 px-2">
                  <p className="font-semibold">Follow :</p>

                  <div className=" flex items-center mt-2">
                    <div className="w-8 h-8 flex justify-center items-center border">
                      <RiFacebookFill size={20} />
                    </div>

                    <div className="w-8 h-8 ml-1 flex justify-center items-center border">
                      <AiOutlineTwitter size={20} />
                    </div>

                    <div className="w-8 h-8 ml-1 flex justify-center items-center border">
                      <AiFillLinkedin size={20} />
                    </div>

                    <div className="w-8 h-8 ml-1 flex justify-center items-center border">
                      <AiFillYoutube size={20} />
                    </div>
                  </div>
                </div>

                <div className="mt-10 m-2">
                  <p className="text-2xl font-bold">+964 742 44 763</p>
                  <p>shohagroy@gmail.com</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full">
                <img
                  className="w-full "
                  src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Foffcanvas-shape-1.d0d69b5e.png&w=750&q=75"
                  alt="background_image"
                />
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>

      <CartDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      ></CartDrawer>
    </section>
  );
};

export default Header;
