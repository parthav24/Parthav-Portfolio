import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/Parthav_Chodvadiya.pdf";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { BiMobile, BiPhoneCall } from "react-icons/bi";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/parthav-chodvadiya-506568254",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/parthav24",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:parthavchodvadiya24@gmail.com@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: resume,
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          CodeChef <SiCodechef size={30} />
        </>
      ),
      href: "https://www.codechef.com/users/parthav24",
    },
    {
      id: 6,
      child: (
        <>
          LeetCode <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/u/parthav24/",
    },
    {
      id: 7,
      child: (
        <>
          Phone <BiPhoneCall size={30} />
        </>
      ),
      href: "tel:+919913796069",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[20%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
