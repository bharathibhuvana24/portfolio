import HeroImg from '../assets/hero.png'

import { AiOutlineTwitter,AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {

    const config = {
        name : 'Bagya Lakshmi',
        image : HeroImg,
        subtitle: ' Im a Full-stack developer'
    }

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' id='hero'>
            <div className='md:w-1/2 flex-col'>
                <h1 className=' text-white text-6xl font-hero-font'>Hi, <br /> I am  <span className='text-black'>{config.name}</span>
                    <p className=' mt-2 text-2xl'>{config.subtitle}</p>
                </h1>
                <div className='flex py-10 '>
                    <a href='#' className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                    <a href='#' className='pr-5  hover:text-white'><AiOutlineFacebook  size={40}/></a>
                    <a href='#' className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
                </div>
            </div>
            <img className="md:w-1/3" src={config.image} />
        </section>
    )
}

export default Hero