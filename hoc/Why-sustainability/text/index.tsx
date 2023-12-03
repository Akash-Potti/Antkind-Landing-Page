"use client"
import { Instrument_Serif } from "next/font/google"
import {motion} from "framer-motion"
import { useEffect, useState } from "react"

const is = Instrument_Serif({
  weight: "400",
  subsets: ["latin", "latin-ext"]
})

const PHRASES = [
    "84% of global consumers consider ",
    "sustainability important when choosing a brand. ",
    "55% said it’s very or extremely important—which",
    " is an increase of 22% over 2019.",
    "More than 90% of global consumers wants  more ",
    "of the brands they use support social and/or environmental issues, ",
    "and three out of four teenagers say they want to buy more sustainable products.",
]

const Text1 = () => {
    const [isMobile, setIsMobile] = useState<boolean>(true);
    useEffect(()=>{
        function handleWindowSizeChange() {
            setIsMobile(window.innerWidth <= 768);
        }
        handleWindowSizeChange()

        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])


    return (
        <div className={`${is.className} text-[#78290F]`}>
            <h1 className="text-4xl px-4 md:px-0 md:text-6xl">
                {PHRASES.map((phrase, idx)=>(
                    <motion.span
                        initial={{
                            opacity:0.2,
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
        </div>
    )
}

export default Text1;