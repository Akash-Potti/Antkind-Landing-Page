import { motion } from "framer-motion";
import Image from "next/image";

const Heading = () => {
    const logoAnimation = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="py-4"
            initial="hidden"
            animate="visible"
            variants={logoAnimation}
            transition={{ duration: 1.5 }}
        >
            {/* Wrap your Image component with motion.div */}
            <Image alt="Antkind" src="/Logo.png" width={250} height={250} />
        </motion.div>
    );
};

export default Heading;
