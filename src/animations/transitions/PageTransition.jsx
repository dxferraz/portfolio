import { motion } from "framer-motion"

const pageAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

const AnimatedPage = ({ children }) => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedPage