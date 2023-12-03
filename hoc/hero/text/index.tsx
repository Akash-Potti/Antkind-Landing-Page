"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Parallax } from "react-scroll-parallax"

const PHRASES = [
    "Antkind is in the race ",
    "between creativity and catastrophe. ",
    "We’re a full-service digital ",
    "marketing agency that ",
    "helps tell standout brand stories for climate ",
    "tech companies and conscious brands. ",
    "Antkind is an ode ",
    "to the superior ",
    "work ethos practised ",
    "in ant colonies. "

]

const Text = () => {
    const [isMobile, setIsMobile] = useState<boolean>(true);
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
        <Parallax speed={50} className={`text-[#78290F]`}>
            <h1 className="text-6xl px-4 md:px-0 md:text-8xl">
                {PHRASES.map((phrase, idx) => (
                    <motion.span
                        initial={{
                            opacity: 0.2,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.2,
                            delay: isMobile ? 0.2 * idx : 0.5
                        }}
                    >
                        {phrase}
                    </motion.span>
                ))}
            </h1>
        </Parallax>
    )
}

export default Text;