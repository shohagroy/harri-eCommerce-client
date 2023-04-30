import CategoryContainer from "@/components/CategoryContainer";
import HomeBanar from "@/components/HomeBanar";
import PopularProducts from "@/components/PopularProducts";
import CustomerLayout from "@/layouts/customerLayout";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <div>
          <HomeBanar />
          <CategoryContainer />
          <PopularProducts />
        </div>
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};
export default Home;
