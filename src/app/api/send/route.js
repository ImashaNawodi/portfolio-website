import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail", // use your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptionsToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Thank you for reaching out: ${subject}`,
    html: `
      <h1>Thank you for reaching out!</h1>
      <p>Dear Sir/Madam,</p>
      <p>I have received your message with the subject: <strong>${subject}</strong>.</p>
      <p>Thank you for contacting me. I will review your message and get back to you as soon as possible.</p>
      <p>Best regards,</p>
      <p>Imasha Nawodi</p>
      <p>Computer Engineering Undergraduate</p>
      <p>Faculty of Engineering</p>
      <p>University of Ruhuna</p>
      <p><a href="https://www.linkedin.com/in/imasha-nawodi-19a31b212">LinkedIn Profile</a></p>
    `,
  };

  const mailOptionsToMe = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New contact message: ${subject}`,
    html: `
      <h1>New Message Received</h1>
      <p><strong>From:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    const infoToUser = await transporter.sendMail(mailOptionsToUser);
    const infoToMe = await transporter.sendMail(mailOptionsToMe);
    return NextResponse.json({ infoToUser, infoToMe });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
