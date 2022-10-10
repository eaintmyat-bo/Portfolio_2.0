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
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={ME.src}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Something About Me</h4>
        <p className="text-sm">
          Born and raised in Myanmar. Educated and been working in Singapore.
          <br />
          <br />
          I'm Bo, a software engineer currently working in a fintech company.
          Before I decided to grow out of my comfort zone and embarked on my SWE
          journey, I was an experienced technical consultant{" ("}dealing with
          clients and managing projects are my{" "}
          <span className="font-semibold text-[#F7AB0A]">bread</span> and{" "}
          <span className="font-semibold text-[#F7AB0A]">butter</span>
          {") "} . I truly believe that to be a good software engineer, the
          ability to understand and address the painpoints of the
          users/customers and an effective communication skill is equally as
          important as a strong technical skill.
          <br />
          <br />
          Apart from coding, I enjoy cooking and binge watching crime shows. Of
          course, not to forget with a good cup of coffee !
        </p>
      </div>
    </motion.div>
  );
}
