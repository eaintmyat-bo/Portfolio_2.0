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
        <h4 className="text-xl font-light">Full Stack Developer</h4>
        <p className="text-lg mt-1 text-[#ff2997]">Kapps Consulting</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src={java.src} alt="" />
          <img className="h-10 w-10 rounded-full" src={vue.src} alt="" />
          <img className="h-10 w-10 rounded-full" src={mysql.src} alt="" />
        </div>
        <p className="uppercase py-5 text-gray-400">Feb 2021 - July 2021</p>
        <ul className="list-disc space-y-4 ml-5 text-base">
          <li>
            Succesffully developed both backend and responsive UI financial
            rebate system application for one of the top Singapore banks.
          </li>
          <li>
            Coordinated with associate director on rebate payment database
            design and project timelines.
          </li>
          <li>Supported bug fixes post production.</li>
          <li>Carried out QA for the company's legacy app.</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCardKapps;
