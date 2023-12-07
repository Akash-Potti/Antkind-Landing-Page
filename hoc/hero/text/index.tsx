"use client"
import Image from "next/image";

const Text = () => {
    return (
        <div className="flex w-full  text-text">
            <div className="left-0 h-full w-full flex items-center md:flex-row flex-col gap-4">
                <h1 className="text-xl sm:text-3xl md:text-start text-center uppercase font-semibold md:!w-1/2 w-full">
                    Antkind lives at the cusp of progress and peril.
                    We are a digital marketing & business development collective of storytellers and growth hackers. We help tell standout brand stories and build scale for climate companies and conscious brands.
                </h1>
                <Image src="/static/1.jpg" width={750} height={750} alt="Solar panels" className="w-full md:w-1/2 " />
            </div>
        </div>
    )
}

export default Text;