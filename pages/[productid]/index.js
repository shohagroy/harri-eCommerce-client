import CommonLayout from "@/layouts/commonLayout";
import CustomerLayout from "@/layouts/customerLayout";
import React, { useEffect, useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { useGetSingleProductQuery } from "@/features/products/productApi";
import Head from "next/head";
import ImageMagnify from "@/components/imageMagnify";
import { useRouter } from "next/router";
import ProductReview from "@/components/ProductReview";
import { useSelector } from "react-redux";
import { useAddToWishListMutation } from "@/features/wishList/wishListApi";
import { useAddToCartListMutation } from "@/features/cartList/cartListApi";
import { toast } from "react-hot-toast";

const ProductDetails = () => {
  const [displayImage, setDisplayImage] = useState({});

  const router = useRouter();
  const { productid } = router.query;

  const { data, isLoading, isError, isSuccess, error } =
    useGetSingleProductQuery(productid);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setDisplayImage(data?.data?.images[0]);
    }
  }, [isLoading, isSuccess]);

  const {
    images,
    description,
    discount,
    price,
    quantity,
    tags,
    title,
    unit,
    _id,
    category,
  } = data?.data || {};

  const { user } = useSelector((state) => state.auth);

  const wishListed = user?.wishList?.find((id) => id === _id);
  const cartListed = user?.cartList?.find((id) => id === _id);

  const [
    addToWishList,
    {
      data: wishListData,
      isSuccess: wishListSuccess,
      isError: wishListIsError,
      error: wishListError,
    },
  ] = useAddToWishListMutation();

  const [
    addToCartList,
    {
      data: cartData,
      isSuccess: cartSuccess,
      isError: isCartError,
      error: cartError,
    },
  ] = useAddToCartListMutation();

  const product = {
    title,
    images: images && images[0].url,
    unit,
    discount,
    price,
    totalPrice: price,
    productId: _id,
  };

  const addToWishListHandelar = () => {
    addToWishList(product);
  };

  const addToCartHandelar = () => {
    addToCartList(product);
  };

  useEffect(() => {
    if (cartSuccess) toast.success(cartData.message);
    if (isCartError) toast.error(cartError.data.message);
  }, [cartSuccess, isCartError]);

  useEffect(() => {
    if (wishListSuccess) toast.success(wishListData.message);
    if (wishListIsError) toast.error(wishListData.data.message);
  }, [isSuccess, isError]);

  return (
    <>
      <Head>
        <title>Product | Details</title>
      </Head>
      <main>
        <section className="p-3 my-16 lg:p-0">
          <CommonLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="w-full h-full">
                <img
                  className="w-full h-full lg:hidden"
                  src={displayImage?.url}
                  alt=""
                />
                <div className="w-[500px] hidden lg:block ">
                  <ImageMagnify img={displayImage?.url} />
                </div>
              </div>

              <div className="w-full h-full">
                <p className="text-3xl py-2 font-semibold capitalize">
                  {title}
                </p>

                <div>
                  {(quantity > 30 && (
                    <p className="text-green-600 border py-2 font-semibold w-[200px] text-center capitalize">
                      Stock available Now
                    </p>
                  )) ||
                    (quantity < 10 && (
                      <p className="text-red-600 border py-2 font-semibold w-[200px] text-center capitalize">
                        Low Stock
                      </p>
                    )) ||
                    (quantity < 1 && (
                      <p className="text-green-600 border py-2 font-semibold w-[200px] text-center capitalize">
                        Out of Stock
                      </p>
                    ))}

                  <h2 className="text-3xl my-2 font-bold text-red-600">
                    Price: ${price - (price * discount) / 100}
                  </h2>
                  <h2 className="text-xl my-2 font-semibold">
                    Regular Price: <del className="">${price}</del>
                  </h2>
                  <h2 className="text-xl my-2 font-semibold">
                    Product Unit: <span className="uppercase">{unit}</span>
                  </h2>
                </div>

                <div className="flex items-center my-4">
                  <div className="w-full my-3 lg:w-[300px]">
                    <button
                      onClick={() => addToCartHandelar()}
                      className="w-full py-2 text-white bg-black flex justify-center items-center"
                    >
                      <span>
                        <AiOutlineShoppingCart size={20} />
                      </span>{" "}
                      {cartListed ? "Already added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                  <div className="w-full m-3 lg:w-[300px]">
                    <button className="w-full py-2 text-white bg-blue-600 flex justify-center items-center">
                      <span>
                        <AiOutlineShoppingCart size={20} />
                      </span>{" "}
                      Buy Now
                    </button>
                  </div>

                  <button
                    onClick={() => addToWishListHandelar()}
                    className={`hover:text-white hover:bg-red-600  shadow-md p-2.5 flex justify-center items-center duration-200 ${
                      wishListed ? "text-white bg-red-600" : null
                    }`}
                  >
                    <AiOutlineHeart size={20} />
                  </button>
                </div>

                <div className="mt-12">
                  <p>
                    <strong>SKU:</strong> 29045-SB-10
                  </p>

                  <p>
                    <strong>Categories:</strong>{" "}
                    <span className="uppercase">{category?.name}</span>
                  </p>

                  <div className="flex items-center mt-2">
                    <p className="mr-2">
                      <strong>Tags:</strong>
                    </p>

                    {tags &&
                      tags.split(", ")?.map((tag) => {
                        return (
                          <button className="px-3 border capitalize hover:bg-red-600 hover:text-white duration-300">
                            {tag}
                          </button>
                        );
                      })}
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

                <div className="my-3 p-2 flex">
                  {images?.map((img) => {
                    const { id, url } = img || {};
                    return (
                      <div
                        onClick={() => setDisplayImage(img)}
                        key={id}
                        className="w-28 h-28 m-1"
                      >
                        <img
                          className="w-full h-full rounded-md border cursor-pointer bg-gray-100 shadow-md"
                          src={url}
                          alt="images"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t">
              <p className="py-3 text-2xl font-bold">Product Description</p>

              <div
                className="max-w-[800px]"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>

            <div className="my-4">
              {/* review  */}
              <ProductReview productId={productid} />
            </div>

            <div className="my-6 lg:my-16">
              <p className="text-2xl font-bold border-l-4 border-red-600 pl-2">
                Related Products
              </p>

              <div className="mt-4">
                {/* <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                  {[...Array(5)].map((Number, i) => (
                    <ProductCard info={i} key={i} />
                  ))}
                </div> */}
              </div>
            </div>
          </CommonLayout>
        </section>
      </main>
    </>
  );
};

ProductDetails.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default ProductDetails;
