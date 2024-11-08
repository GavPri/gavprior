import React from "react";

import Image from "next/image";

const PersonalIntro = () => {
  return (
    <section className="flex flex-col items-start mt-8 ">
      <Image
        src="/images/hero.jpg"
        alt="Profile Picture"
        width={200}
        height={200}
        priority
        className="rounded-lg"
      />
    </section>
  );
};

export default PersonalIntro;
