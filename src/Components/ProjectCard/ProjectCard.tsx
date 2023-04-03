import Projects from "../../Util/ProjectType"
import Expand from "../Expand/Expand"
import { useState } from "react"
import FullProject from "../FullProject/FullProject";

export default function ProjectCard(props: Projects){

    const [expanded, setExpanded] = useState(false);
    function handleExpand(){
        console.log(`expanding card ${props.title}`);
        setExpanded(true);
    };
    function handleClose( e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.id === 'filter'){
            console.log(`closing ${props.title}`);
            setExpanded(false);
        }
    }

    return(
        
        <div className="m-5 rounded-3xl w-5/12 overflow-hidden max-h-96" style={{backgroundColor: props.backgroundColor}}>
            <div className="flex flex-row ">
                <div className="flex flex-col w-11/12 text-left p-7">
                    <h1 className=" text-white font-bold text-6xl mb-5">{props.title}</h1>
                    <h3 className=" text-subheading-white font-bold text-3xl">{props.tagline}</h3>
                </div>
                <Expand handleExpand={handleExpand} />
            </div>
            {expanded && 
                <FullProject {...props} closeFunction={handleClose}/>
            }
            
            
            <img className=" -mt-6" src={props.icon} alt={props.coverAlt} width={700}/>
        </div>
    )
}