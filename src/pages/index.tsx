import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";


const ThingsGoodAt = [
  {
    Text: "Adobe CC Suite",
  },
  {
    Text: "Apple Certified",
  },
  {
    Text: "Apple Certified Technician",
  },
  {
    Text: "Computer Hardware and Repair",
  },
  {
    Text: "CIP",
  },
  {
    Text: "C++",
  },
  {
    Text: "Next.js",
  },
  {
    Text: "MySQL",
  },
  {
    Text: "HTML",
  },
  {
    Text: "PowerShell",
  },
  {
    Text: "Unix Command Line",
  },
  {
    Text: "PowerBI",
  },
  {
    Text: "PowerAutomate",
  },
  {
    Text: "Microsoft Identity Manager",
  },
  {
    Text: "IDM",
  },
  {
    Text: "Azure",
  },
  {
    Text: "Cisco ESA",
  },
];

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
        
        <div className="flex w-full px-2 gap-y-4 gap-x-4 flex-wrap justify-center">
        {ThingsGoodAt.map((item) => (
                          <div className="px-3 py-2 backdrop-blur-md bg-white/50 rounded-md text-xl shadow-2xl self-center">
                            {item.Text}
                          </div>
                        ))}
        </div>
        
        <Image className="rounded-full shadow-2xl"
                            src="/DBROOKS.jpg"
                            width="512"
                            height="512"
                            alt="Logo"
                          />
          <h1 className="pb-2 text-center text-5xl font-medium tracking-tight text-white sm:text-[5rem]">
            <span className="">David Austin Brooks</span>
          </h1>
          <div className="flex w-5/6">
            <div className="px-5 py-4 backdrop-blur-md bg-white/50 rounded-md text-xl shadow-2xl">
              For as long as I can remember I have been fascinated with technology and how it functions. 
              I used to take apart and put together all kinds of things just to see how they worked. 
              I love to learn new things and I am always looking for a way to expand my knowledge. 
              Most of all, I love taking the knowledge I acquire and using that to better other people’s lives as well as mine.
            </div>
        </div>
        </div>
      </main>
    </>
  );
};

export default Home;
