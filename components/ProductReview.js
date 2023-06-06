import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [seleceReating, setSeleteReating] = useState(0);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // Perform any necessary actions with the rating and review text
    console.log("Rating:", seleceReating);
    console.log("Review Text:", reviewText);

    // Reset the form
    setRating(0);
    setSeleteReating(0);
    setReviewText("");
  };

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

      <div className="p-4">
        <p className="text-2xl my-2 font-semibold">Write a review</p>

        <form onSubmit={handleReviewSubmit}>
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
              rows="5"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full p-3 py-4 border border-black rounded-md"
            ></textarea>
          </div>

          <div>
            <button className="py-4 px-8 text-white  lg:text-2xl font-bold rounded-md bg-blue-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductReview;
