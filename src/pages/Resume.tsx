import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Home page for starting a test
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>David Brooks</title>
        <meta name="description" content="David Brooks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#CAF0F8] to-[#023E8A]">
        <div className="container flex flex-col items-center justify-center gap-12 py-40">
            <div className="w-5/6 px-8 py-8 backdrop-blur-md bg-white/70 rounded-md shadow-2xl">
            <object data="/DavidBrooks_resume - with deliverables - no addr.pdf" type="application/pdf" width="100%" height="900px">
            </object>
            </div>
        </div>
      </main>
    </>
  );
};

export default Home;
