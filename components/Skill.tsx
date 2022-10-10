import React from "react";
import { motion } from "framer-motion";
import ruby from "../assets/ruby.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import node from "../assets/nodejs.png";
import csharp from "../assets/csharp.png";
import vue from "../assets/vue.png";
import rails from "../assets/rails.png";
import spring from "../assets/spring.png";
import mysql from "../assets/mysql.png";
import gcp from "../assets/gcp.png";
import firebase from "../assets/firebase.png";
import mongodb from "../assets/mongodb.png";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  const skillIcons = [
    { link: javascript, name: "Javascript" },
    { link: ruby, name: "Ruby" },
    { link: java, name: "Java" },
    { link: csharp, name: "C#" },
    { link: vue, name: "VueJS" },
    { link: node, name: "NodeJS" },
    { link: rails, name: "Rails" },
    { link: spring, name: "SpringBoot" },
    { link: mysql, name: "MySQL" },
    { link: mongodb, name: "MongoDB" },
    { link: firebase, name: "Firebase" },
    { link: gcp, name: "Google Cloud" },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">
      {skillIcons.map((skillIcon) => (
        // eslint-disable-next-line react/jsx-key
        <div className="group relative flex cursor-pointer">
          <motion.img
            initial={{
              x: directionLeft ? -200 : 200,
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={skillIcon.link.src}
            className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28
                  xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div
            className="absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out 
          group-hover:bg-slate-400 h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
          >
            <div className="flex items-center justify-center h-full">
              <p className="text-l font-serif font-bold text-black opacity-100">
                {skillIcon.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
