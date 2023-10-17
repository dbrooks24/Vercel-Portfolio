const sgMail = require('@sendgrid/mail')
import { Request, Response } from 'express';

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//console.log('API Key:', process.env.SENDGRID_API_KEY);
//console.log('Process Info:', process.env);

console.log('I am in the sendgrid.ts file');

interface ContactMeForm
{
    FirstName: string;
    LastName: string;
    Email: string;
    Message: string;
}


export default async function SendEmail(req:Request & {body: ContactMeForm}, res:Response) {
    try
    {
        //build entire msg object:
            const message = `
                First Name: ${req.body.FirstName}
                Last Name: ${req.body.LastName}
                Email: ${req.body.Email}
                Message: ${req.body.Message}
            `;
  
        
        
        await sgMail.send({
            to: 'davidabrooks392@outlook.com', // Change to your recipient
            from: 'davidabrooks@att.net', // Change to your verified sender
            subject: `Contact from website ${req.body.FirstName} ${req.body.LastName}`,
            text: message,        
        })
        console.log('Email sent');
        res.status(200).json({ message: 'Email sent successfully' }); // Send a success response
    }
    catch
    {
        console.error(Error);
        res.status(500).json({ message: 'Error sending email' }); // Send an error response
    }
    
}