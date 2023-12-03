"use client"
import { Instrument_Serif } from "next/font/google"
import { motion } from "framer-motion"
import Heading from "./heading"
import Navbar from "./nav"
import { Parallax, ParallaxBanner } from "react-scroll-parallax"

const is = Instrument_Serif({
    weight: "400",
    subsets: ["latin", "latin-ext"]
})

const SUBHEADING = ": CRAFTING STORIES THAT TRAVEL"

const HeroSection = () => {
    return (
        <Parallax speed={-10}>
            <Navbar />
            <div className={`py-24 w-full h-full flex flex-col items-center justify-center gap-2 id="about" ${is.className}`}>
                <Heading />
                <p className="text-2xl  text-center md:text-7xl">
                    {SUBHEADING.split(" ").map((text, indx) => (
                        <motion.span initial={{
                            opacity: 0,
                        }} key={indx}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                bounce: 0.25,
                                type: "spring",
                                delay: 0.15 + (indx * 0.2)
                            }}
                        >
                            {text} {' '}
                        </motion.span>
                    ))}
                </p>
            </div>
        </Parallax>
    )
}

export default HeroSection