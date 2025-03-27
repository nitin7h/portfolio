import React from "react";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ServicePage from "@/pages/ServicePage";
import SkillsPage from "@/pages/SkillsPage";
import ProjectsPage from "@/pages/ProjectsPage";

export default function HomePage() {
  const data = [
    {
      titel: " ",
      pages: <AboutPage />,
    },
    {
      titel: "Projects",
      pages: <ProjectsPage />,
    },
    {
      titel: "Services",
      pages: <ServicePage />,
    },
    {
      titel: "Skills",
      pages: <SkillsPage />,
    },
  ];
  return (
    <>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className="mt-3 flex flex-col items-center justify-center"
          >
            <div className="m-4">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
                {item.titel}
              </h1>
            </div>

            <div>{item.pages}</div>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 to-transparent my-8 h-[1px] w-full" />
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-col items-center justify-center">
        <ContactPage />
      </div>
    </>
  );
}
