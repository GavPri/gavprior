import React from "react";

const page = () => {
  return (
    <section className="mt-8 flex flex-col gap-8 pb-16">
      <h1 className="text-2xl text-foreground font-bold">Contact Me</h1>
      <form>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="h-16"></div>
          <div className="h-16"></div>
          <div className="h-32"></div>
        </div>
      </form>
    </section>
  );
};

export default page;
