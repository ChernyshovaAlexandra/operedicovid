import React, { useEffect, useRef, useState } from "react";
import Nav from "./nav";
import { useScroll, useSpring } from '@react-spring/web'
import Main from "./main.jsx";
import { coordinates } from '../constants/coordinates';
import BigVideo from "./big-video";
import PeopleStories from "./people-stories";
import VideoCorona from "./video-coronavirus";
import FAQ from "./faq";
import Block11 from "./Block11";
import Block12 from "./Block12";
import Block13 from "./Block13";
import Modal from "./Modal";
import Popup from "./Popup";




const FullPage = () => {
    const containerRef = useRef(null);

    // const [mobile, setMobile] = useState(window.innerWidth <= 1000)
    const [modal, showModal] = useState(false);
    const [video, videoVisible] = useState(true);
    const [fullScreen, openVideoFull] = useState(false)
    const [popup, showPopup] = useState(false);
    const [main_photo_to_right, move_main_photo] = useSpring(() => ({ transform: 'translateX(0%)', display: 'block', opacity: 1 }));
    const [blue_bg_block, blueBgBlockApi] = useSpring(() => ({ transform: 'translateX(-35%)', }));
    const [blue_bg_block_image, blueBgBlockImageApi] = useSpring(() => ({ opacity: 0, clipPath: 'polygon(0% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 0% 100%)', transform: 'translateX(0%)' }))
    const [main_bg_gradient, set_main_bg_gradient] = useSpring(() => ({ opacity: 1 }));
    const [mainBgRaysAnim, mainBgRaysApi] = useSpring(() => ({ transform: 'scale(3)', opacity: 1 }));


    const [raysSpectrOneBlue, set_raysSpectrOneBlue] = useSpring(() => ({ opacity: 0, display: 'flex' }))
    const [raysSpectrTwoWhite, set_raysSpectrTwoWhite] = useSpring(() => ({ opacity: 0, color: 'white', display: 'none' }))
    const [raysSpectrTwoBlue, set_raysSpectrTwoBlue] = useSpring(() => ({ display: 'none' }));
    const [spectrZashityAll, spectrZashityAll_set] = useSpring(() => ({ opacity: 0 }))

    const { scrollYProgress } = useScroll({
        constiner: containerRef,
        onChange: ({ value: { scrollYProgress } }) => {
            if (window.innerWidth > 740) {
                set_main_bg_gradient.start({
                    opacity: scrollYProgress > coordinates.block1.coordinates[0] + .004 ? 0 : 1
                })
                mainBgRaysApi.start({
                    opacity: scrollYProgress >= coordinates.block1.coordinates[0] + .01 ? 0 : 1,
                    transform: scrollYProgress < coordinates.block2.coordinates[0] - .005 ? 'scale(1.35)' : 'scale(3)'
                });

                blueBgBlockImageApi.start({
                    opacity: scrollYProgress >= coordinates.block2.coordinates[0] ? 0 : 1,
                    transform: scrollYProgress > coordinates.block2.coordinates[1] + .005 ? 'translateX(100%)' :
                        scrollYProgress > coordinates.block2.coordinates[1] && scrollYProgress < coordinates.block2.coordinates[1] + .005 ? 'translateX(40%)' : 'translateX(0%)',
                    clipPath: scrollYProgress > coordinates.block2.coordinates[1] ?
                        'polygon(32% 0px, 100% 0px, 100% 50%, 100% 100%, 32% 100%, 13% 50%)' :
                        'polygon(0% 0px, 100% 0px, 100% 50%, 100% 100%, 40% 100%, 0% 100%)'
                });


                move_main_photo.start({
                    display: scrollYProgress > coordinates.block3.coordinates[0] && scrollYProgress < coordinates.block4.coordinates[0] ? 'none' : 'block'
                })
                blueBgBlockApi.start({
                    transform: scrollYProgress >= coordinates.block2.coordinates[0] ? 'translate(0)' : 'translateX(-35%)',
                    opacity: scrollYProgress > coordinates.block2.coordinates[0] ? 1 : 0
                })
                spectrZashityAll_set.start({
                    opacity: scrollYProgress > coordinates.block4.coordinates[0] && scrollYProgress < coordinates.block6.coordinates[1] ? 1 : 0
                });

                set_raysSpectrOneBlue.start({
                    opacity: scrollYProgress > coordinates.block4.coordinates[0] && scrollYProgress < coordinates.block5.coordinates[0] ? 1 : 0,
                    display: scrollYProgress > coordinates.block4.coordinates[0] && scrollYProgress < coordinates.block5.coordinates[0] ? 'flex' : 'none'
                })

                set_raysSpectrTwoWhite.start({
                    opacity: scrollYProgress > coordinates.block5.coordinates[0] && scrollYProgress < coordinates.block6.coordinates[0] ? 1 : 0,
                    color: scrollYProgress > coordinates.block5.coordinates[0] && scrollYProgress < coordinates.block6.coordinates[0] ? '#092477' : '#fff',
                    display: scrollYProgress > coordinates.block5.coordinates[0] && scrollYProgress < coordinates.block6.coordinates[0] ? 'flex' : 'none'
                })
                set_raysSpectrTwoBlue.start({
                    display: scrollYProgress > coordinates.block6.coordinates[0] && scrollYProgress < coordinates.block6.coordinates[1] ? 'flex' : 'none'
                })
            }

        },
        default: {
            immediate: true,
        },
    });
    return (
        <>
            <div ref={containerRef} >
                <div className="relative content blue-bg-grad">
                    <Nav scrollYProgress={scrollYProgress} showPopup={showPopup} />
                    <div className="overflow-y-scroll overflow-x-hidden bg-lavender relative z-30" style={{ height: '425vh' }}>
                        <Main
                            showPopup={showPopup}
                            spectrZashityAll={spectrZashityAll}
                            raysSpectrTwoBlue={raysSpectrTwoBlue}
                            raysSpectrTwoWhite={raysSpectrTwoWhite}
                            raysSpectrOneBlue={raysSpectrOneBlue}
                            main_bg_gradient={main_bg_gradient}
                            blue_bg_block={blue_bg_block}
                            blue_bg_block_image={blue_bg_block_image}
                            mainBgRaysAnim={mainBgRaysAnim}
                            scrollYProgress={scrollYProgress}
                            main_photo_to_right={main_photo_to_right}
                        />
                    </div>
                    <BigVideo />
                    <PeopleStories scrollYProgress={scrollYProgress} />
                    <VideoCorona />
                    <FAQ /> 
                    <Block11 />
                    <Block12 />
                    <Block13 showModal={showModal} />

                </div>
            </div>

            {popup ? <Popup showPopup={showPopup} popup={popup} /> : null}
            {modal ? <Modal content={modal} close={showModal} /> : null}
            {video ?
                <div className={`widget-vid ${fullScreen ? 'fullScreen' : ''}`}>
                    <video
                        className="widget-vid_item"
                        controls
                        loop
                        autoPlay
                        muted
                        playsInline
                        poster="/images/poster.jpg"
                        src="/video/covid-final.mp4"
                    />
                    <div className={`closebtn absolute  cursor-pointer ${fullScreen ? 'top-8 right-4' : 'top-4 right-4'}`}
                        onClick={() => videoVisible(false)}
                    >
                        <svg className={` ${fullScreen ? 'w-8 h-8' : 'w-6 h-6'}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="#AAABAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                            <path d="M6 6L18 18" stroke="#AAABAE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </svg>
                    </div>
                    {fullScreen ?
                        <div className="openbtn absolute top-8 right-16 cursor-pointer"
                            onClick={() => openVideoFull(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" strokeWidth="1.5" stroke="#AAABAE" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25" />
                            </svg>

                        </div> :
                        <div className="openbtn absolute top-4 right-12 cursor-pointer"
                            onClick={() => openVideoFull(true)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#AAABAE"
                                className="w-6 h-6">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>

                        </div>}
                </div> : null}
                </>
    )
}
export default FullPage;