import React from "react";
import { motion } from "framer-motion";
import ME from "../assets/me_about.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={ME.src}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-50 md:h-50 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">Get to Know Me</h4>
        <p className="text-sm text-gray-200">
          Born and raised in Myanmar. Educated and been working in Singapore.
          <br />
          <br />
          I'm Bo, a software engineer currently working in a Fintech industry.
          Before I decided to grow out of my comfort zone and embarked on my SWE
          journey, I was an experienced technical consultant{" ("}dealing with
          clients and managing projects are my{" "}
          <span className="font text-[#ff2997]">bread</span> and{" "}
          <span className="font text-[#ff2997]">butter</span>
          {") "} . I truly believe that to be a <b>GREAT</b> software engineer,
          the ability to understand and address the painpoints of your clients
          through effective communication skill is as equally important as a
          strong technical skill.
          <br />
          <br />
          Apart from coding, I enjoy cooking and binge watching crime shows. Of
          course, not to forget with a good cup of coffee !
        </p>
      </div>
    </motion.div>
  );
}
