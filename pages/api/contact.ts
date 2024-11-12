import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import nodemailer from "nodemailer";

// CORS configuration
const cors = Cors({
  methods: ["GET", "POST"],
});

// Run the middleware
const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (
    req: NextApiRequest,
    res: NextApiResponse,
    callback: (result?: Error) => void
  ) => void
): Promise<void> =>
  new Promise((resolve, reject) => {
    fn(req, res, (result?: Error) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve();
    });
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    const { fullname, email, message } = req.body;

    // Log the received data for debugging
    console.log("Received form data:", { fullname, email, message });

    // Check for missing data
    if (!fullname || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Set up the transporter for Nodemailer with Gmail's SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: "satyamsen167@gmail.com", // Gmail address
        pass: "eefv vlid sqdj rgbr", // Generated app password
      },
    });

    const mailOptions = {
      from: email, // Sender email
      to: "satyamsen167@gmail.com", // Destination email
      subject: `New message from ${fullname}`,
      text: message,
      html: `<p><strong>Name:</strong> ${fullname}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error: any) {
      // Log the full error for debugging
      console.error("Error sending email:", error);

      // Send error response
      res
        .status(500)
        .json({ message: "Failed to send email", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
