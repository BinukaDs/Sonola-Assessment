import { motion, AnimatePresence } from 'framer-motion'


export const FadeIn = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{
                    duration: 1.5,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className='w-full h-full'
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export const FadeInUp = ({ delay, children }: { delay?: number; children: React.ReactNode }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                    duration: 1.8,
                    delay: delay || 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className='w-full h-full'
                viewport={{ once: true }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}