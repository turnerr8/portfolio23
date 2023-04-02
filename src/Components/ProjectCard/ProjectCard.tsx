import Projects from "../../Util/ProjectType"
import Expand from "../Expand/Expand"
export default function ProjectCard(props: Projects){
    return(
        <div className="m-5 rounded-xl" style={{backgroundColor: props.backgroundColor}}>
            <div className="flex flex-row ">
                <div className="flex flex-column">
                    <h1>{props.title}</h1>
                    <h3>{props.tagline}</h3>
                </div>
                <Expand />
            </div>
            
            
            <img src={props.icon} alt={props.coverAlt} width={700}/>
        </div>
    )
}