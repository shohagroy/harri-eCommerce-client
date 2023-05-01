import { Drawer } from "antd";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import Link from "next/link";

function CartDrawer({ openDrawer, setOpenDrawer }) {
  const [count, setCount] = useState(1);

  const cartData = [
    {
      _id: 1,
      name: "Stariver Electric Kettle",
      photo:
        "https://hamart-shop.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FfpwMhjX%2Fproduct-rel-10-3.jpg&w=1080&q=75",
      quantity: "2",
      price: "50.00",
    },
  ];

  return (
    <>
      <Drawer
        placement={"right"}
        closable={false}
        onClose={() => setOpenDrawer(!openDrawer)}
        open={openDrawer}
        // width="100%"
        bodyStyle={{ padding: "0px" }}
        className="w-full lg:w-[30%] "
        // key={"right"}
        // rootClassName=""
      >
        <div className=" min-h-screen  relative">
          <div className=" bg-slate-100 p-5 flex justify-between items-center">
            <div className="flex items-center gap-2 text-lg font-bold">
              <AiOutlineShoppingCart size={25} />
              <p>Shopping Cart</p>
            </div>

            <div
              className="cursor-pointer text-red-600"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <GiCancel size={30} />
            </div>
          </div>
          <div className="overflow-y-scroll h-[70vh]">
            {cartData.map((data) => (
              <div
                key={data._id}
                className="flex border-b items-center py-3 px-4"
              >
                <img className="h-20 w-auto" src={data.photo}></img>
                <div className="flex ml-2 items-center justify-between flex-grow">
                  <div>
                    <p className="text-lg font-semibold">{data.name}</p>
                    <p className="text-gray-500 text-sm">
                      Item Price: ${data.price}
                    </p>
                    <p className="text-lg">${200}</p>
                  </div>
                  <div className="flex items-center content-center my-auto  py-0 rounded-md border border-gray-100 font-semibold">
                    <div className="m-0">
                      <button
                        disabled={count < 2 ? true : false}
                        onClick={() => setCount(count - 1)}
                        className=" px-3 py-1 my-0 mx-auto text-lg "
                      >
                        −
                      </button>
                    </div>
                    <div className="m-0">
                      <p className=" px-3 py-1 my-0 mx-auto ">{count}</p>
                    </div>
                    <div className="m-0">
                      <button
                        onClick={() => setCount(count + 1)}
                        className=" px-3 py-1 my-0 mx-auto text-lg "
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <BiTrash className="text-red-500 text-xl "></BiTrash>
                </div>
              </div>
            ))}
          </div>
          <div className="flex bg-white items-center border-t justify-between p-[10px] mx-5 my-3 bg-primary rounded-lg absolute bottom-0 left-0 right-0 ">
            <div className="w-full">
              <div className="flex justify-between items-center text-2xl font-semibold">
                <p>Subtotal:</p>
                <p>
                  <span className="text-red-600">$3900</span>
                </p>
              </div>
              <Link
                onClick={() => setOpenDrawer(!openDrawer)}
                className="text-center w-full  text-xl p-2"
                href={"/myCart"}
              >
                <p className="bg-gray-200 text-black hover:bg-black hover:text-white w-full p-2 duration-300">
                  View Cart
                </p>
              </Link>
              <Link
                onClick={() => setOpenDrawer(!openDrawer)}
                className="text-center w-full  text-xl p-2"
                href={"/"}
              >
                <p className="border text-black hover:bg-black hover:text-white w-full p-2 duration-300">
                  Checkout
                </p>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default CartDrawer;
