"use client"
import { Instrument_Serif } from "next/font/google"
import { motion } from "framer-motion"
import AntsHeading from "./heading"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
const is = Instrument_Serif({
  weight: "400",
  subsets: ["latin", "latin-ext"]
})
const teamMembers = [
  { image: "/Akkaro.png" },
  { image: "/altM.jpg" },
  { image: "/graviky_labs.png" },
  { image: "/pyse.jpg" }
  // Add more team members as needed
];


const Team = () => {
  return (
    <Parallax speed={35}>
      <div className={`pb-96 w-full h-full flex flex-col items-center justify-center gap-2 ${is.className}`}>
        <AntsHeading />
        <div className="flex flex-row">
        </div>
      </div >
    </Parallax>
  )
}

export default Team