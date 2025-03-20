import { ProjectHoverEffect } from "@/components/ui/card-hover-projects";

export default function ProjectPage() {
  return (
    <section id="projects">
      <div className="max-w-5xl w-screen mx-auto px-8">
        <ProjectHoverEffect items={projects} />
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "Video Calling App",
    description: {
      steps: [
        "Implemented WebRTC for peer-to-peer video calling",
        "Real-time signaling",
        "Secure and stable connection",
      ],
    },
    link: "https://github.com/nitin7h/videocalling-app",
  },
  {
    title: "Studytube",
    description: {
      steps: [
        "Ad-Free Educational Videos",
        "AI-Powered Study Chat",
        "No Diversion Between Studies",
      ],
    },
    link: "https://github.com/nitin7h/studytube-ai",
  },
  {
    title: "QRCodeAttend",
    description: {
      steps: [
        "Student registration and login",
        "Efficient Attendance System by QR Code",
        "Admin Management",
      ],
    },
    link: "https://github.com/nitin7h/QR-Attendance-System",
  },
  {
    title: "KYC Verification System",
    description: {
      steps: [
        "User registration and login with JWT authentication",
        "Email OTP verification",

        "Data security",
      ],
    },
    link: "https://github.com/nitin7h/KYC-System",
  },
  {
    title: "Secure Personal Chat App",
    description: {
      steps: [
        "Real-time Personal chat with Freind",
        "End-to-end encryption",
        "Seamless communication ",
      ],
    },
    link: "https://github.com/nitin7h/Personal-chat-application",
  },

  {
    title: "Personal Portfolio",
    description: {
      steps: [
        "Responsive UI with Tailwind CSS",
        "Efficient Performance using Next.js",
        "Seamless User Experience",
      ],
    },
    link: "https://github.com/nitin7h/portfolio",
  },
];
