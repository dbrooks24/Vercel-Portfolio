import { type NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import SendEmail from '../pages/api/sendgrid';


import { Input, Textarea, Button, FormElement} from "@nextui-org/react";
import { useState } from "react";
import { request } from "https";


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
    const FormSubmissionHandler = async () => {
        event?.preventDefault();

        console.log('I am in the handler')
      
         // Check if any of the fields are blank
            if (FirstName == "") {
                setFirstNameStatus("error");
            }
            if (LastName == "") {
                setLastNameStatus("error");
            }
            if (Email == "") {
                setEmailStatus("error");
            }
            if (Message == "") {
                setMessageStatus("error");
            }
        
        
        // Check if any of the fields have an error status
        if ((FirstNameStatus === "error" || FirstNameStatus === "default") || (LastNameStatus === "error" || LastNameStatus === "default") || (EmailStatus === "error" || EmailStatus === "default") || (MessageStatus === "error" || MessageStatus === "default")) 
        {
            // Handle the case where a field has an error status (e.g., show an error message)
            alert('Please fill out all fields correctly');
            
            return; // Stop further execution
        }
        else
        {
            console.log('In the else')
            console.log('FirstNameStatus:',FirstNameStatus)
        }


        const formData = {
          FirstName: FirstName,
          LastName: LastName,
          Email: Email,
          Message: Message
        };
      
        try 
        {
            const response = await fetch('/api/sendgrid', 
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
      
            if (response.ok) 
            {
                // Handle success (e.g., show a success message to the user)
                console.log('Email sent successfully');
            } 
          
            else 
            {
                // Handle error
                console.error('Error sending email');
            }
        } 
        
        catch (error) {
          // Handle network or other errors
          console.error('Error:', error);
        }
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
