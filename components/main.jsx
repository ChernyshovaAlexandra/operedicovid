import React from "react";
import { animated } from '@react-spring/web'

import { ParallaxProvider } from "react-scroll-parallax";
import AboutVacination from "./about-vacination";
import { coordinates } from '../constants/coordinates';
import ImageBlock from "./image-block";
import Heading from "./heading";



const Main = ({ showPopup,
    spectrZashityAll,
    raysSpectrTwoBlue,
    scrollYProgress,
    main_photo_to_right,
    mainBgRaysAnim,
    blue_bg_block_image,
    blue_bg_block,
    main_bg_gradient,
    raysSpectrOneBlue,
    raysSpectrTwoWhite }) => {

    return (
        <>
            <ParallaxProvider>
                <AboutVacination
                    blue_bg_block={blue_bg_block}
                    blue_bg_block_image={blue_bg_block_image}
                    scrollYProgress={scrollYProgress}
                    main_photo_to_right={main_photo_to_right}
                />
                <Heading
                    main_bg_gradient={main_bg_gradient}
                    blue_bg_block_image={blue_bg_block_image}
                    scrollYProgress={scrollYProgress}
                    showPopup={showPopup}
                    mainBgRaysAnim={mainBgRaysAnim}
                />
                <animated.section className="w-full fixed top-0" id='spectr'
                    style={{
                        zIndex: scrollYProgress.to(s => s >= coordinates.block4.coordinates[0] && s <= coordinates.block6.coordinates[1] ? '40' : '0')
                    }}
                >
                    <ImageBlock showPopup={showPopup}
                        spectrZashityAll={spectrZashityAll}
                        raysSpectrTwoBlue={raysSpectrTwoBlue}
                        raysSpectrOneBlue={raysSpectrOneBlue}
                        raysSpectrTwoWhite={raysSpectrTwoWhite}
                        scrollYProgress={scrollYProgress}
                    />
                </animated.section>

            </ParallaxProvider >

        </>

    )
}

export default Main;