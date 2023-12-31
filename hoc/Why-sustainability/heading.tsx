import {motion} from "framer-motion"

const TEXT = "Why Sustainability?"

const SustainabilityHeading = () => {
    return (
        <>
        <h1 className="uppercase text-5xl md:text-[150px]">
        {TEXT.split(" ").map((char, idx)=>(
            <motion.span
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: idx * 0.15
                }}
            >
                {char}{" "}
            </motion.span>
        ))}
        </h1>
        </>
    )
}

export default SustainabilityHeading;