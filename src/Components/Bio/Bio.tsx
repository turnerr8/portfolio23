import Message from '../Buttons/Message';
import ContactButtons from '../../Util/ContactButtons';
import GenButton from '../Buttons/GenButton';
import { motion } from 'framer-motion';

export default function Bio() {
	return (
		<motion.div
			className='w-full text-left rounded-3xl  bg-gray-800  p-8 blue-yellow-gradient  flex-2'
			initial={{ opacity: 0, x: 30, scale: 0.9 }}
			whileInView={{ opacity: 1, x: 0, scale: 1 }}
			transition={{ delay: 0.25, ease: 'easeInOut', bounce: 0 }}
			viewport={{ once: true }}
		>
			<h1 className=' text-white dark:text-gray-800 font-bold text-4xl lg:text-6xl mb-10'>
				Hey, I'm Ryan
			</h1>
			<h3 className=' text-subheading-white dark:text-gray-800 dark:opacity-80 text-xl lg:text-2xl font-bold my-6'>
				Software Developer from Bellingham Washington
			</h3>
			<p className='text-subheading-white dark:text-gray-800 dark:opacity-80 text-base lg:text-xl font-bold my-4'>
				I graduated with a BS in Computer Science from Western Washington
				University and work on all things technology, including Full-Stack Web
				Development, Software Engineering, and Game Design.
			</p>
			<p className='text-subheading-white dark:text-gray-800 dark:opacity-80 text-base lg:text-xl font-bold mb-4 lg:mb-12'>
				Check out some of my work below and reach out!
			</p>
			<div className='flex flex-wrap lg:flex-nowrap justify-around'>
				<Message />
				<div className='flex justify-around w-full lg:w-1/2'>
					{ContactButtons.map((curBut) => {
						if (
							curBut.name === 'LinkedIn' ||
							curBut.name === 'Resume' ||
							curBut.name === 'Github'
						) {
							return <GenButton key={curBut.name} {...curBut} />;
						}
						return <></>;
					})}
				</div>
			</div>
		</motion.div>
	);
}
