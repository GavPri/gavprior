"use client";

import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useRouter } from "next/navigation"; // Import useRouter

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const router = useRouter(); // Initialize router to handle page navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    let valid = true;

    // Validate name
    if (!formData.name.trim()) {
      toast.error("Name is required.");
      valid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      toast.error("Email is required.");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      valid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      toast.error("Message is required.");
      valid = false;
    } else if (formData.message.length < 30) {
      toast.error("Message must be at least 30 characters long.");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Validate form before submitting
    if (!validate()) {
      return; // Stop submission if validation fails
    }

    const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const data = {
      service_id: service_id,
      template_id: template_id,
      user_id: public_key,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Gavin",
        message: formData.message,
      },
    };

    try {
      console.log(data);
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      toast.success("I got your email, I will reply ASAP!");

      // Redirect to the home page after 2 seconds
      setTimeout(() => {
        router.push("/"); // Navigate to the home page
      }, 3000);
    } catch (error) {
      toast.error("There was an issue with your message.");
    }
  };

  return (
    <section className="mt-8 flex flex-col gap-8 pb-16 w-full">
      <h1 className="text-2xl text-foreground font-bold">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="h-16">
            <input
              value={formData.name}
              onChange={handleChange}
              name="name"
              className="text-mutedForeground flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Name"
            />
          </div>

          <div className="h-16">
            <input
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="text-foreground flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Email"
            />
          </div>

          <div className="h-32 sm:col-span-2">
            <textarea
              value={formData.message}
              name="message"
              onChange={handleChange}
              className="text-foreground flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              placeholder="Leave feedback, career opportunities, or just say hello!"
              rows={6}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-primaryForeground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full disabled:opacity-50"
        >
          {isSending ? (
            <p className="inline-flex justify-evenly items-center italic">
              Sending your message...
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-foreground-200 animate-spin fill-shString ml-4"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </p>
          ) : (
            <p className="inline-flex justify-evenly items-center">
              {" "}
              Send Message <IoPaperPlaneOutline size={25} className="ml-4" />
            </p>
          )}
        </button>
      </form>

      <Toaster />
    </section>
  );
};

export default Page;
