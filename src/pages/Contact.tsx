import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";



import { Input, Textarea} from "@nextui-org/react";




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
        
        <div className="w-5/6 px-2 py-8 backdrop-blur-md bg-white/70 rounded-md shadow-2xl">
            
            
            <div className="pb-12 text-center font-bold tracking-tight text-slate-700 text-5xl">
                <span className="">Send Me A Message</span>
            </div>
            <form>  
            <div className="flex gap-y-4 gap-x-4 items-center justify-center">
                <Input id="FirstName" clearable bordered labelPlaceholder="First Name" />
                <Input id="LasttName" clearable bordered labelPlaceholder="Last Name" />
                <Input clearable bordered width="400px" labelPlaceholder="email address" />
            </div>
            <div className="flex pt-12 gap-y-4 gap-x-4 items-center justify-center">
                <Textarea id="MSG" bordered placeholder="Message" minRows={4} width="400px"/>
            </div>
            </form>

        </div>
        </div>
      </main>
    </>
  );
};

export default Home;
