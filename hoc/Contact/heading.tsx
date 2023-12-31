import { motion } from "framer-motion"

const TEXT = "Get in touch"

const AntsHeading = () => {
    return (
        <>
            <h1 className="uppercase text-5xl md:text-[150px]">
                {TEXT.split(" ").map((char, idx) => (
                    <motion.span
                        initial={{
                            rotate: -25,
                            opacity: 0,
                        }}
                        animate={{
                            rotate: 0,
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

export default AntsHeading;