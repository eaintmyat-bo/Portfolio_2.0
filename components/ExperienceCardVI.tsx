import React from "react";
import { motion } from "framer-motion";
import vi from "../assets/vi-logo.png";
import node from "../assets/nodejs.png";
import ruby from "../assets/ruby.png";
import mysql from "../assets/mysql.png";
import gcp from "../assets/gcp.png";
import firebase from "../assets/firebase.png";

type Props = {};

function ExperienceCardVI({}: Props) {
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
        src={vi.src}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Backend Software Engineer</h4>
        <p className="text-xl mt-1">8I Holdings (VI App)</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src={node.src} alt="" />
          <img className="h-10 w-10 rounded-full" src={ruby.src} alt="" />
          <img className="h-10 w-10 rounded-full" src={mysql.src} alt="" />
          <img className="h-10 w-10 rounded-full" src={firebase.src} alt="" />
          <img className="h-10 w-10 rounded-full" src={gcp.src} alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Aug 2021 - Present</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Successfully implemented subscription models and in-app purchases
          </li>
          <li>
            Focuses on user centric backend features implementation for
            investment app
          </li>
          <li>Supports fixes and issues on the application post-deployment</li>
          <li>Conducts code reviews</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCardVI;
