import { motion } from "framer-motion";

type Tag ={
    name: string,
    color: string
}

const backdrop = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
}

const modal = {
    visible: {opacity: 1, y: 0,},
    hidden: {opacity: 0, y: 300 },
}



export default function FullProject(props: any){
    return(
        <motion.div
            initial= "hidden"
            animate="visible"
            exit="hidden"
            variants={backdrop}
            id="filter"
            className=" z-40 fixed top-0 left-0 w-screen h-screen bg-filter flex flex-col-reverse items-center"
            onClick={props.closeFunction}>
            
            <motion.div
                initial = "hidden"
                animate="visible"
                exit="hidden"
                transition={{ease: "easeInOut", bounce: 0}}
                variants={modal}
                className=" w-full md:w-11/12 bg-white dark:bg-gray-800 rounded-3xl relative flex flex-col overflow-hidden text-left"
                style={{borderRadius: '1.5em 1.5em 0 0', height: '95vh'}}>

                <div onClick={props.closeFunction} className=" close rounded-full w-10 h-10 md:w-14 md:h-14 p-1 absolute bg-glassy-white top-3 right-3 md:top-7 md:right-7 flex items-center justify-items-center cursor-pointer hover:bg-glassy-white-selected" style={{transform: 'translateX(0px)'}}>
                    <svg onClick={props.closeFunction} className="close"  clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                </div>

                <div className=" bg-center bg-cover bg-no-repeat h-80 " style={{backgroundImage: `url(${props.coverImage})`}}></div>
                <div className=" container p-6 m-3 flex flex-col justify-around w-full">
                    <h1 className=" text-3xl md:text-5xl font-bold mb-4 dark:text-gray-50 ">{props.title}</h1>
                    <h5 className=" text-sm md:text-lg font-bold mb-3 md:mb-6 text-subheading-black dark:text-gray-50">{props.date}</h5>
                    <p className=" md:text-xl my-8 dark:text-gray-50">{props.description}</p>
                    <div className="flex justify-between md:px-8 items-center">
                        <div className="flex flex-row items-center flex-wrap">
                            {props.tags.map((curtag:Tag) => {
                                return <span className=" inline-block rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-white m-1 md:mx-2 w-fit hover:opacity-80" style={{backgroundColor: `#${curtag.color}CC`}}> # {curtag.name}</span>
                            })}
                        </div>
                        <motion.a
                            href={props.link}
                            target="_blank"
                            className=" text-sm md:text-base inline-flex items-center bg-transparent rounded-full hover:bg-grey-800 text-black dark:hover:bg-white dark:text-white dark:hover:text-gray-800 dark:border-white font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent">
                           <span className="mr-1"> Visit</span>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>


                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}