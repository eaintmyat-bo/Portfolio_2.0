import React from "react";
import { motion } from "framer-motion";
import ExperienceCardVI from "./ExperienceCardVI";
import ExperienceCardKapps from "./ExperienceCardKapps";
import ExperienceCardSCI from "./ExperienceCardSCI";

type Props = {};

const WorkExperience = ({}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
      max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-10 uppercase tracking-[20]px text-gray-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        <ExperienceCardVI />
        <ExperienceCardKapps />
        <ExperienceCardSCI />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
