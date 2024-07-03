import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/Text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { userInfo } from '@/data/userInfo'
import { heroContent } from '@/data/hero'

function Hero() {
    return (
        <div className=''>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]' fill='blue' />
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative flex items-center justify-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                <div className='flex justify-center'>
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                            {heroContent.upperSubtitle}
                        </p>
                        <TextGenerateEffect
                            words={heroContent.mainTitle}
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        />
                        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                            Hello from the team of PC
                        </p>
                        <a href='#about'>
                            <MagicButton title="Show my work" position='right' icon={<FaLocationArrow/> } />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero