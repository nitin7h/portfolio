import { SkillsHoverEffect } from "@/components/ui/car-hover-skills";

export default function SkillsPage() {
  return (
    <section id="skillPage">
      <div className="max-w-5xl w-screen mx-auto px-8">
        <SkillsHoverEffect items={projects} />
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "Data Structures and Algorithms",
  },
  {
    title: "OOPs",
  },
  {
    title: "C++",
  },
  {
    title: "JavaScript",
  },
  {
    title: "TypeScript",
  },

  {
    title: "Node.js",
  },
  {
    title: "express.js",
  },
  {
    title: "React.js",
  },
  {
    title: "Next.js",
  },
  {
    title: "Socket.io",
  },
  {
    title: "Web RTC",
  },

  {
    title: "Redux Toolkit",
  },
  {
    title: "MongoDB",
  },
  {
    title: "Mysql",
  },
  {
    title: "Html",
  },
  {
    title: "CSS Tailwind",
  },
  {
    title: "Operating System",
  },
  {
    title: "Computer Networks",
  },
  {
    title: "DBMS",
  },
  {
    title: "Docker",
  },
  {
    title: "Linux",
  },
];
