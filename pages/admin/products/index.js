import { useState } from "react";
import AdminLayout from "@/layouts/AdminLayout";
import AddNewProduct from "@/components/admin/Products/AddNewProduct";
import ProductsTable from "@/components/admin/Products/ProductsTable";
import CommonLayout from "@/layouts/commonLayout";

const Products = () => {
  const [newProduct, setNewProduct] = useState(false);
  const prices = [
    {
      _id: 1,
      name: "Low to High",
    },
    {
      _id: 2,
      name: "High to Low",
    },
  ];

  return (
    <section className="  bg-gray-100 min-h-screen">
      <CommonLayout>
        <div className="">
          <h3 className="lg:py-4 text-xl font-semibold p-2 ">Products</h3>

          {/* products search section  */}
          <div className="my-3 grid grid-cols-1 lg:grid-cols-4 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
            <input
              className="w-full p-3 focus:outline-none rounded-md border bg-gray-100"
              type="text"
              placeholder={"search by product name"}
            />

            <div>
              <select
                name="category"
                id=""
                className="w-full p-3 rounded-md border bg-gray-100 active:bg-white"
              >
                <option value={""} className="hidden">
                  category
                </option>

                {/* {items?.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))} */}
              </select>
            </div>
            <div>
              <select
                name="category"
                id=""
                className="w-full p-3 rounded-md border bg-gray-100 active:bg-white"
              >
                <option value={""} className="hidden">
                  category
                </option>

                {/* {items?.map((item, i) => (
                <option key={i} value={item.id}>
                  {item.name}
                </option>
              ))} */}
              </select>
            </div>
            <div onClick={() => setNewProduct(!newProduct)}>
              <button className="w-full h-full p-3 lg:p-0 bg-[#0E9F6E] rounded-md text-white hover:bg-[#07895e] duration-300">
                + Add Product
              </button>
            </div>
          </div>

          {/* products upload section  */}
          <div className="my-3 grid grid-cols-1 lg:grid-cols-6 py-6 px-4 gap-6 rounded-md shadow-sm bg-white">
            <div className="lg:col-span-4">
              <input
                className="p-2 w-full border border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 bg-white"
                type="file"
                placeholder="Drop SVG file"
              />
            </div>

            <div>
              <button className="w-full p-3 lg:p-0 h-full bg-gray-200 rounded-md hover:bg-gray-300 duration-300">
                Uplaod
              </button>
            </div>

            <div>
              <button className="w-full h-full p-3 lg:p-0 bg-[#0E9F6E] rounded-md text-white hover:bg-[#07895e] duration-300">
                Download
              </button>
            </div>
          </div>

          {/* products table  */}

          <ProductsTable />
        </div>

        <AddNewProduct newProduct={newProduct} setNewProduct={setNewProduct} />
      </CommonLayout>
    </section>
  );
};

Products.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Products;
