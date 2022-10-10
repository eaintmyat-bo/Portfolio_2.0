import React from "react";
import { motion } from "framer-motion";
import kapps from "../assets/kapps.jpeg";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import vue from "../assets/vue.png";

type Props = {};

function ExperienceCardKapps({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-1 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10
      hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center"
        src={kapps.src}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Full Stack Developer</h4>
        <p className="text-xl mt-1">Kapps Consulting</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src={java.src} alt="" />
          <img className="h-10 w-10 rounded-full" src={vue.src} alt="" />
          <img className="h-10 w-10 rounded-full" src={mysql.src} alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Feb 2021 - July 2021</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Developed robust Java code for backend financial rebate system
            application for banks
          </li>
          <li>Implemented reactive UI for financial rebate system</li>
          <li>
            Coordinated with associate director on rebate payment database
            design and project timelines
          </li>
          <li>Conducted code reviews</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCardKapps;
