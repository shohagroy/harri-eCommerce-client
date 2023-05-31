import { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-hot-toast";
import AdminLayout from "@/layouts/AdminLayout";
import Head from "next/head";
import FormInput from "@/components/admin/Products/FormInput";
import SelectImage from "@/components/admin/Products/SelectImage";
import { useGetCategorysQuery } from "@/features/category/categoryApi";
import EditTools from "@/common/editTools";

const AddNewProduct = () => {
  const [images, setImages] = useState([]);
  const [creating, setCreating] = useState(false);
  const [description, setDescription] = useState("");

  const [productInfo, setProductInfo] = useState({});

  console.log(productInfo);

  const query = {
    search: "",
    skip: 0,
  };
  const { data, isLoading, isError, isSuccess } = useGetCategorysQuery(query);

  const categories = data?.data || [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(images);

    // console.log(e.target);

    // const formData = new FormData(e.target);

    // for (let i = 0; i < images.length; i++) {
    //   formData.append("files", images[i]);
    // }

    // try {
    //   setCreating(!creating);
    //   const response = await axios.post(
    //     process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/products",
    //     formData
    //   );
    //   // dispatch({
    //   //   type: "ADD_PRODUCT",
    //   //   product: response?.data?.data,
    //   // });
    //   toast.success("New Product Added Successfully!");
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Something went wrong");
    // } finally {
    //   e.target.reset();
    //   setImages([]);
    //   setCreating(!creating);
    //   setNewProduct(false);
    // }
  };

  return (
    <>
      <Head>
        <title>Add New Product</title>
      </Head>
      <main>
        <div className="flex justify-end relative">
          <div className="w-full bg-white ">
            <div className="bg-gray-100 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-lg">Add Product</h2>
                <p className="text-xs">
                  Add your product information from here
                </p>
              </div>

              <div>
                <button className="text-2xl h-10 w-10 bg-white text-red-600 rounded-full flex justify-center items-center shadow-md">
                  <TiDeleteOutline />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className=" lg:my-2 lg:grid grid-cols-1 lg:grid-cols-4 p-6  gap-5 rounded-md shadow-sm  bg-white text-xs">
                <FormInput
                  productInfo={productInfo}
                  setProductInfo={setProductInfo}
                  title="title"
                />
                <p className="my-1">Images</p>
                <div className="col-span-3 ">
                  <SelectImage images={images} setImages={setImages} />
                </div>

                <p className="py-2">Category</p>
                <div className="col-span-3 ">
                  <select className="w-full p-2 rounded-md border bg-gray-100 active:bg-white capitalize">
                    <option value={""} className="hidden">
                      Select Category
                    </option>

                    {categories?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <FormInput
                  title="unit"
                  placeholder="(kg/pc/lb/ml/g...etc)"
                  productInfo={productInfo}
                  setProductInfo={setProductInfo}
                />
                <FormInput
                  title="quantity"
                  number
                  productInfo={productInfo}
                  setProductInfo={setProductInfo}
                />
                <FormInput
                  title="price"
                  name="originalPrice"
                  number
                  productInfo={productInfo}
                  setProductInfo={setProductInfo}
                />
                <FormInput
                  productInfo={productInfo}
                  setProductInfo={setProductInfo}
                  title="discount"
                  number
                />
                <FormInput
                  productInfo={productInfo}
                  setProductInfo={setProductInfo}
                  title="tags"
                  placeholder="write tags (comma separated)"
                />

                <p className="py-2">Description</p>
                <div className="col-span-3 ">
                  <EditTools
                    name={"description"}
                    value={description}
                    setValue={setDescription}
                  />
                </div>

                <p className="py-2">Publish</p>
                <div className="col-span-3 ">
                  <label
                    htmlFor="publish"
                    className="inline-flex items-center space-x-4 cursor-pointer text-gray-100"
                  >
                    <span className="relative">
                      <input
                        id="publish"
                        name="publish"
                        type="checkbox"
                        className="hidden peer"
                      />
                      <div className="w-10 h-6 rounded-full shadow-inner bg-gray-200  peer-checked:bg-[#07895e]"></div>
                      <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-white"></div>
                    </span>
                  </label>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <div className="my-6 flex items-center w-[400px]">
                  <input
                    type="button"
                    value="Cancel"
                    className="py-3 px-6 m-1 bg-gray-100 rounded-md hover:bg-red-100 text-red-300 hover:text-red-600 duration-300 w-full cursor-pointer"
                  />

                  <button
                    type="submit"
                    className="py-3 px-6 m-1 bg-blue-600 rounded-md 
            hover:bg-blue-700 text-white  duration-300 w-full"
                  >
                    {creating ? "Creating..." : "Add Product"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

AddNewProduct.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AddNewProduct;
