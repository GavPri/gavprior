"use client";

import axios from "axios";
import React, { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

// TODO -- Create state for the form.
// TODO -- add handle change for form input fields.
// TODO -- add a handle submit for the form to send to my email.
// TODO -- redirect users to the home page with toast notification.
const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // logic to submit
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
      console.log(data)
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(response.data);
    } catch (error) {}
  };
  return (
    <section className="mt-8 flex flex-col gap-8 pb-16 w-full">
      <h1 className="text-2xl text-foreground font-bold">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="h-16">
            <input
              value={formData.name}
              onChange={hanldeChange}
              name="name"
              className="text-mutedForeground flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Name"
            />
          </div>
          <div className="h-16">
            <input
              value={formData.email}
              name="email"
              onChange={hanldeChange}
              className="text-foreground flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Email"
            />
          </div>
          <div className="h-32 sm:col-span-2">
            <textarea
              value={formData.message}
              name="message"
              onChange={hanldeChange}
              className="text-foreground flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              placeholder="Leave feedback, career oppurtunities or just say hello!"
              rows={6}
            />
          </div>
        </div>
        <button className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none bg-primary text-primaryForeground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full disabled:opacity-50">
          Send Message <IoPaperPlaneOutline size={25} className="ml-4" />
        </button>
      </form>
    </section>
  );
};

export default page;
