import Subscribe from "@/common/Subscribe";
import TeamCard from "@/common/TeamCard";
import CommonLayout from "@/layouts/commonLayout";
import CustomerLayout from "@/layouts/customerLayout";
import React from "react";

import { AiFillPlayCircle } from "react-icons/ai";

const teamMembers = [
  {
    name: "Kathryn Murphy",
    role: "Creative Director",
    img: "https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-3.6e879886.jpg&w=384&q=75",
  },
  {
    name: "Leslie Alexander",
    role: "Creative Director",
    img: "https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-4.f9a1082e.jpg&w=384&q=75",
  },
  {
    name: "Zin Denvar",
    role: "Sales Manager",
    img: "https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-5.b4faa92d.jpg&w=384&q=75",
  },
  {
    name: "Guy Hawkins",
    role: "Developer",
    img: "https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-6.888c7851.jpg&w=384&q=75",
  },
  {
    name: "Annette Black",
    role: "Developer",
    img: "https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-2.02167277.jpg&w=384&q=75",
  },
  {
    name: "Deli Yanky",
    role: "Developer",
    img: "https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam-1.fa590d96.jpg&w=384&q=75",
  },
];

const AboutUs = () => {
  return (
    <section className="mt-16 lg:mt-6">
      <div className="flex justify-center items-center lg:h-[500px] bg-[url('https://hamart-shop.vercel.app/_next/static/media/about-breadcrumb.5a10c796.jpg')] bg-cover bg-no-repeat  opacity-50">
        <div className="container mx-auto px-3">
          <div className="py-20 text-center text-white">
            <p className="">About us</p>
            <h1 className="text-4xl font-bold ">Welcome to our Harri Shop</h1>
          </div>
        </div>
      </div>
      {/* =================about us banner end */}

      <CommonLayout>
        <div className="p-3 lg:p-0">
          <div className="custom-container">
            <div className="bg-white">
              <div className="py-10">
                <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
                  <div>
                    <h3 className="text-xl lg:text-3xl mb-2 font-semibold">
                      It started with a bang now we are here.
                    </h3>

                    <div className="mt-3 text-base opacity-90 leading-7">
                      <p>
                        Ut at maximus magna. Vestibulum interdum sapien in
                        facilisis imperdiet. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis
                        egestas. Proin ac placerat risus. Nullam eget tortor
                        felis. Nulla facilisi.Vestibulum mattis diam non luctus
                        elementum. Cras sollicitudin, nisi in semper viverra,
                        felis diam consequat mi, quis tincidunt ligula
                      </p>
                      <p>
                        Nam nibh diam, varius quis lectus eget, laoreet cursus
                        metus. morbi augue lectus, dapibus eget justo nec,
                        consectetur auctor nis luctus neque.!
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                      <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                        <span className="text-3xl block font-extrabold mb-4 text-gray-800">
                          10K
                        </span>
                        <h4 className="text-lg font-bold mb-1">
                          Listed Products
                        </h4>
                        <p className="mb-0 opacity-90 leading-7">
                          Dynamically morph team driven partnerships after
                          vertical.
                        </p>
                      </div>
                      <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                        <span className="text-3xl block font-extrabold mb-4 text-gray-800">
                          8K
                        </span>
                        <h4 className="text-lg font-bold mb-1">
                          Lovely Customer
                        </h4>
                        <p className="mb-0 opacity-90 leading-7">
                          Competently productize virtual models without
                          performance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 relative">
                    <span>
                      <img
                        src="https://hamart-shop.vercel.app/_next/static/media/faq-img.fe5fd98a.jpg"
                        alt=""
                      />
                    </span>

                    <div className="absolute top-0 left-0 w-full h-full ">
                      <div className="flex justify-center items-center w-full h-full">
                        <button className="text-5xl text-white border border-white rounded-full">
                          <AiFillPlayCircle />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* welcome to our part end */}
              </div>

              {/* =====> */}
              <div className=" lg:py-20 py-10">
                <div className="max-w-screen-2xl mx-auto">
                  <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
                    <div className="max-w-2xl">
                      <h3 className="text-xl lg:text-3xl mb-2 font-semibold">
                        One Team , Many Talents
                      </h3>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8">
                    {teamMembers.map((teamMember) => (
                      <TeamCard key={teamMember.name} data={teamMember} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CommonLayout>
      <Subscribe />
    </section>
  );
};

AboutUs.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default AboutUs;
