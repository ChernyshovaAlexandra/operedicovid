
import React from "react";
import { animated } from '@react-spring/web'
import { coordinates } from '../constants/coordinates';


const Nav = ({ showPopup, scrollYProgress }) => {
    return (
        <animated.nav className="text-white rounded-full fixed top-6 left-0 right-0 z-30 mx-auto w-11/12 p-4"
            style={{
                zIndex: 80,
                background: scrollYProgress.to(s => (s > coordinates.block7.coordinates[0] ? 'rgba(255,255,255,.9)' : ''))
            }}>
            <div className="flex justify-between gap-4 items-center">
                <div className="logo h-fit cursor-pointer">
                    <animated.svg
                        style={{
                            color: scrollYProgress.to(s => (s > coordinates.block5.coordinates[0] && s < coordinates.block5.coordinates[1] || s > coordinates.block7.coordinates[0] ? '#f11952' : 'white'))
                        }}
                        className="w-12 h-12 text-white" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_854_5724)">
                            <path d="M45.6945 20.1162C38.3313 15.8922 30.8255 11.8946 23.3925 7.80703C19.4172 5.62255 15.3779 3.5396 11.484 1.21587C8.1862 -0.75104 4.92334 -0.127316 2.72193 1.63362C-0.325728 4.06179 -0.692146 7.88536 1.0178 10.9489C3.24829 14.9436 5.50496 18.9267 7.70637 22.9331C11.6672 30.1044 15.5843 37.2961 19.5568 44.4559C21.7029 48.3288 24.8204 51.1486 29.0167 52.6804C35.9961 55.2217 42.3939 54.0932 47.9192 49.2571C51.9905 45.6888 54.1367 41.0327 53.9476 35.248C54.3809 29.3879 50.5248 22.8867 45.6945 20.1162ZM51.9091 35.9733C51.9081 38.9668 51.0312 41.895 49.3858 44.3985C47.7405 46.902 45.3984 48.8719 42.6469 50.0665C42.3851 49.9244 42.1845 49.5907 42.0827 48.9728C41.5912 45.9267 40.9631 42.9009 41.6756 39.8084C42.1147 37.917 43.5658 36.7681 44.9791 35.6802C46.724 34.3429 48.8381 33.7307 50.8854 33.0084C51.3013 32.8633 51.4874 32.9243 51.6735 33.2985C51.8294 34.1816 51.9082 35.0766 51.9091 35.9733V35.9733ZM36.4963 51.3488C34.7002 51.3511 32.9176 51.0388 31.2298 50.4263C31.2392 50.3711 31.2528 50.3168 31.2705 50.2638C31.9364 48.3607 32.8932 46.6375 34.4374 45.3697C35.8914 44.1803 37.6712 44.63 38.6134 46.24C39.4218 47.6238 39.6835 49.1933 40.0965 50.7105C40.1147 50.777 40.1264 50.845 40.1314 50.9136C38.9441 51.2013 37.7268 51.3474 36.505 51.3488H36.4963ZM21.0835 35.9733C21.0844 33.6153 21.6304 31.2894 22.6789 29.1762C23.7275 27.0629 25.2504 25.2194 27.1294 23.7889C27.3023 23.9589 27.437 24.1636 27.5249 24.3894C29.5168 28.3732 30.8232 32.6627 31.3897 37.0786C31.9335 41.0443 31.3519 44.7895 30.1189 48.5087C30.0146 48.9362 29.8311 49.3406 29.578 49.701C27.0283 48.4215 24.8854 46.4602 23.3884 44.0361C21.8915 41.612 21.0995 38.8204 21.101 35.9733H21.0835ZM50.0305 30.586C43.1383 35.3379 34.9521 33.2579 30.9942 26.2345C30.4308 25.2523 29.9173 24.2424 29.4558 23.2087C29.334 22.9625 29.2722 22.6912 29.2755 22.4167C31.1538 21.4219 33.218 20.8256 35.3385 20.6653C37.459 20.505 39.5897 20.7842 41.5968 21.4853C43.6038 22.1864 45.4437 23.2943 47.0007 24.7391C48.5577 26.184 49.7982 27.9347 50.6441 29.8811C50.6004 30.1044 50.4347 30.3249 50.0479 30.5918L50.0305 30.586Z" fill="currentColor" />
                            <path d="M39.8114 23.5218C37.9298 23.545 36.5049 25.0507 36.5049 27.0031C36.5049 28.9555 37.6245 30.1333 39.5002 30.1768C41.3759 30.2203 42.8707 28.6799 42.8852 26.6027C42.9026 24.7373 41.6667 23.4986 39.8114 23.5218Z" fill="currentColor" />
                        </g>
                        <defs>
                            <clipPath id="clip0_854_5724">
                                <rect width="54" height="54" fill="white" />
                            </clipPath>
                        </defs>
                    </animated.svg>

                </div>
                <div className="nav-links">
                    <animated.ul className="flex min-[1350px]:gap-6 min-[1550px]:gap-8 gap-4 items-center text-white"
                        style={{
                            color: scrollYProgress.to(s => (s > coordinates.block5.coordinates[0] && s < coordinates.block5.coordinates[1] || s > coordinates.block7.coordinates[0] ? '#030C26' : 'white'))
                        }}
                    >
                        <li className="min-[1350px]:text-xl min-[1550px]:text-2xl font-bold">
                            <a href="#spectrum_of_protection"
                                onClick={() => window.scrollTo(0, 2 * window.innerHeight)}
                            >Спектр защиты</a>
                        </li>
                        <li className="min-[1350px]:text-xl min-[1550px]:text-2xl font-bold">
                            <a href="#risk_groups">Группы риска</a>
                        </li>
                        <li className="min-[1350px]:text-xl min-[1550px]:text-2xl font-bold">
                            <a href="#faq">Частые вопросы</a>
                        </li>
                        <li className="ml-3">
                            <animated.button
                                style={{
                                    color: scrollYProgress.to(s => (s > coordinates.block5.coordinates[0] && s < coordinates.block5.coordinates[1] || s > coordinates.block7.coordinates[0] ? '#f11952' : '')),
                                    borderColor: scrollYProgress.to(s => (s > coordinates.block5.coordinates[0] && s < coordinates.block5.coordinates[1] || s > coordinates.block7.coordinates[0] ? '#f11952' : 'white'))
                                }}
                                onClick={() => showPopup('opros')}
                                className="btn-transparent2 btn">Пройти опрос**</animated.button>
                        </li>
                    </animated.ul>

                </div>
            </div>
        </animated.nav >
    )
}


export default Nav;