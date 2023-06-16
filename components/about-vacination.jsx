import React from "react";
import { animated } from '@react-spring/web'
import { coordinates } from '../constants/coordinates'
import Description from './description'

const AboutVacination = ({ blue_bg_block, blue_bg_block_image, scrollYProgress, main_photo_to_right }) => {
    return (
        <animated.section className="w-full fixed top-0 select-none"
            style={{
                zIndex: scrollYProgress.to(s => (s > coordinates.block2.coordinates[0] && s < coordinates.block3.coordinates[1] ? '200' : '1')),
                height: '200vh'
            }}>

            <animated.div className="absolute top-0 w-full"
                style={{
                    opacity: scrollYProgress.to(s => (s > coordinates.block2.coordinates[0] + .01 && s < coordinates.block5.coordinates[0] ? '1' : '0')),
                    height: '100vh',
                    transform: blue_bg_block.transform,
                }}
            >
                <Description
                    scrollYProgress={scrollYProgress}
                    blue_bg_block={blue_bg_block}
                />
            </animated.div>

            <animated.div className="absolute right-24"
                style={{
                    top: '100vh',
                    transform: scrollYProgress.to(s => (`translateY(-${s * 5700}px)`)),
                    opacity: blue_bg_block.opacity,
                    transition: 'all .2s ease-out'
                }}>
                <picture className="w-80">
                    <source srcSet={require(`/public/images/vacine.png?resize&size=288&format=webp`)} type="image/webp" />
                    <img className='w-80' src={require(`/public/images/vacine.png?resize&size=144`)} alt="" loading="lazy" />
                </picture>
            </animated.div>
            <animated.div className="absolute right-16"
                style={{ top: '110vh', transition: 'all .13s ease-out', transform: scrollYProgress.to(s => (`translateY(-${s * 5000}px)`)), opacity: blue_bg_block.opacity }}>
                <picture className="w-80 rotate-45 right-32 relative">
                    <source srcSet={require(`/public/images/vacine.png?resize&size=288&format=webp`)} type="image/webp" />
                    <img className='w-80 rotate-45 right-32 relative' src={require(`/public/images/vacine.png?resize&size=144`)} alt="" loading="lazy" />
                </picture>
            </animated.div>
            <animated.div className="absolute top-0 w-full "
                style={{ transform: scrollYProgress.to(s => (850 * s - 21 > 0 ? `translateX(${850 * s - 21}%)` : `translateX(0)`)), }}>
                <animated.div className="overflow-hidden fixed top-0 bg-neonBlue w-full h-100vh"
                    style={{
                        clipPath: blue_bg_block_image.clipPath,

                    }}>
                    <animated.picture className="select-none w-full object-cover h-100vh">
                        <source srcSet={require(`/public/images/secBG.jpg?resize&size=1721&format=avif`)} type="image/webp" />
                        <img className='select-none w-full object-cover h-100vh' src={require(`/public/images/secBG.jpg?resize&size=860`)} alt="" loading="lazy" />
                    </animated.picture>
                </animated.div>
            </animated.div>
        </animated.section>
    )
}


export default AboutVacination