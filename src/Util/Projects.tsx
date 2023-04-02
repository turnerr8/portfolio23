import TagIcon from '../Media/Images/TagIcon.png'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas ultricies mi eget mauris pharetra et. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. In nibh mauris cursus mattis molestie. Cras sed felis eget velit. Pharetra vel turpis nunc eget lorem dolor sed. Pellentesque massa placerat duis ultricies.';

const projectList = [
    {
        title: "TAGNW Bash",
        icon: TagIcon,
        iconAlt: 'computer with tag bash website on it\'s screen',
        tagline: 'Fundraiser Website',
        coverImage: 'src/Media/Images/TAGCover.png',
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
    }
]

export default projectList;