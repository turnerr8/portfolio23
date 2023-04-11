import { motion } from "framer-motion"

export default function Message(){
 return(
    <motion.a
      href="mailto:ryan@rturner.dev?subject=Let's Talk About..."
      className=" text-sm lg:text-lg w-full lg:w-5/12 text-center font-bold rounded-full py-2 px-3 m-2 bg-white flex items-center justify-center mix-blend-screen "
      whileHover={{
                scale: 1.1
                
            }}
            transition={{
                type: 'spring',
                bounce: 0.65
            }}
    >
      Message Me!</motion.a>
 )
};