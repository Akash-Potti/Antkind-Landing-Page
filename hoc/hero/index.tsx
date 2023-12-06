"use client"
import { motion } from "framer-motion"
import Heading from "./heading"


const SUBHEADING = "CRAFTING ''nn STORIES ''nn THAT TRAVEL."

const HeroSection = () => {
    return (
        <div className={`md:w-screen h-[45vh] md:h-[65vh] flex items-center justify-between flex-col pb-[5vh]`}>
            <Heading />
            <p className="text-6xl md:text-9xl text-center font-extrabold text-header">
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
                        {text == "''nn" ? <br /> : (
                            <>
                                {text} {' '}
                            </>
                        )}
                    </motion.span>
                ))}
            </p>
        </div>
    )
}

export default HeroSection