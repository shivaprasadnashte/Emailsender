import nodemailer from "nodemailer";

export async function POST(request, response) {
  const { name, email } = await request.json();

  if (!name || !email) {
    return new Response("Name and email are required", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_ID,
      pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_MAIL_ID,
    to: email,
    subject: "Hello from Shiva this side",
    text: "Hello " + name + " Thanks for submitting the form!," + "I will get back to you soon",
  };

  try {
    const res = transporter.sendMail(mailOptions);
    return Response.json({ message: "Mail sent successfully!" });
  } catch (error) {
    console.log(error);
    return new Response("Failed to send email", { status: 500 });
  }
}
