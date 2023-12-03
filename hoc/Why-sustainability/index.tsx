"use client"
import { Instrument_Serif } from "next/font/google"
import { motion } from "framer-motion"
import Heading from "./heading"
import { Parallax } from "react-scroll-parallax"


const is = Instrument_Serif({
    weight: "400",
    subsets: ["latin", "latin-ext"]
})


const WhySustainability = () => {
    return (
        <Parallax speed={25}>
            <div className={`py-24 w-full h-full flex flex-col items-center justify-center gap-2 ${is.className}`}>
                <Heading />
            </div>
        </Parallax>
    )
}

export default WhySustainability