import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Button, Tooltip } from "@nextui-org/react";



const ButtonPressedHandler = () => {
    window.open("/DavidBrooks_resume - with deliverables - no addr.pdf");
}


// Home page for starting a test
const Resume: NextPage = () => {

    const [pdfHeight, setPdfHeight] = useState(0);

    useEffect(() => {
      const calculatePdfHeight = () => {
        const adjustedHeight = window.innerHeight - 280; // Adjust this value as needed
        setPdfHeight(adjustedHeight);
      };
      calculatePdfHeight(); // Call the function to calculate the initial height

      const handleWindowResize = () => {
        calculatePdfHeight();
      };

      window.addEventListener("resize", handleWindowResize);

    }, []); // Empty dependency array, so it runs only once on mount

  return (
    <>
      <Head>
        <title>David Brooks</title>
        <meta name="description" content="David Brooks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#CAF0F8] to-[#023E8A]">
        <div className="container flex-col items-center justify-center flex">
            
          <span className="hidden sm:flex text-center items-center flex flex-col pb-4">
            <Tooltip
                color="default" // Add required color property
                css={{ zIndex: 999 }} // Add required css property
                content="Open my Résumé in a new tab"
                placement="top"
                contentColor="default" // Add required contentColor property
                initialVisible={false}
            >
                <Button onPress={ButtonPressedHandler}>
                    Open PDF Résumé
                </Button>
            </Tooltip>
          </span>

            <div className="w-5/6 px-4 py-4 bg-white/70 rounded-md shadow-2xl flex items-center justify-center">
                <object className="hidden sm:flex" data="/DavidBrooks_resume - with deliverables - no addr.pdf" type="application/pdf" width="100%"  height={pdfHeight + "px"}>
                </object>
                <span className="sm:hidden text-center items-center flex flex-col gap-y-2">
                    Mobile View Detected:
                    <Tooltip
                        color="default" // Add required color property
                        css={{ zIndex: 999 }} // Add required css property
                        content="Open my Résumé in a new tab"
                        placement="bottom"
                        contentColor="default" // Add required contentColor property
                        initialVisible={false}
                    >
                        <Button onPress={ButtonPressedHandler}>
                            Open PDF Résumé
                        </Button>
                    </Tooltip>
                </span>
            </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
