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
    const { name, value, message } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <section className="mt-8 flex flex-col gap-8 pb-16 w-full">
      <h1 className="text-2xl text-foreground font-bold">Contact Me</h1>
      <form>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="h-16">
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Name"
            />
          </div>
          <div className="h-16">
            <input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Email"
            />
          </div>
          <div className="h-32 sm:col-span-2">
            <textarea
              className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
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
