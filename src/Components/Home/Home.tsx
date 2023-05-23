import Bio from '../Bio/Bio';
import Photo from '../Photo/Photo';
import projectList from '../../Util/Projects';
import Projects from '../../Util/ProjectType';
import ProjectCard from '../ProjectCard/ProjectCard';
import Contact from '../Contact/Contact';
import './Home.css';

export default function Home() {
	return (
		<div className=' bg-white dark:bg-gray-800 p-6 lg:py-12 lg:px-36 md:p-12'>
			<div className='flex flex-wrap md:flex-nowrap gap-6 lg:gap-10 justify-center mb-6 lg:mb-10'>
				<Bio />
				<Photo />
			</div>
			<div className='grid md:grid-cols-2 gap-6 lg:gap-10'>
				{projectList.map((curProj: Projects) => {
					return <ProjectCard key={curProj.title} {...curProj} />;
				})}

				<Contact />
			</div>
		</div>
	);
}
