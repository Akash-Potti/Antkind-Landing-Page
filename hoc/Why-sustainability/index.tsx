"use client"
import { Instrument_Serif } from "next/font/google"
import {motion} from "framer-motion"
import Heading from "./heading"


const is = Instrument_Serif({
  weight: "400",
  subsets: ["latin", "latin-ext"]
})


const WhySustainability = () => {
    return (
        <div>
            <div className={`py-24 w-full h-full flex flex-col items-center justify-center gap-2 ${is.className}`}>
                <Heading/>
                <p className="text-4xl text-start md:text-7xl">
                
                </p>
            </div>
        </div>
    )
}

export default WhySustainability