import CustomerLayout from "@/layouts/customerLayout";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <div>Hello world</div>
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};
export default Home;
