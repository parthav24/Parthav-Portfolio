import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import mysql from "../assets/mysql.png";
import postgresql from "../assets/postgresql.png";
import bootstrap from "../assets/bootstrap.png";
import sql from "../assets/sql.png";
import firebase from "../assets/firebase.png";
import dsa from "../assets/dsa.png";
import dbms from "../assets/dbms.png";
import numpy from "../assets/numpy.png";
import pandas from "../assets/pandas.png";
import matplotlib from "../assets/matplotlib.png";
import scikit from "../assets/scikit.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: c,
      title: "C Language",
      style: "shadow-blue-500",
    },

    {
      id: 2,
      src: cpp,
      title: "C++ Language",
      style: "shadow-blue-300",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: sql,
      title: "SQL",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: express,
      title: "Express",
      style: "shadow-white",
    },
    {
      id: 11,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 12,
      src: node,
      title: "NodeJs",
      style: "shadow-green-400",
    },
    {
      id: 13,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-600",
    },
    {
      id: 14,
      src: tailwind,
      title: "TailwindCSS",
      style: "shadow-blue-600",
    },
    {
      id: 15,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-blue-400",
    },
    {
      id: 16,
      src: github,
      title: "GitHub",
      style: "shadow-sky-400",
    },
    {
      id: 17,
      src: mysql,
      title: "MySQL",
      style: "shadow-sky-400",
    },
    {
      id: 18,
      src: postgresql,
      title: "PostgrSQL",
      style: "shadow-sky-400",
    },
    {
      id: 19,
      src: dsa,
      title: "DSA",
      style: "shadow-sky-400",
    },
    {
      id: 20,
      src: dbms,
      title: "DBMS",
      style: "shadow-sky-400",
    },
    {
      id: 21,
      src: numpy,
      title: "Numpy",
      style: "shadow-sky-400",
    },
    {
      id: 22,
      src: pandas,
      title: "Pandas",
      style: "shadow-yellow-400",
    },
    {
      id: 23,
      src: matplotlib,
      title: "Matplotlib",
      style: "shadow-gray-400",
    },
    {
      id: 24,
      src: scikit,
      title: "Scikit-Learn",
      style: "shadow-orange-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the Technologies / Languages I've worked with and used
            them in my projects.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-8 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
