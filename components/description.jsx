import React from "react";
import { animated } from '@react-spring/web'
import Icon from "./icon";
import { coordinates } from '../constants/coordinates'




const Description = ({ scrollYProgress, pink }) => {
    return (
        <animated.section className="bg-lavender grid items-center w-full">
            <div className="w-full" style={{ height: '100vh', background: 'linear-gradient(180deg, #0F072C 0%, #092477 100%)' }}>
                <div className="triangle-1"></div>
                <animated.div className="triangle-2" style={{ right: scrollYProgress.to(s => (`${100 - s * 700}%`)) }} />
                <div className="round-1"></div>
            </div>
            <animated.div
                style={{
                    display: scrollYProgress.to(s => (s > coordinates.block3.coordinates[0] && s < coordinates.block4.coordinates[1] ? 'block' : 'none'))
                }}
                className="absolute w-42p contentmin-[1000px]:text-xl min-[1400px]:text-2xl top-0 bottom-0 my-auto h-fit text-white h2 words" >
                <animated.span className="type py-4 relative left-12 type-style"
                    style={{
                        // backgroundPosition: scrollYProgress.to(s => (s > coordinates.block3.coordinates[0] ? `${s * 2900}vh 0` : '0 0')),
                        transition: 'all .15s linear'
                    }}>
                    Вакцинация является важной опцией
                    профилактики коронавирусной инфекции,
                    однако не всегда она обеспечивает
                    необходимую защиту<small style={{ display: 'inline' }}>2</small>. Люди со сниженным
                    иммунитетом <span className="text-pink">могут нуждаться в дополнительной защите</span> от COVID-19<small className="text-pink" style={pink}>3-5</small>
                </animated.span>
            </animated.div>
            <animated.a onClick={() => window.scrollTo(0, 2 * window.innerHeight)}
                style={{ display: scrollYProgress.to(s => (s > coordinates.block3.coordinates[0] && s < coordinates.block4.coordinates[1] ? 'flex' : 'none')), zIndex: 800 }}
                className="flex gap-4 items-center bottom-28 left-12 absolute">
                <Icon id={0} img={`<svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.81127 11.5946L15.9464 29L31.0815 11.5946" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 15L15.0583 26.3631C15.3743 27.248 16.6257 27.248 16.9417 26.3631L21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15.9463 29L15.9463 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                <p className="text-white font-bold text-lg">Смотри спектр защиты от COVID-19</p>
            </animated.a>


        </animated.section>
    )
}

export default Description;