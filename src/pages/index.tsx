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
        <Image className="rounded-full shadow-2xl"
                            src="/DBROOKS.jpg"
                            width="512"
                            height="512"
                            alt="Logo"
                          />
          <h1 className="pb-2 text-center text-5xl font-medium tracking-tight text-white sm:text-[5rem]">
            <span className="">David Austin Brooks</span>
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
