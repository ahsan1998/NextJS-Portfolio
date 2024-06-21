import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "../components/EmailTemplate";

export async function POST(req: NextRequest) {
  const body = await req.json();
  // body of our request - to be sent from the Client-side in our form above
  const { message, email, subject } = body;

  // Check if the required fields are present
  if (!message || !email) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // resend declaration with API key as parameter
  const resend = new Resend(process.env.RESEND_API_KEY);

  // try {
  //   // resend function handler for executing email sending
  //   // returning data and error state to indicate success and failure respecfully
  //   const { data, error } = await resend.emails.send({
  //     from: `Ahsan - Porfolio <mahsan1998@gmail.com>`, //Title of our Email, here, our email will indicate Imam - Portfolio and the <info@eimaam.dev> will be the sending address. NB: `eimaam.dev` replace with your registered domain
  //     to: email as String, //email receiver
  //     subject: subject,
  //     react: EmailTemplate({ email }), //using our custom react component to render email content/body
  //   });

  //   if (error) {
  //     return NextResponse.json(
  //       { message: "Email sending failed", error },
  //       { status: 400 }
  //     );
  //   }

  //   return NextResponse.json(
  //     { message: "Email sent successfully", data },
  //     { status: 200 }
  //   );
  // } catch (error) {
  //   console.error("Error sending email:", error);
  //   return NextResponse.json(
  //     { message: "Failed to send email", error },
  //     { status: 500 }
  //   );
  // }
}