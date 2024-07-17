import AboutImg from '../assets/about.png'

const About = () => {

  const config ={
    ProfileImg : AboutImg,
    description1 : 'Hi, I am Bagya lakshmi. I am a Full-stack developer on MERN. I always love to work as a full-stack developer and excited for a new challenges.',
    description2 :  'I am proficient in frontend skills like React.js, HTML, css, Bootstrap, Redux Tool kit, Axios, Formik, Tailwind css and many more.',
    description3 : 'In Backend i know Node.js, Express.js, MongoDB and Mongoose.'
  }

  return (
    <section className='flex flex-col md:flex-row px-5 justify-between bg-secondary' id='about'>
      <div className="md:w-1/2 py-5">
        <img src={config.ProfileImg} />
      </div>
      <div className='md:w-1/2  flex justify-center'>
        <div className='flex flex-col justify-center text-white text-xl'>
        <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px]'>About Me:</h1>
        <p >
              {config.description1}
         </p>
        
         <p className=' mt-5'>
              {config.description2}
         </p>
         
         <p className='mt-5 mb-5'>
               {config.description3}
         </p>
        </div>
        </div>
    </section>
  )
}

export default About