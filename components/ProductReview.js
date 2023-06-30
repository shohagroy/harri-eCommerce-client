import {
  useAddProductReviewMutation,
  useGetProductReviewsQuery,
} from "@/features/review/reviewApi";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";

const ProductReview = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const { user } = useSelector((state) => state.auth);

  const { data: reviews, isLoading: reviewLoading } =
    useGetProductReviewsQuery(productId);

  const [addProductReview, { isLoading, isError, isSuccess, error }] =
    useAddProductReviewMutation();

  const reviewInfo = {
    rating,
    reviewText,
    userId: user?._id,
    userName: `${user?.firstName} ${user?.lastName}`,
    userAvatar: user?.avatar,
    productId,
    reviewDate: new Date().toISOString(),
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    console.log(reviewInfo);
    addProductReview(reviewInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Your Review created successfully!");
      setReviewText("");
      setRating(0);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(error.message);
      setReviewText("");
      setRating(0);
    }
  }, [isError]);

  return (
    <section className="bg-gray-100 p-2 lg:p-8 rounded-md">
      <div className="">
        <h2 className="lg:text-2xl text-xl font-bold">
          1 Review For Branded T-Shirt
        </h2>
      </div>

      <div className="my-4 flex items-center">
        <div className="w-16 h-16">
          <img
            className="w-full h-full rounded-md border border-red-600 p-1"
            src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
            alt="avatar"
          />
        </div>
        <div className=" ml-3">
          <div>
            <p className="text-xl font-semibold">
              Jenny Wilson -{" "}
              <i className="text-normal text-gray-500 text-sm">
                {" "}
                August 9, 2022
              </i>
            </p>
            <div className="text-yellow-400 flex items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <p className=" text-xl font-bold">very nice product</p>
        </div>
      </div>

      {/* <div className="my-4 flex items-center">
        <div className="w-16 h-16">
          <img
            className="w-full h-full rounded-md border border-red-600 p-1"
            src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
            alt="avatar"
          />
        </div>
        <div className=" ml-3">
          <div>
            <p className="text-xl font-semibold">
              Jenny Wilson -{" "}
              <i className="text-normal text-gray-500 text-sm">
                {" "}
                August 9, 2022
              </i>
            </p>
            <div className="text-yellow-400 flex items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <p className=" text-xl font-bold">very nice product</p>
        </div>
      </div> */}

      {/* <div className="my-4 flex items-center">
        <div className="w-16 h-16">
          <img
            className="w-full h-full rounded-md border border-red-600 p-1"
            src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
            alt="avatar"
          />
        </div>
        <div className=" ml-3">
          <div>
            <p className="text-xl font-semibold">
              Jenny Wilson -{" "}
              <i className="text-normal text-gray-500 text-sm">
                {" "}
                August 9, 2022
              </i>
            </p>
            <div className="text-yellow-400 flex items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <p className=" text-xl font-bold">very nice product</p>
        </div>
      </div> */}

      <div className="p-4">
        <p className="text-2xl my-2 font-semibold">Write a review</p>

        {/* <form onSubmit={handleReviewSubmit}>
          <p>Your rating *</p>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <p
                key={i}
                onMouseEnter={() => setRating(i + 1)}
                onMouseLeave={() => setRating(0)}
                onClick={() => setSeleteReating(i + 1)}
                className={`${
                  (rating >= i + 1 && "text-yellow-400") ||
                  (seleceReating >= i + 1 && "text-yellow-400")
                } cursor-pointer`}
              >
                <AiFillStar size={25} />
              </p>
            ))}
          </div>

          <div className="my-4">
            <p>Your review *</p>

            <textarea
              rows="4"
              value={reviewText}
              required
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full p-1 lg:p-3  lg:py-4 border border-black rounded-md"
            ></textarea>
          </div>

          <div>
            <button className="lg:py-4 lg:px-8 py-2 px-4 text-white  lg:text-xl font-bold rounded-md bg-blue-600">
              Submit
            </button>
          </div>
        </form> */}
        <form onSubmit={handleReviewSubmit}>
          <p>Your rating *</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={i + 1}
                  required
                  onChange={() => setRating(i + 1)}
                  className="sr-only"
                />
                <AiFillStar
                  size={25}
                  className={`${
                    rating >= i + 1 && "text-yellow-400"
                  } cursor-pointer`}
                />
              </label>
            ))}
          </div>

          <div className="my-4">
            <p>Your review *</p>
            <textarea
              rows="4"
              value={reviewText}
              required
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full p-1 lg:p-3 lg:py-4 border border-black rounded-md"
            ></textarea>
          </div>

          <div>
            <button className="lg:py-4 lg:px-8 py-2 px-4 text-white lg:text-xl font-bold rounded-md bg-blue-600">
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductReview;
