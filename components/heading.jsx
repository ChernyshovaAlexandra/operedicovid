import React from "react";
import { animated } from '@react-spring/web'


const Heading = ({ scrollYProgress, showPopup, mainBgRaysAnim, blue_bg_block_image, main_bg_gradient }) => {
    return (
        <animated.section className="main fixed top-0 w-full z-30"
            style={{ touchAction: 'none', height: '100vh', zIndex: scrollYProgress.to(s => (s > .1 ? '10' : '100')) }} >

            <animated.div className="w-full rays overflow-hidden relative"
                style={{
                    height: '100vh',
                }}>
                <animated.div className='absolute w-full h-full top-0'
                    style={{
                        opacity: main_bg_gradient.opacity,
                        background: 'linear-gradient(180deg, #0F072C 0%, #092477 100%)'
                    }}> </animated.div>
                <animated.picture className="w-full top-0 h-full object-cover">
                    <source srcSet={require(`/public/images/Rays.png?resize&size=3000&format=avif`)} type="image/webp" />
                    <animated.img
                        style={{
                            transform: mainBgRaysAnim.transform,
                            transition: 'all 0.25s ease-out 0s',
                            opacity: blue_bg_block_image.opacity,
                            filter: 'hue-rotate(-15deg) brightness(0.85)'
                        }}
                        className="w-full top-0 h-full object-cover" src={require(`/public/images/Rays.png?resize&size=2200`)} alt="" loading="lazy" />
                </animated.picture>


                <div className="content px-12 main-text left-0 right-0 h-fit absolute mx-auto w-full">
                    <div className="pb-8 mx-auto">
                        <animated.h1
                            style={{ opacity: mainBgRaysAnim.opacity }}
                            className="title quote text-white text-center">
                            <span className="flex gap-2 justify-center">
                                <animated.span
                                    style={{
                                        transform: scrollYProgress.to(s => s > .01 ? (`translateY(100%)`) : ''),
                                        transition: 'all ease-out .6s'
                                    }}>
                                    Весь
                                </animated.span>
                                <animated.span
                                    style={{
                                        transform: scrollYProgress.to(s => s > .01 ? (`translateY(100%)`) : ''),
                                        transition: 'all ease-out .3s'
                                    }}>
                                    спектр
                                </animated.span>
                                <animated.span
                                    style={{
                                        transform: scrollYProgress.to(s => s > .01 ? (`translateY(100%)`) : ''),
                                        transition: 'all ease-out 0s'
                                    }}>
                                    защиты
                                </animated.span>
                            </span>
                            <span className="flex gap-2 justify-center">
                                <animated.span style={{
                                    transform: scrollYProgress.to(s => s > .01 ? (`translateY(100%)`) : ''),
                                    transition: 'all ease-out .9s'
                                }}>
                                    от Covid-19
                                </animated.span>
                            </span>
                        </animated.h1 >
                        <animated.div
                            style={{ opacity: mainBgRaysAnim.opacity }}
                            className={`mt-12 mx-auto w-fit text-white text-center text-xl`}>
                            <p className="font-bold">Люди с ослабленным иммунитетом могут нуждаться<br /> в дополнительной защите от коронавирусной инфекции.<sup>1</sup></p>
                            <p className="font-normal mt-2">Пройдите опрос, чтобы узнать,<br />находитесь ли вы в группе риска </p>
                            <button className="btn mx-auto block mt-8 " onClick={() => showPopup('opros')}>Пройти опрос**</button>
                        </animated.div>
                    </div>
                </div>


            </animated.div>

        </animated.section>
    )
}

export default Heading;