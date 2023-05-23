import arrow from '../../Media/Images/arrow-upper-right.png';

interface funcProps {
	handleExpand: () => void;
}

export default function Expand({ handleExpand }: funcProps) {
	return (
		<div
			onClick={handleExpand}
			className=' rounded-full bg-glassy-white w-14 h-14 p-4 flex items-center justify-items-center cursor-pointer hover:bg-glassy-white-selected
         m-3  right-5 top-5 '
		>
			<img src={arrow} alt='arrow' className='w-full h-full' />
		</div>
	);
}
