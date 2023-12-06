"use client"
import AntsHeading from "./heading"
import Link from "next/link"
import { EnvelopeOpen } from "@phosphor-icons/react"

const Team = () => {
    return (
        <section id="contact">
            <div className={`py-24 w-full h-full flex flex-col items-center justify-center gap-2`}>
                <AntsHeading />
                <div className="w-full flex flex-col md:flex-row gap-2 ">
                    <Link href="mailto:mairu@antkind.in" className="w-full md:w-1/2 h-full bg-[#9e9e9d] p-4 flex gap-2 items-center rounded-xl justify-center">
                        <EnvelopeOpen size={48} />
                        <h1 className="text-3xl">
                            mairu@antkind.in
                        </h1>
                    </Link>
                    <Link href="mailto:ankita@antkind.in" className="w-full md:w-1/2 h-full bg-[#9e9e9d] p-4 flex gap-2 items-center rounded-xl justify-center">
                        <EnvelopeOpen size={48} />
                        <h1 className="text-3xl">
                            ankita@antkind.in
                        </h1>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Team