import React from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { CgInstagram } from "react-icons/cg";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-10">
            <a href="https://www.instagram.com/parthav__24" className="text-center flex flex-col items-center gap-2">
              <CgInstagram size={30} />
              <span>parthav__24</span>
            </a>
            <a href="https://www.linkedin.com/in/parthav-chodvadiya-506568254" className="text-center flex flex-col items-center gap-2">
              <LiaLinkedinIn size={30} />
              <span>Parthav Chodvadiya</span>
            </a>
            <a href="mailto:parthavchodvadiya24@gmail.com" className="text-center flex flex-col items-center gap-2">
              <BiMailSend size={30} />
              <span>parthavchodvadiya24@gmail.com</span>
            </a>            
            <a href="tel:+919913796069" className="text-center flex flex-col items-center gap-2">
              <BiPhoneCall size={30} />
              <span>+91 9913796069</span>
            </a>
          </div>         
        </div>
      </div>
    </div>
  );
};

export default Contact;