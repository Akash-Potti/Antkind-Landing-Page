import {motion} from "framer-motion"

const TEXT = "ANTKIND"

const Heading = () => {
    return (
        <>
        <h1 className="uppercase text-8xl md:text-[256px]">
        {TEXT.split("").map((char, idx)=>(
            <motion.span
                style={{display: "inline-block"}}
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
                {char}
            </motion.span>
        ))}
        </h1>
        </>
    )
}

export default Heading;