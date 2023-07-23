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
        
        <div className="flex w-5/6 px-2 gap-y-4 gap-x-4 flex-wrap justify-center px-5 py-4 backdrop-blur-md bg-white/50 rounded-md text-xl shadow-2xl">
            <form>
                <input type="text" className="rounded-md"/>
            </form>
        </div>
        </div>
      </main>
    </>
  );
};

export default Home;
