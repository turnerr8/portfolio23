import TagIcon from '../Media/Images/TagIcon.png';
import TagCover from '../Media/Images/TAGCover.png';
import THRIcon from '../Media/Images/THRCoverIcon.png';
import movieIcon from '../Media/Images/MovieSelectorIcon.png';
import movieCover from '../Media/Images/MovieSelectorCover.png';
import trialsIcon from '../Media/Images/tinyhero.png';
import trialsCover from '../Media/Images/trialsCover.png';
import starGazerIcon from '../Media/Images/StarGazersIcon.png';
import starGazerCover from '../Media/Images/skyGazerCover.jpg';
import watCover from '../Media/Images/watCover.png';
import watIcon from '../Media/Images/watIcon.png';

const projectList = [
	{
		title: 'With a Twist Mobile Bar',
		icon: watIcon,
		iconAlt: 'desktop monitor with With a Twist website loaded',
		tagline: 'Mobile bar Website',
		coverImage: watCover,
		coverAlt: 'With a Twist Mobile Bar homepage',
		description:
			'Created online presence for small business including website, email, Google Business, and SEO using React and Tailwind. Hosting, database, and image storage are done through Firebase Hosting and Firestore. Designed using Figma.',
		link: 'https://withatwistmobilebar.com/',
		backgroundColor: '#C89770',
		date: '08/2023 - 11/2023',
		tags: [
			{
				name: 'HTML',
				color: 'DD4B25',
			},
			{
				name: 'CSS',
				color: '244BDD',
			},
			{
				name: 'JavaScript',
				color: 'D99924',
			},
			{
				name: 'React',
				color: '5ED3F3',
			},
			{
				name: 'Tailwind',
				color: '38BDF8',
			},
			{
				name: 'Firebase',
				color: 'FFCC2F',
			},
			{
				name: 'NoSQL',
				color: '02EF64',
			},
			{
				name: 'Figma',
				color: '9D56F7',
			},
		],
		specialStyle: {
			margin: 'auto -8em 0em auto',
			width: '120%',
		},
	},
	{
		title: 'TAGNW Bash',
		icon: TagIcon,
		iconAlt: "computer with tag bash website on it's screen",
		tagline: 'Fundraiser Website',
		coverImage: TagCover,
		coverAlt: 'the tagnw bash website',
		description:
			'Using frameworks and languages such as React.js, Bootstrap, PHP, HTML, CSS, and SQL, I was able to work with a fellow design intern and my mentor to add functionality and additional styling to the website for the TAGNW BASH event.  I was able to add contact forms with working honeypots to prevent spam and bot emails as well as adding more accessible and simplified functionality.',
		link: 'https://bash.tagnw.org/',
		backgroundColor: '#F3B72B',
		date: '09/2022 - 01/2023',
		tags: [
			{
				name: 'HTML',
				color: 'DD4B25',
			},
			{
				name: 'Sass',
				color: 'C56494',
			},
			{
				name: 'PHP',
				color: '7478AE',
			},
			{
				name: 'CSS',
				color: '244BDD',
			},
			{
				name: 'JavaScript',
				color: 'D99924',
			},
		],
		specialStyle: { width: '70%', justifySelf: 'center', margin: '10px auto' },
	},
	{
		title: 'Turner HR Services',
		icon: THRIcon,
		iconAlt: 'Turner HR Services website image',
		tagline: 'Company Website',
		coverImage: THRIcon,
		coverAlt: 'Turner HR Services website image',
		description:
			'Redesigned client website using current design standards, languages and frameworks, and had weekly check-ins with client to discuss functionality and design. I used web development languages such as PHP, HTML, CSS, and JavaScript as well as SCSS preprocessors and JavaScript Frameworks to create a dynamic, reactive, and accessible web portfolio.',
		link: 'https://www.turnerhrservices.com/',
		backgroundColor: '#9E9E9E',
		date: '10/2022 - 02/2023',
		tags: [
			{
				name: 'HTML',
				color: 'DD4B25',
			},
			{
				name: 'Sass',
				color: 'C56494',
			},
			{
				name: 'PHP',
				color: '7478AE',
			},
			{
				name: 'CSS',
				color: '244BDD',
			},
			{
				name: 'JavaScript',
				color: 'D99924',
			},
		],
		specialStyle: {
			width: '85%',
			marginBottom: '2em',
			marginRight: '0',
			marginLeft: 'auto',
			marginTop: 'auto',
		},
	},
	{
		title: 'Movie Selector',
		icon: movieIcon,
		iconAlt: 'Movie Selector website image',
		tagline: 'Film Selector Web App',
		coverImage: movieCover,
		coverAlt: 'Movie Selector website image',
		description:
			"'Movie Selector' was created as a final project for my Dynamic Web Pages course; it was used as a way for me to experiment with API's, single-page applications as well as a tool for myself to use when trying to decide which movie to watch.  It uses an open source, community built API from TMDB to access film informations such as genre, streaming platform, and year. It uses vanilla JavaScript and CSS for transitions and functionality.",
		link: 'https://turnerr8.github.io/Movie_Selector/',
		backgroundColor: '#1C1C1C',
		date: '10/2021 - 11/2021',
		tags: [
			{
				name: 'HTML',
				color: 'DD4B25',
			},
			{
				name: 'CSS',
				color: '244BDD',
			},
			{
				name: 'JavaScript',
				color: 'D99924',
			},
		],
		specialStyle: { width: '55%', margin: '0px auto' },
	},
	{
		title: 'Twelve Trials of Hercules',
		icon: trialsIcon,
		iconAlt: 'Tiny Hercules character',
		tagline: 'Unity Video Game',
		coverImage: trialsCover,
		coverAlt: 'Movie Selector website image',
		description:
			'The Twelve Trials of Hercules is a Unity-based 3D video game demo created with the help of two classmates for our final project of Game Design. All assets were free Unity Store assets or modeled and textured by the group. All interactions were scripted by our group and used to show understanding of Game Theory, AI, Multiple-Scene 3D Games, and Environment/Player/AI Interactions. ',
		link: 'https://github.com/sammurraytuesta/labors-of-hercules',
		backgroundColor: '#5260E1',
		date: '06/2022 -  09/2022',
		tags: [
			{
				name: 'C#',
				color: '370089',
			},
			{
				name: 'Unity',
				color: '7C7C7C',
			},
		],
		specialStyle: {
			width: '65%',
			marginRight: '2px',
			marginLeft: 'auto',
			marginTop: '-3rem',
			transform: 'scaleX(-1)',
		},
	},
	{
		title: 'Sky Gazers',
		icon: starGazerIcon,
		iconAlt: 'Sun Tracker App on phone screen',
		tagline: 'Sun Tracker Mobile App',
		coverImage: starGazerCover,
		coverAlt: 'Picture of sun',
		description:
			"Senior Capstone Augmented Reality mobile app used to track the Sun's current and future path through the sky. Designed for the Android platform using Android Studio and the Kotlin programming language. This app uses the devices gps location as well as gyroscope and accelerometer sensors to determine phones location and position in 3D space. We used an open source api that, when given information, would return Sun's relative position to user. Using this information, we were able to draw an image of the Sun and it's path on the selected date onto the phones camera.",
		link: 'https://github.com/Thomasnelson2123/SkyGazers',
		backgroundColor: '#CCCCCC',
		date: '09/2022 -  06/2023',
		tags: [
			{
				name: 'Kotlin',
				color: '01930A',
			},
		],
		specialStyle: {
			width: '40%',
			margin: '-1rem auto auto auto',
			transform: 'rotate(20deg)',
		},
	},
];

export default projectList;
