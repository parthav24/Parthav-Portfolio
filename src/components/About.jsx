import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a web developer, working in both, backend and frontend
          programming. Excited for improving my skills and learning new
          technologies. I'm open to learn and work with any web technology and
          currently in last year of Computer Engineering.
        </p>

        <br />

        <p className="text-xl">
          Driven by a passion for technology, I continually seek to learn and grow, 
          embracing challenges that push the boundaries of my knowledge. <br />{" "}
          <br />
          My journey in tech is characterized by a commitment to creating impactful 
          solutions and contributing to projects that make a difference.
          <br /> <br />With a love for problem-solving and a dedication to continuous 
          improvement, I am excited about exploring new opportunities and innovations.
        </p>
      </div>
    </div>
  );
};

export default About;
