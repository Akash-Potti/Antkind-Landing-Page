"use client"
import { Instrument_Serif } from "next/font/google"
import { motion } from "framer-motion"
import AntsHeading from "./heading"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import { useEffect, useState } from "react"

const is = Instrument_Serif({
  weight: "400",
  subsets: ["latin", "latin-ext"]
})

const teamMembers = [
  {
    name: "Mairu Gupta", role: "CEO", image: "/mairu.jpg", description: "A media & tech executive with 15 years of experience in scaling both corporate and early-stage companies across advertising, sports, music and blockchain. He was heading the media business for Sony Music & the NBA, and previously he also led business for advertising agencies such as Saatchi & Saatchi, Jack in the Box, SapientNitro, Young & Rubicam earlier in his career."
  },
  { name: "Ankita Rajurkar", role: "Business Lead", image: "/ankita.jpg" },
  { name: "Nupur Prasad", role: "Content Lead", image: "/nupur.png" },
  { name: "Sanyja Santiago", role: "Design Lead", image: "/Sanyja.jpg" }
];

const borderStyles = [
  {
    borderTopRightRadius: "96px",
    borderTopLeftRadius: "124px",
    borderBottomRightRadius: "24px",
  },
  {
    borderTopLeftRadius: "156px",
    borderBottomRightRadius: "156px",
    borderTopRightRadius: "12px",
    borderBottomLeftRadius: "12px"
  },
  {
    borderTopLeftRadius: "156px",
    borderBottomRightRadius: "156px",
    borderTopRightRadius: "12px",
    borderBottomLeftRadius: "12px"
  },
  {
    borderBottomLeftRadius: "96px",
    borderBottomRightRadius: "96px",
    borderTopLeftRadius: "24px",
  }
]

const Team = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleWindowSizeChange() {
      setIsMobile(window.innerWidth <= 964);
    }
    handleWindowSizeChange()

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [])

  return (
    <Parallax speed={25}>
      <div className={`pt-24 w-full h-full flex flex-col items-center justify-center gap-2  ${is.className}`}>
        <AntsHeading />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-2 gap-8 mt-8 h-full md:w-full">
          {teamMembers.map((member, idx) => (
            <motion.div
              style={
                !isMobile ? { ...borderStyles[idx] } : {}
              }
              initial={{
                opacity: 0
              }}
              viewport={{
                once: true
              }}
              whileInView={{
                opacity: 1
              }}
              transition={{
                duration: 0.3,
                delay: 0.5 + (0.2 * idx)
              }}
              className="bg-[#aaff96] rounded-xl md:rounded-none md:justify-start flex flex-col md:flex-row items-center justify-center md:h-56 overflow-hidden gap-4 pb-2">
              <Image src={member.image} width={964} height={224} alt={member.name} className="w-full md:w-56 max-h-56" />
              <h1 className="text-4xl font-semibold text-center">
                {member.name}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </Parallax >
  )
}

export default Team