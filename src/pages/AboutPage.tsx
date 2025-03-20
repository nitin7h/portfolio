import React from "react";
import SocialMediaPage from "./SocialMediaPage";
import nitinImage from "../../public/nitin.jpg";
import Image from "next/image";
export default function AboutPage() {
  return (
    <section id="aboutme" className="h-screen p-1 ">
      <div className="w-full h-full bg-slate-950">
        <div className="h-full w-full mx-auto relative top-12 pb-20 xl:px-16 px-8 flex md:flex-row flex-col gap-4 justify-center items-center pt-4">
          <div className="w-full relative">
            <div className="relative z-10 rounded-full lg:max-w-[70%] max-w-[60%] mx-auto outline outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30">
              <Image
                src={nitinImage}
                alt="My Image"
                layout="responsive"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-col justify-center gap-4 md:text-left text-center text-white  md:mt-0 sm:mt-8 mt-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-semibold font-serif">
              Hello, My name is Nitin Kumar
            </h1>
            <h3 className="text-2xl font-bold capitalize text-rose-400">
              i&apos;m{" "}
              <span className="typing text-green-500 dark:text-green-700">
                fullstack developer
              </span>
            </h3>
            <p className="text-2xl">
              A dedicated and versatile Full Stack Web Developer proficient in
              the MERN stack (MongoDB, Express.js, React.js, Node.js and
              Next.js) with a strong foundation in both front-end and back-end
              technologies.
            </p>
            <div className="">
              <SocialMediaPage />
            </div>
          </div>
        </div>
      </div>

      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.12/typed.min.js" referrerpolicy="no-referrer"></script>
<script>
    var typed = new Typed('.typing', {
    strings: ['', 'FullStack Developer,', 'Frontend Developer,', 'Backend Developer,', 'Mobile Apps Developer.'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
</script> */}
    </section>
  );
}
