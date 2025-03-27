import React from "react";
import SocialMediaPage from "./SocialMediaPage";
import nitinImage from "../../public/nitin.jpg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section
      id="aboutme"
      className="min-h-screen flex items-center bg-slate-950 px-6 py-12"
    >
      <div className="w-full flex flex-col items-center text-white">
        {/* Profile Image with Outline */}
        <div className="relative w-48 h-48 md:w-56 md:h-56">
          <div className="absolute inset-0 rounded-full outline outline-[0.5rem] outline-offset-[0.2rem] outline-rose-400/50"></div>
          <Image
            src={nitinImage}
            alt="Nitin Kumar"
            width={500}
            height={500}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center max-w-lg mt-6">
          <h2 className="text-3xl font-semibold">
            Hello, My name is <span className="text-blue-400">Nitin Kumar</span>
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            A dedicated and versatile Full Stack Web Developer proficient in the
            MERN stack (MongoDB, Express.js, React.js, Node.js, and Next.js)
            with a strong foundation in both front-end and back-end
            technologies.
          </p>

          {/* Social Media Links */}
          <div className="mt-6">
            <SocialMediaPage />
          </div>
        </div>
      </div>
    </section>
  );
}
