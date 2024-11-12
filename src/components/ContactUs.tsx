"use client";
import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import { cn } from "@/lib/utils"; // Assuming this is used for conditional class names
import { AlertDialogCancel } from "./ui/alert-dialog"; // Adjust import based on your actual structure
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      fullname: formData.get("fullname"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Send data using axios
      const response = await axios.post("/api/contact", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setResponseMessage("Message sent successfully!");
      } else {
        setResponseMessage(`Failed to send message: ${response.data.message}`);
      }
    } catch (error: any) {
      // If the error is from the response, we can access it here
      setResponseMessage("An error occurred while sending the message.");
      console.error("Error sending message:", error); // Log for debugging
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mt-10 w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black relative">
      {/* Close Button */}
      <AlertDialogCancel asChild>
        <button
          onClick={() => console.log("Close button clicked")} // Optional handler
          className="absolute top-2 right-2 text-gray-00 dark:text-white hover:text-gray-800 dark:hover:text-gray-100"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1"
              x1="7.534"
              x2="27.557"
              y1="7.534"
              y2="27.557"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#f44f5a"></stop>
              <stop offset=".443" stop-color="#ee3d4a"></stop>
              <stop offset="1" stop-color="#e52030"></stop>
            </linearGradient>
            <path
              fill="url(#hbE9Evnj3wAjjA2RX0We2a_OZuepOQd0omj_gr1)"
              d="M42.42,12.401c0.774-0.774,0.774-2.028,0-2.802L38.401,5.58c-0.774-0.774-2.028-0.774-2.802,0	L24,17.179L12.401,5.58c-0.774-0.774-2.028-0.774-2.802,0L5.58,9.599c-0.774,0.774-0.774,2.028,0,2.802L17.179,24L5.58,35.599	c-0.774,0.774-0.774,2.028,0,2.802l4.019,4.019c0.774,0.774,2.028,0.774,2.802,0L42.42,12.401z"
            ></path>
            <linearGradient
              id="hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2"
              x1="27.373"
              x2="40.507"
              y1="27.373"
              y2="40.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#a8142e"></stop>
              <stop offset=".179" stop-color="#ba1632"></stop>
              <stop offset=".243" stop-color="#c21734"></stop>
            </linearGradient>
            <path
              fill="url(#hbE9Evnj3wAjjA2RX0We2b_OZuepOQd0omj_gr2)"
              d="M24,30.821L35.599,42.42c0.774,0.774,2.028,0.774,2.802,0l4.019-4.019	c0.774-0.774,0.774-2.028,0-2.802L30.821,24L24,30.821z"
            ></path>
          </svg>
        </button>
      </AlertDialogCancel>

      {/* Form Content */}
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to JupVen WebTech
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        If you have any questions, feedback, or need assistance, please feel
        free to reach out to us. Our team is here to help and will get back to
        you as soon as possible. Simply fill out the form below, and we'll make
        sure to address your needs promptly. Thank you for contacting us!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              id="fullname"
              name="fullname"
              placeholder="John Doe"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="youremail@example.com"
            type="email"
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Your Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            className="w-full p-3 border border-neutral-300 rounded-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            rows={4}
            required
          />
        </LabelInputContainer>

        <div className="flex justify-between mt-6">
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message →"}
          </button>
        </div>
      </form>

      {responseMessage && (
        <div className="mt-4 text-center">
          <p
            className={
              responseMessage.startsWith("Failed")
                ? "text-red-600"
                : "text-green-600"
            }
          >
            {responseMessage}
          </p>
        </div>
      )}
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
