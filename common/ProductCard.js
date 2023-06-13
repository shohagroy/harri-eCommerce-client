import { useAddToWishListMutation } from "@/features/wishList/wishListApi";
import Link from "next/link";
import React from "react";
import {
  AiOutlineHeart,
  AiFillEye,
  AiOutlineLink,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductCard = ({ info }) => {
  const [mouseHover, setMouseHover] = React.useState("");

  const { _id, discount, price, title, images, unit } = info || {};

  const [addToWishList, { isLoading, isError, error }] =
    useAddToWishListMutation();

  // console.log(isLoading, isError, error);

  const addToWishListHandelar = () => {
    console.log("addToWishListHandelar");

    const wishListProduct = {
      title,
      images: images[0].url,
      unit,
      price,
      totalPrice: price,
      productId: _id,
    };

    addToWishList(wishListProduct);
  };

  const addToCartHandelar = () => {
    console.log(info);
  };
  return (
    <div className="mt-4 border border-black">
      <div
        onMouseOver={() => setMouseHover(info)}
        onMouseOut={() => setMouseHover("")}
        className="relative overflow-hidden p-10"
      >
        <Link href={`${_id}`} className=" ">
          <div className="">
            <img
              className={`h-[300px] ${
                mouseHover === info ? "scale-125" : "scale-100"
              } duration-300`}
              src={images[0]?.url}
              alt=""
            />
          </div>
        </Link>
        <div className="absolute top-3 left-0">
          <p className="px-3 py-1.5 mt-3 bg-red-600 text-white">Sale</p>
          <p className="px-3 py-1.5 mt-2 bg-black text-white">-{discount}%</p>
        </div>

        <div
          className={`absolute left-0 w-full ${
            mouseHover === info ? "bottom-0" : " -bottom-12"
          } duration-300`}
        >
          <button
            onClick={addToCartHandelar}
            className="w-full py-2 text-white bg-black flex justify-center items-center"
          >
            <span>
              <AiOutlineShoppingCart size={20} />
            </span>{" "}
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
              onClick={addToWishListHandelar}
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

      <div className="text-xl my-2 p-2 ">
        <p className="py-1 capitalize">{title}</p>
        <p className="py-1">
          <del>${price} </del> <span>${price - (price * discount) / 100} </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
