import { motion,useTransform } from 'framer-motion'
import NavLinks from './NavLinks';

const Landing = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]); 
    const rotate = useTransform(scrollYProgress, [0,1] , [0,5]) 
  return (
    <motion.div style={{scale,rotate}} className='bg-[#0A014F] h-screen w-full relative flex flex-col items-center justify-center font-[Neue]'>
        <NavLinks/>
        <h1 className='uppercase text-white font-[Humane] text-[18vw] leading-[60vh]'>Empower Your Future with AI</h1>
        <div className='text-[#ebf1f8] w-[40vw] text-center uppercase leading-[5vh] flex flex-col text-[1.3vw]'>
            <div className='leading-[1.1]'>
                <p>"Join a community of <span className='font-[Bondoi] lowercase text-[2.3vw] text-[#fb5607]'> innovators, learners</span> and future leaders in artificial intelligence.”</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Landing