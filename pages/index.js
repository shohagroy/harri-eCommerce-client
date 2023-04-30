import CategoryContainer from "@/components/CategoryContainer";
import HomeBanar from "@/components/HomeBanar";
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
        </div>
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};
export default Home;
