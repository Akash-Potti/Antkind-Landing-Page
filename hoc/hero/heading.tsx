import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Heading = () => {
    const [isMobile, setIsMobile] = useState(false);
    const logoAnimation = {
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        function handleWindowSizeChange() {
            setIsMobile(window.innerWidth <= 556);
        }
        handleWindowSizeChange()

        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])



    return (
        <motion.div
            className="py-4"
            initial="hidden"
            animate="visible"
            variants={logoAnimation}
            transition={{ duration: 1.5 }}
        >
            {/* Wrap your Image component with motion.div */}
            <Image alt="Antkind" src="/Logo.png" width={isMobile ? 156 : 250} height={isMobile ? 156 : 250} />
        </motion.div>
    );
};

export default Heading;
