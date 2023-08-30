import project1 from '../../assets/image/project_01.jpg'
import project2 from '../../assets/image/project_02.jpg'

// INFO { image, projectName, description, time, textMarqueeArr, isMarqueeForward }

export const projectCardArr = [
    {
        image: project1,
        projectName: 'Anc',
        description: 'E-commerce / Responsible',
        time: 'mar-may 2023',
        textMarqueeArr: ['E-commerce', 'Responsive'],
        isMarqueeForward: false,
    },
    {
        image: project2,
        projectName: 'Continum',
        description: 'Business Website / Responsible',
        time: 'jan-mar 2023',
        textMarqueeArr: ['Business', 'Responsive'],
        isMarqueeForward: true,
    },
]