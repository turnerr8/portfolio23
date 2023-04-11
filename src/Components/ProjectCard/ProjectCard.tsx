import Projects from "../../Util/ProjectType"
import Expand from "../Expand/Expand"
import { useState } from "react"
import FullProject from "../FullProject/FullProject";
import {motion, AnimatePresence } from "framer-motion";

export default function ProjectCard(props: Projects){

    const [expanded, setExpanded] = useState(false);
    function handleExpand(){
        console.log(`expanding card ${props.title}`);
        setExpanded(true);
    };
    function handleClose( e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.id === 'filter' || e.target.classList.contains('close')){
            console.log(`closing ${props.title}`);
            setExpanded(false);
        }
    }

    return(
        
        <div className=" block rounded-3xl overflow-hidden md:max-h-[345px]  col-span-2 md:col-span-1 lg:max-h-[446px] max-h-[335px]" style={{backgroundColor: props.backgroundColor}}>
            <div className="flex flex-row ">
                <div className="flex flex-col w-11/12 text-left p-7">
                    <h1 className=" text-white font-bold text-3xl lg:text-5xl mb-5">{props.title}</h1>
                    <h3 className=" text-subheading-white font-bold text-xl lg:text-3xl">{props.tagline}</h3>
                </div>
                <Expand handleExpand={handleExpand} />
            </div>
            <AnimatePresence
                initial={false}
                mode='wait'
                onExitComplete={() => null}
            > 
            {expanded && 
                <FullProject {...props} closeFunction={handleClose}/>
            }
            </AnimatePresence>
            
            
            <img className=" -mt-6" style={props.specialStyle} src={props.icon} alt={props.coverAlt} />
        </div>
    )
}