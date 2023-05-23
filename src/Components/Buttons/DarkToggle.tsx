import React from 'react';

interface childProps {
	setUseDark: React.Dispatch<React.SetStateAction<boolean>>;
	useDark: boolean;
}
export default function DarkToggle({ setUseDark, useDark }: childProps) {
	function toggleDark() {
		setUseDark(!useDark);
	}
	return (
		<div className='dark-toggle dark:bg-gray-800 pt-5 px-5 flex justify-end'>
			<label className='relative inline-flex items-center cursor-pointer'>
				<input
					type='checkbox'
					className='sr-only peer'
					id='dark-toggle'
					checked={useDark}
					onChange={toggleDark}
				/>
				<div
					className={`w-14 h-7 bg-blue-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] ${
						useDark ? 'after:bg-yellow-100' : 'after:bg-yellow-300'
					}  after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900`}
				></div>
				<span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
					{useDark ? 'Dark' : 'Light'}
				</span>
			</label>
		</div>
	);
}
