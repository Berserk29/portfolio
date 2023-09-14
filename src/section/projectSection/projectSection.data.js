import project1 from '../../assets/image/project_01.jpg'
import project2 from '../../assets/image/project_02.jpg'

// INFO { image, projectName, description, time, textMarqueeArr, isMarqueeForward, link }

export const projectCardArr = [
    {
        image: project1,
        projectName: 'Anc',
        description: 'E-commerce / React',
        time: 'Apr-Jun 2023',
        textMarqueeArr: ['E-commerce', 'Responsive'],
        isMarqueeForward: false,
        link: 'https://anc-project.netlify.app/',
    },
    {
        image: project2,
        projectName: 'Continum',
        description: 'Business Website / React',
        time: 'Feb-Apr 2023',
        textMarqueeArr: ['Business', 'Responsive'],
        isMarqueeForward: true,
        link: 'https://continum.netlify.app/',
    },
]