import React, { useState } from 'react';
//import './App.css';
import Home from '../Home/Home';
import DarkToggle from '../Buttons/DarkToggle';

function App() {
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [useDark, setUseDark] = useState(prefersDark);

	return (
		<div className={useDark ? 'App dark' : 'App'}>
			<DarkToggle setUseDark={setUseDark} useDark={useDark} />
			<Home />
		</div>
	);
}

export default App;
