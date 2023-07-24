import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { Button } from "@nextui-org/react";


const ButtonPressedHandler = () => {
    window.open("/DavidBrooks_resume - with deliverables - no addr.pdf");
}

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
        <div className="absolute container flex-col items-center justify-center flex">
            <div className="w-5/6 px-8 py-8 backdrop-blur-md bg-white/70 rounded-md shadow-2xl flex  items-center justify-center">
                <object className="hidden sm:flex" data="/DavidBrooks_resume - with deliverables - no addr.pdf" type="application/pdf" width="100%" height="900px">
                </object>
                <span className="sm:hidden text-center">
                    Mobile View:
                    <br/>
                    <br/>
                    <Button onPress={ButtonPressedHandler} >Open PDF Résumé</Button>
                </span>
            </div>
        </div>
      </main>
    </>
  );
};

export default Home;
