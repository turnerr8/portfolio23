import ContactButtons from '../../Util/ContactButtons';
import GenButton from '../Buttons/GenButton';
import Message from '../Buttons/Message';
import { motion } from 'framer-motion';

export default function Contact() {
	return (
		<motion.div
			className=' col-span-2 yellow-blue-gradient rounded-3xl p-8 text-left flex-1'
			initial={{ opacity: 0, x: 70, scale: 0.9 }}
			whileInView={{ opacity: 1, x: 0, scale: 1 }}
			transition={{ delay: 0.35, ease: 'easeInOut', bounce: 0 }}
			viewport={{ once: true }}
		>
			<h1 className=' text-3xl lg:text-5xl font-bold text-white dark:text-gray-800 mb-4 lg:mb-10'>
				Want to know more?
			</h1>
			<h3 className=' text-xl lg:text-3xl font-bold text-subheading-white dark:text-gray-800 dark:opacity-80 mb-6 lg:mb-12'>
				Reach out to me here!
			</h3>

			<div className='flex justify-around flex-wrap lg:flex-nowrap'>
				<Message />

				<div className=' inline-flex justify-between w-full lg:w-1/2'>
					{ContactButtons.map((button: any) => {
						return <GenButton key={button.name} {...button}></GenButton>;
					})}
				</div>
			</div>
		</motion.div>
	);
}
