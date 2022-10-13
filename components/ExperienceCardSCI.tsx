import React from "react";
import { motion } from "framer-motion";
import sci from "../assets/sci.png";
import dialux from "../assets/dialux.png";

type Props = {};

function ExperienceCardSCI({}: Props) {
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
        src={sci.src}
        alt=""
      />

      <div className="px-0 py-5 md:px-10">
        <h4 className="text-xl font-light">
          Lighting Consultant (Field Application Engineer)
        </h4>
        <p className="text-lg mt-1 text-[#ff2997] ">Supreme Components Intl</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src={dialux.src} alt="" />
        </div>
        <p className="uppercase py-5 text-gray-400">Jul 2017 - Jul 2020</p>
        <ul className="list-disc space-y-4 ml-5 text-base">
          <li>
            Won {'"'}Rookie of the Year{'"'} and {'"'}Best Tech Support of the
            Year{'"'} in two consecutive years.
          </li>
          <li>
            Accomplished in driving revenue from 2.1 million USD to 3.36 million
            for FY2017-2018.
          </li>
          <li>
            Achieved a feedback rating of 9.5/10 in product and sales training
            from the sales teams and clients.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCardSCI;
