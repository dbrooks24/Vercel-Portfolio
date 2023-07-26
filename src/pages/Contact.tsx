import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";



import { Input, Textarea, Button, FormElement} from "@nextui-org/react";
import { useState } from "react";


// Home page for starting a test
const Home: NextPage = () => {
    
    //webhooks
        //form settings
        const [FirstName, setFirstName] = useState("");
        const [LastName, setLastName]   = useState("");
        const [Email, setEmail]         = useState("");
        const [Message, setMessage]     = useState("");
    
        //form view options (make error)
        const [FirstNameStatus, setFirstNameStatus] = useState<"default" | "error" | "success">("default");
        const [LastNameStatus, setLastNameStatus]   = useState<"default" | "error" | "success">("default");
        const [EmailStatus, setEmailStatus]         = useState<"default" | "error" | "success">("default");
        const [MessageStatus, setMessageStatus]     = useState<"default" | "error" | "success">("default");


    //handlers
    const FormSubmissionHandler = () => {
        event?.preventDefault(); //prevent the deafult form submission behavior
        
            alert(
                "FirstName: " + FirstName + "\n" +
                "LastName: " + LastName + "\n" +
                "Email: " + Email + "\n" +
                "Message: " + Message 
            ) 
            

    };

    const handleFormInput = (event: React.ChangeEvent<FormElement>, InputID: string) => {
        const newInputValue = event.target.value;
        switch (InputID) {
            case "FirstName":
                setFirstName(newInputValue)
                if(newInputValue == "")
                {
                    setFirstNameStatus("error")
                }
                else
                {
                    setFirstNameStatus("default")
                }
                break;
            case "LastName":
                setLastName(newInputValue)
                if(newInputValue == "")
                {
                    setLastNameStatus("error")
                }
                else
                {
                    setLastNameStatus("default")
                }
                break;
            case "EmailAdr":
                setEmail(newInputValue)
                if(newInputValue == "")
                {
                    setEmailStatus("error")
                }
                else
                {
                    setEmailStatus("default")
                }
                break;
            case "MSG":
                setMessage(newInputValue)
                if(newInputValue == "")
                {
                    setMessageStatus("error")
                }
                else
                {
                    setMessageStatus("default")
                }
                break;
            default:
                break;
        }
    };  


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
            <div className="flex gap-y-4 gap-x-4 items-center justify-center ">
                <Input 
                    required = {true}
                    status={FirstNameStatus}
                    clearable                      
                    color="primary" 
                    labelPlaceholder="First Name"
                    onChange={(e) => handleFormInput(e, "FirstName")}
                />
                <Input 
                    required = {true}
                    status={LastNameStatus}
                    clearable
                    color="primary" 
                    labelPlaceholder="Last Name"
                    onChange={(e) => handleFormInput(e, "LastName")}
                />
                <Input
                    required = {true} 
                    status={EmailStatus}
                    clearable 
                    width="250px" 
                    color="primary" 
                    labelPlaceholder="email address"
                    onChange={(e) => handleFormInput(e, "EmailAdr")}
                />
            </div>
            <div className="flex pt-12 gap-y-4 gap-x-4 items-center justify-center">
                <Textarea 
                    required = {true}
                    status={MessageStatus}
                    color="primary" 
                    placeholder="Message" 
                    minRows={1} 
                    width="400px"
                    onChange={(e) => handleFormInput(e, "MSG")}
                />
            </div>
            <div className="flex pt-12 gap-y-4 gap-x-4 items-center justify-center">
                <Button onPress={FormSubmissionHandler} shadow color="gradient">
                        Send      
                </Button>
            </div>
            </form>

        </div>
        </div>
      </main>
    </>
  );
};

export default Home;
