import { motion } from "framer-motion"

export default function GenButton(props: any){

    return(
        <motion.a
            href={props.link}
            target="_blank"
            className="rounded-full bg-white p-2 m-2 mix-blend-screen flex items-center justify-center"
            title={props.name}
            whileHover={{
                scale: 1.2
                
            }}
            transition={{
                type: 'spring',
                bounce: 0.65
            }}
            
            >
            <img src={props.icon} alt={`${props.icon} logo`} className=" w-6 h-6 lg:w-8 lg:h-8" />
        </motion.a>
    )
};