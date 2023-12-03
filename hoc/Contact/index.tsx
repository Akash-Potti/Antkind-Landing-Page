"use client"
import { Instrument_Serif } from "next/font/google"
import AntsHeading from "./heading"
import Link from "next/link"
import { EnvelopeOpen } from "@phosphor-icons/react"
const is = Instrument_Serif({
    weight: "400",
    subsets: ["latin", "latin-ext"]
})
const Team = () => {
    return (
        <div className={`py-24 w-full h-full flex flex-col items-center justify-center gap-2 id="contact" ${is.className}`}>
            <AntsHeading />
            <div className="w-full flex flex-col md:flex-row gap-2">
                <Link href="mailto:mairu@antkind.in" className="w-full md:w-1/2 h-full bg-[#aaff96] p-4 flex gap-2 items-center rounded-xl">
                    <EnvelopeOpen size={48} />
                    <h1 className="text-3xl">
                        mairu@antkind.in
                    </h1>
                </Link>
                <Link href="mailto:ankita@antkind.in" className="w-full md:w-1/2 h-full bg-[#aaff96] p-4 flex gap-2 items-center rounded-xl">
                    <EnvelopeOpen size={48} />
                    <h1 className="text-3xl">
                        ankita@antkind.in                    </h1>
                </Link>
            </div>
        </div>
    )
}

export default Team