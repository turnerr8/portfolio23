import './Photo.css'
import { motion } from "framer-motion"


export default function Photo(){
    return(
        <motion.div
        className="background-picture rounded-3xl md:flex-1"
        initial={{opacity: 0, x:30, scale: .9}}
            whileInView={{opacity: 1, x: 0, scale: 1}}
            viewport={{once: true}}
            transition={{ease: "easeInOut", bounce: 0}}
        ></motion.div>
    )
}