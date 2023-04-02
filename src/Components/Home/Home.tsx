import Bio from "../Bio/Bio"
import Photo from "../Photo/Photo"
import projectList from "../../Util/Projects"
import Projects from "../../Util/ProjectType"
import ProjectCard from "../ProjectCard/ProjectCard"




export default function Home(){

    return(
        <div className="flex flex-wrap">
            <Bio />
            <Photo />

            {projectList.map( (curProj:Projects) => {
                return <ProjectCard {...curProj} />
            })}

        </div>
    )
};