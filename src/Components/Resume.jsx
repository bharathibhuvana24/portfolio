import ResumeImg from '../assets/resume.jpg'

const Resume = () => {
  return (    
    <section className='flex flex-col md:flex-row px-5 justify-between bg-secondary' id='resume'>
      <div className="md:w-1/2 py-10 flex justify-center">
        <img className='w-[300px] ' src={ResumeImg} />
      </div>
      <div className='md:w-1/2  flex justify-center'>
        <div className='flex flex-col justify-center text-white text-xl'>
        <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[140px]'>Resume:</h1>
        <p className='mb-5'>
              You can view my resume by clicking on the link below.
              <button className='btn ml-32 mt-4'><a href='#'>Download</a></button>
         </p>
        </div>
        </div>
    </section>
  )
}

export default Resume