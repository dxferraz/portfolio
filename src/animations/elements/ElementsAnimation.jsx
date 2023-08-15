import { motion } from "framer-motion"

const elementAnimation = {
    initial: { opacity: 0, y: +100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 0 },
}

const AnimatedElement = ({ children }, delay) => {
    return (
        <motion.div
            variants={elementAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            delay={delay}
            transition={{ duration: 0.5, delay: Math.random()}}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedElement