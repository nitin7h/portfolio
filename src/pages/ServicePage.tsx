import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function ServicePage() {
  return (
    <section id="services">
      <div className="max-w-5xl w-screen mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "Web Application Development",
    description:
      " I design and develop scalable, high-performance web applications using modern frameworks like Next.js, React, and Node.js. My expertise ensures responsive UI, efficient state management, and seamless backend integration.",
    link: "https://stripe.com",
  },
  {
    title: "API Development & Integration",
    description:
      " I build secure and well-structured RESTful and GraphQL APIs using Express.js and Next.js API routes. I specialize in third-party API integration to enhance application functionality and user experience.",
    link: "https://netflix.com",
  },
  {
    title: "Database Design & Management",
    description:
      "I design and optimize relational (MySQL) and NoSQL (MongoDB) databases to ensure data integrity, security, and performance. I also handle database migrations, indexing, and efficient query execution.",
    link: "https://google.com",
  },
  {
    title: "Authentication & Security",
    description:
      " I implement robust authentication systems using NextAuth, JWT, OAuth (Google, GitHub, Facebook), and credential-based logins. My security practices include encryption, role-based access control (RBAC), and secure data storage.",
    link: "https://meta.com",
  },
  {
    title: "Real-Time Communication & WebSockets",
    description:
      "I develop real-time applications such as chat systems and live notifications using WebRTC, Socket.io, and Firebase. My solutions ensure seamless user interactions and instant data updates.",
    link: "https://amazon.com",
  },
  {
    title: " E-Commerce Development",
    description:
      "I create secure and feature-rich e-commerce platforms with product management, payment gateway integration, and user-friendly shopping experiences.",
    link: "https://microsoft.com",
  },
];
