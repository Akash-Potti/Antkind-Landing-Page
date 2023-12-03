"use client"
import AntsHeading from "./heading"
import { Parallax } from "react-scroll-parallax"



const Team = () => {
  return (
    <Parallax speed={35}>
      <div className={`pb-96 w-full h-full flex flex-col items-center justify-center gap-2`}>
        <AntsHeading />
        <div className="flex flex-row">
        </div>
      </div >
    </Parallax>
  )
}

export default Team