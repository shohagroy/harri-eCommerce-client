import Head from "next/head";
import { useForm } from "react-hook-form";
import OrderSummary from "@/components/OrderSummary";
import CommonLayout from "@/layouts/commonLayout";
import CustomerLayout from "@/layouts/customerLayout";

const checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main>
        <section className="my-16 ">
          <CommonLayout>
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2">
                <div className="p-2">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8">
                      <h3 className="mb-3 font-medium">01. Personal Details</h3>
                      <div>
                        <div className="flex gap-3 mb-5">
                          <div className="w-full">
                            <label
                              htmlFor="firstName"
                              className="mb-1 inline-block"
                            >
                              First Name
                            </label>
                            <br />
                            <input
                              id="firstName"
                              placeholder="John"
                              className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                              {...register("firstName")}
                            />
                          </div>
                          <div className="w-full">
                            <label
                              htmlFor="lastName"
                              className="mb-1 inline-block"
                            >
                              Last Name
                            </label>
                            <br />
                            <input
                              id="lastName"
                              placeholder="Doe"
                              className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                              {...register("lastName")}
                            />
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <div className="w-full">
                            <label
                              htmlFor="email"
                              className="mb-1 inline-block"
                            >
                              Email Address
                            </label>
                            <br />
                            <input
                              id="email"
                              className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                              placeholder="John@gmail.com"
                              {...register("email")}
                            />
                          </div>
                          <div className="w-full">
                            <label
                              htmlFor="phoneNumber"
                              className="mb-1 inline-block"
                            >
                              Phone Number
                            </label>
                            <br />
                            <input
                              id="phoneNumber"
                              className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                              placeholder="e.g. 123456789"
                              {...register("phoneNumber")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="mb-3 font-medium">02. Shipping Details</h3>
                      <div>
                        <div className="w-full mb-3">
                          <label
                            htmlFor="shippingAddress"
                            className="mb-1 inline-block"
                          >
                            Shipping Address
                          </label>
                          <br />
                          <input
                            id="shippingAddress"
                            className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                            placeholder="123 Boulevard Rd, Beverley Hills"
                            {...register("shippingAddress")}
                          />
                        </div>
                        <div className="flex gap-3 mb-5">
                          <div className="w-full">
                            <label htmlFor="city" className="mb-1 inline-block">
                              City
                            </label>
                            <br />
                            <input
                              id="city"
                              className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                              placeholder="Dhaka"
                              {...register("city")}
                            />
                          </div>
                          <div className="w-full">
                            <label
                              htmlFor="country"
                              className="mb-1 inline-block"
                            >
                              Country
                            </label>
                            <br />
                            <input
                              id="country"
                              className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                              placeholder="Bangladesh"
                              {...register("country")}
                            />
                          </div>
                          <div className="w-full">
                            <label htmlFor="zip" className="mb-1 inline-block">
                              ZIP / Postal
                            </label>
                            <br />
                            <input
                              id="zip"
                              className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                              placeholder="2345"
                              {...register("zip")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <input
                      className="bg-red-600 px-5 py-2 text-white rounded cursor-pointer"
                      type="submit"
                    />
                  </form>
                </div>
                <div className="p-2">
                  <OrderSummary />
                </div>
              </div>
            </div>
          </CommonLayout>
        </section>
      </main>
    </>
  );
};

checkout.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default checkout;
