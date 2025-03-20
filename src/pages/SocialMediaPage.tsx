import Link from "next/link";
import React from "react";
import {
  IconBrandGmail,
  IconBrandTelegram,
  IconBrandTwitter,
  IconBrandLeetcode,
  // IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandGithub,
} from "@tabler/icons-react";
const data = [
  {
    // linkdin
    svg: <IconBrandLinkedin />,
    link: "https://www.linkedin.com/in/nitin7h/",
  },
  {
    // github
    svg: <IconBrandGithub />,
    link: "https://github.com/nitin7h",
  },

  {
    // twitter
    svg: <IconBrandTwitter />,
    link: "https://x.com/nitinkumar_dev",
  },
  {
    // telegram
    svg: <IconBrandTelegram />,
    link: "https://t.me/nitin19aug",
  },
  // email
  {
    svg: <IconBrandGmail />,
    link: "mailto:nitinkumar7h@example.com",
  },
  {
    // instagram
    svg: <IconBrandInstagram />,
    link: "https://www.instagram.com/nittiin.kumar?igsh=MWt1cTM0c2lrM3U2Nw==",
  },

  // u tube
  // {
  //   svg: <IconBrandYoutube />,
  //   link: "https://www.youtube.com/@nitinkumar_dev",
  // },
  {
    // leetcode
    svg: <IconBrandLeetcode />,
    link: "https://leetcode.com/u/nitinkumar7h/",
  },
];
export default function SocialMediaPage() {
  return (
    // <div classNameName="flex justify-center space-x-5">
    //   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    //     <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    //   </a>
    //   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    //     <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    //   </a>
    //   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    //     <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
    //   </a>
    //   <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
    //     <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
    //   </a>
    //   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    //     <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
    //   </a>
    // </div>

    <div className="w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
      {data.map((data, index) => {
        return (
          <button
            key={index}
            className="w-12 h-12 flex items-center justify-center border border-white bg-gradient-to-tr from-slate-950 to-black cursor-pointer rounded-md shadow-md shadow-transparent transition-all duration-300 hover:shadow-red-200"
          >
            <Link href={data.link} target="_blank" rel="noopener noreferrer">
              {data.svg}
            </Link>
          </button>
        );
      })}
    </div>
  );
}
