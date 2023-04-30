import React from "react";
import { AiOutlineHeart, AiFillEye, AiOutlineLink } from "react-icons/ai";

const ProductCard = ({ info }) => {
  const [mouseHover, setMouseHover] = React.useState("");

  return (
    <div className="mt-4">
      <div
        onMouseOver={() => setMouseHover(info)}
        onMouseOut={() => setMouseHover("")}
        className="relative overflow-hidden"
      >
        <img
          className={`${
            mouseHover === info ? "scale-125" : "scale-100"
          } duration-300`}
          src="https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FFhzmCxJ%2Fproduct-3.jpg&w=1920&q=75"
          alt=""
        />
        <div className="absolute top-3 left-0">
          <p className="px-3 py-1.5 mt-3 bg-red-600 text-white">Sale</p>
          <p className="px-3 py-1.5 mt-2 bg-black text-white">-12%</p>
        </div>

        <div
          className={`absolute left-0 w-full ${
            mouseHover === info ? "bottom-0" : " -bottom-12"
          } duration-300`}
        >
          <button className="w-full p-2 bg-black text-white">
            Add to Cart
          </button>
        </div>

        <div
          className={`absolute top-6   ${
            mouseHover === info ? "right-4" : " -right-12"
          } duration-300 `}
        >
          <div>
            <button
              title="Add to Wishlist"
              className="bg-white hover:bg-red-600 hover:text-white shadow-md h-10 w-10 flex justify-center items-center duration-200"
            >
              <AiOutlineHeart size={25} />
            </button>

            <button
              title="Quic View"
              className="bg-white mt-2  hover:bg-red-600 hover:text-white shadow-md h-10 w-10 flex justify-center items-center duration-200"
            >
              <AiFillEye size={25} />
            </button>

            <button
              title="Product Details"
              className="bg-white mt-2  hover:bg-red-600 hover:text-white shadow-md h-10 w-10 flex justify-center items-center duration-200"
            >
              <AiOutlineLink size={25} />
            </button>
          </div>
        </div>
      </div>

      <div className="text-xl my-2 ">
        <p className="py-1">TECLAST Tablet Protective Cover Case</p>
        <p className="py-1">
          <del>$899.00 </del> <span>$899.00 </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
