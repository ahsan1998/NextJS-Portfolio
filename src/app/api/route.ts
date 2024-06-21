import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: any, res: any) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "mahsan1998@gmail.com",
      to: [fromEmail, email],
      subject: subject,

      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
