import React from "react";
import { motion } from "framer-motion";
import memory from "../assets/memory.png";
import inventory from "../assets/inventory.png";
import shopping from "../assets/shoppingcart.png";
import job from "../assets/portal.png";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      name: "Jinder",
      details:
        "A web and mobile application to match and provide jobs recommendation based on user's uploaded resume, preference survey and clicked behaviours. The app is built using spring boot and Android for mobile. The core algorithm is implemented using python and flask to find matching jobs.",
      image: job,
    },
    {
      name: "Shopping Cart",
      details:
        "A web application of shopping cart system using C# languages as backend (OOP) and basic HTML, JS, CSS for frontend. The system is fully functional with cookies implementation for users’ past purchases, data analytics for the best-selling products, database management using ADO.Net to keep track of products description and stock status.",
      image: shopping,
    },
    {
      name: "Inventory Managment System",
      details:
        "A web application using JAVA with spring boot. The application allows real time stock update and management with report generation. The system also entails system order mail reminders for low inventory",
      image: inventory,
    },
    {
      name: "Memory Game",
      details:
        "An android mobile memory game that allows user to customise photo cards by image URLs.",
      image: memory,
    },
  ];

  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
  max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
       z-20
       scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image.src}
              className="w-36 h-36 md:w-48 md:h-48 xl:w-80 xl:h-80"
            />

            <div className="space-y-10 px-0 md:px-0 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}
                </span>
                : {project.name}
              </h4>

              <p className="text-lg text-center md:text-left">
                {project.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
