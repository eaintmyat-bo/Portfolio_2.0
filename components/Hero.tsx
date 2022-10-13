import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import ME from "../assets/me_hero.png";
import Link from "next/link";
type Props = {};

{
  /* Misc Animations for Introduction*/
}
export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hey there, I'm Bo!",
      "A lighting consultant turned software engineer",
      "Loves coffee & coding!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={ME.src}
        alt="Intro Image"
      />

      <div className="z-20">
        <h2 className="text-sm-bold uppercase text-[#ff2997] pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#ff2997" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
