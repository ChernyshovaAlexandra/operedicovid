import React from "react";
import { motion } from 'framer-motion'

const Icon = ({ img, id, glow }) => {
    const iconAnimation = {
        initial: id => ({
            opacity: 0,
            scale: 0,
            transition: { duration: .5, delay: (id + 1) * 1 }
        }),
        animated: id => ({
            opacity: 1,
            scale: 1,
            transition: { duration: .5, delay: (id + 1) * .1 }
        }),
    }
    return (
        <motion.div
            variants={iconAnimation}
            initial="initial"
            whileInView='animated'
            custom={id}
            className={`lg:w-16 lg:h-16 w-12 h-12 rounded-full bg-white text-blue grid place-items-center p-2 ${glow ? glow : 'glow'} shrink-0`}
            dangerouslySetInnerHTML={{ __html: img }}
        />
    )
}

export default Icon;