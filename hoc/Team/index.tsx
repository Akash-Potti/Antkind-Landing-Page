"use client"
import { motion } from "framer-motion"
import AntsHeading from "./heading"
import Image from "next/image"
import { Parallax } from "react-scroll-parallax"
import { useEffect, useState } from "react"
import { LinkedinLogo } from "@phosphor-icons/react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Mairu Gupta", role: "CEO", image: "/mairu.jpeg",
    linkedin: "https://www.linkedin.com/in/mairu/"
  },
  {
    name: "Ankita Rajurkar", role: "Business Lead", image: "/ankita.jpeg",
    linkedin: "https://www.linkedin.com/in/ankitarajurkar/"
  },
  {
    name: "Nupur Prasad", role: "Content Lead", image: "/nupur.jpeg",
    linkedin: "https://www.linkedin.com/in/nupur-prasad-content/"
  },
  {
    name: "Sanyja Santiago", role: "Design Lead", image: "/Sanyja.jpg",
    linkedin: "https://www.linkedin.com/in/sanyja-santiago"
  }
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
      <div className={`w-full h-full flex flex-col items-center justify-center gap-2`}>
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
              <Image src={member.image} width={964} height={964} alt={member.name} className="w-full md:w-64 max-h-64" />
              <div className="flex flex-col gap-2 w-full h-full items-center justify-center md:items-start">
                <h1 className="text-4xl font-semibold text-center">
                  {member.name}
                </h1>
                <p className="text-sm font-semibold text-center">
                  {member.role}
                </p>
                <div className="flex gap-2 items-center">
                  <Link href={member.linkedin}>
                    <LinkedinLogo size={32} weight="fill" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Parallax >
  )
}

export default Team