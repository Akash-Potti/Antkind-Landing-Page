"use client"
import Heading from "./heading"
import { Parallax } from "react-scroll-parallax"




const WhySustainability = () => {
    return (
        <Parallax speed={25}>
            <div className={`py-24 w-full h-full flex flex-col items-center justify-center gap-2`}>
                <Heading />
            </div>
        </Parallax>
    )
}

export default WhySustainability