import TagIcon from '../Media/Images/TagIcon.png'
import TagCover from '../Media/Images/TAGCover.png'
import THRIcon from '../Media/Images/THRCoverIcon.png'
import movieIcon from '../Media/Images/MovieSelectorIcon.png'
import trialsIcon from '../Media/Images/tinyhero.png'
import starGazerIcon from '../Media/Images/StarGazersIcon.png'


const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris pharetra et. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. In nibh mauris cursus mattis molestie. Cras sed felis eget velit. Pharetra vel turpis nunc eget lorem dolor sed. Pellentesque massa placerat duis ultricies.';

const projectList = [
    {
        title: "TAGNW Bash",
        icon: TagIcon,
        iconAlt: 'computer with tag bash website on it\'s screen',
        tagline: 'Fundraiser Website',
        coverImage: TagCover,
        coverAlt: 'the tagnw bash website',
        description: lorem,
        link: 'https://bash.tagnw.org/',
        backgroundColor: '#F3B72B',
        date: '09/2022 - 01/2023',
        tags: [
            {
                name: 'HTML',
                color: 'DD4B25'
            },
            {
                name: 'Sass',
                color: 'C56494'
            },
            {
                name: 'PHP',
                color: '7478AE'
            },
            {
                name: 'CSS',
                color: '244BDD'
            },
            {
                name: 'JavaScript',
                color: 'D99924'
            }
        ]
    },
    {
        title: "Turner HR Services",
        icon: THRIcon,
        iconAlt: "Turner HR Services website image",
        tagline: "Company Website",
        coverImage: THRIcon,
        coverAlt: "Turner HR Services website image",
        description: lorem,
        link: "https://www.turnerhrservices.com/",
        backgroundColor: "#9E9E9E",
        date: "10/2022 - 02/2023",
        tags: [
            {
                name: 'HTML',
                color: 'DD4B25'
            },
            {
                name: 'Sass',
                color: 'C56494'
            },
            {
                name: 'PHP',
                color: '7478AE'
            },
            {
                name: 'CSS',
                color: '244BDD'
            },
            {
                name: 'JavaScript',
                color: 'D99924'
            }
        ]
    },
    {
        title: "Movie Selector",
        icon: movieIcon,
        iconAlt: "Movie Selector website image",
        tagline: "Film Selector Web App",
        coverImage: movieIcon,
        coverAlt: "Movie Selector website image",
        description: lorem,
        link: "https://turnerr8.github.io/Movie_Selector/",
        backgroundColor: "#1C1C1C",
        date: "10/2021 - 11/2021",
        tags: [
            {
                name: 'HTML',
                color: 'DD4B25'
            },
            {
                name: 'CSS',
                color: '244BDD'
            },
            {
                name: 'JavaScript',
                color: 'D99924'
            }
        ]
    },
    {
        title: "Twelve Trials of Hercules",
        icon: trialsIcon,
        iconAlt: "Tiny Hercules character",
        tagline: "Unity Video Game",
        coverImage: movieIcon,
        coverAlt: "Movie Selector website image",
        description: lorem,
        link: "https://github.com/sammurraytuesta/labors-of-hercules",
        backgroundColor: "#5260E1",
        date: "06/2022 -  09/2022",
        tags: [
            {
                name: 'C#',
                color: '370089'
            },
            {
                name: 'Unity',
                color: '7C7C7C'
            },
        ]
    },
    {
        title: "Sky Gazers",
        icon: starGazerIcon,
        iconAlt: "Sun Tracker App on phone screen",
        tagline: "Sun Tracker Mobile App",
        coverImage: starGazerIcon,
        coverAlt: "Picture of sun",
        description: lorem,
        link: "https://github.com/Thomasnelson2123/SkyGazers",
        backgroundColor: "#CCCCCC",
        date: "09/2022 -  06/2023",
        tags: [
            {
                name: 'Kotlin',
                color: '01930A'
            },
        ],
        specialStyle: {transform: ' rotate(30deg)'},
    }
]

export default projectList;