import websiteImg1 from '../assets/portfolio1.jpg'
import websiteImg2 from '../assets/react-router-dom.jpg'
import websiteImg3 from '../assets/camera-on-rent.jpg'
import websiteImg4 from '../assets/Bds.png'
import websiteImg5 from '../assets/csscalc.png'

const Projects = () => {
    const config = {
        projects:[
            {
                description: 'Camera Rental using MERN stack',
                image: websiteImg3,
                link: 'https://clientrentcapture.netlify.app/',
            },
        {
            description: 'A personal portfolio has been built with React.js + Tailwind css',
            image: websiteImg1 ,
            link: 'https://portfolioreactcss.netlify.app/',
        },
        {
            description: 'A simple project to understand about the react-router-dom and Context',
            image: websiteImg2,
            link: 'https://usecontextcartapi.netlify.app/',
        },
        {
            description: 'A Project only created with html css and bootstrap',
            image: websiteImg4,
            link: 'https://bharathidrivschool.netlify.app/',
        },
        {
            description: 'A Project only created with html and css with simple dom',
            image: websiteImg5,
            link: 'https://csscalc.netlify.app/',
        }
        
    ]
}
    return (
        <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
            <div className="w-full px-10">
                <div className="flex flex-col mb-5">
                    <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[130px]'>
                        Projects
                    </h1>
                    <p>
                        These are some of my best projects. I have built these with React.js, MERN and Tailwind css.
                    </p>

                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row  px-10 gap-5'>
                    {config.projects.map((project) => 
                    (
                    
                    <div className='relative'>
                        <img className='md:h-[200px] w-[500px] h-[250px]' src={project.image} />
                        <div className ='project-desc'>
                            <p className='text-center px-5 py-5'>
                               {project.description}
                            </p>
                        <div className='flex items-center'>
                            <a target='_blank' className='btn ml-20' href={project.link}>View project</a>
                        </div>
                        </div>
                    </div>
                    
                    ))}
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Projects