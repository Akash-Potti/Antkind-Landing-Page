import {motion} from "framer-motion"
import Link from "next/link";

const Navbar = () => {
    return (
        <motion.div 
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            transition={{
                delay: 1.5
            }}
        >
            <div
                className="w-full py-4 flex items-center justify-between px-4 font-medium"
            >
                <Link href="#about">
                    About
                </Link>
                <Link href="#services">
                    Services
                </Link>
                <Link href="#team">
                    Team
                </Link>
                <Link href="#contact">
                    Contact
                </Link>
                
            </div>
        </motion.div>
    )
}

export default Navbar;