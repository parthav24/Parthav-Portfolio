import React from "react";
import todosync from "../assets/todosync.jpg";
import mealmission from "../assets/mealmission.jpg";
import expensetracker from "../assets/expensetracker.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todosync,
      link: "https://todoosync.netlify.app/",
      repo: "https://github.com/parthav24/TodoSync",
      video: "https://www.youtube.com/watch?v=SdEomxfndoI&feature=youtu.be",
    },
    {
      id: 2,
      src: mealmission,
      link: "https://missionmeal.netlify.app/",
      repo: "https://github.com/parthav24/HackSwift",
      video: "https://www.youtube.com/watch?v=qANwOgijGBs&feature=youtu.be",
    },
    {
      id: 3,
      src: expensetracker,
      link: "https://github.com/parthav24/Expense-Tracker/",
      repo: "https://github.com/parthav24/Expense-Tracker",
      video: "https://www.youtube.com/watch?v=Z3iEKrcsQW4&feature=youtu.be",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo, video }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={video}>
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Live
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
