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
          Hello world Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ratione voluptatibus architecto harum maxime quis! Rem culpa similique
          dolore! Explicabo beatae, libero tenetur a neque incidunt fuga
          temporibus ipsum expedita eius, officia assumenda natus alias aliquam
          accusamus! Et repellendus sunt officia quo atque molestiae! Esse
          maiores exercitationem voluptates aut? Facilis aut autem dolor tenetur
          velit nemo porro aspernatur quos tempore optio, debitis error
          voluptatum eius expedita nam ut eum temporibus, sint, nobis veniam
          ipsum unde! Maiores ab repellat laboriosam exercitationem cupiditate
          reiciendis nobis ipsam, reprehenderit eveniet quo at iste veritatis
          saepe magnam similique quasi dolorem ad, illo quae. Officia similique
          facilis adipisci! Beatae, aliquid inventore impedit, officiis
          provident itaque, reiciendis velit porro eum totam suscipit illum
          explicabo accusantium et ipsum nam quo vitae dolorem earum
          consectetur. Unde architecto omnis totam id rem reiciendis ex
          praesentium incidunt enim, exercitationem laudantium dolorum amet nisi
          nulla! Quos similique odit eius accusamus aspernatur. Repellat, quae.
          Consequuntur, nemo ducimus inventore ex, cum expedita repellendus ad
          id aliquam repellat perspiciatis eos deleniti, recusandae quam natus.
          Quasi rerum nostrum corrupti omnis itaque expedita quod, reprehenderit
          vero neque hic, molestiae illo officiis sequi culpa ea veniam fugit
          repellendus ad earum deserunt. Ducimus expedita quidem repellendus
          laudantium maxime, mollitia aperiam?
        </div>
      </main>
    </>
  );
}

Home.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};
export default Home;
