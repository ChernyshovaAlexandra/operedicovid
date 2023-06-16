import React, { useState } from "react";
// import rays from '../assets/images/rays-mob.svg';
// import img from '../assets/images/secbg-mob.jpg';
// import vac from '../assets/images/vac-mob.png'
import Icon from "./Icon";
// import m1 from '../assets/images/mob-img-1.png'
// import m2 from '../assets/images/mob-img-2.jpg'
// import m3 from '../assets/images/mob-img-3.png'
// import Block7 from "../Blocks/Block7";
// import Block8 from "../Blocks/Block8";
// import Block9 from "../Blocks/Block9";
// import QA from "../Blocks/QA";
// import Block11 from "../Blocks/Block11";
// import Block12 from "../Blocks/Block12";
// import Block13 from "../Blocks/Block13";
import { useSpring, animated } from '@react-spring/web'
import BigVideo from "./big-video";
import PeopleStories from "./people-stories";
import VideoCorona from "./video-coronavirus";
import FAQ from "./faq";
import Block11 from "./Block11";
import Block12 from "./Block12";
import Block13 from "./Block13";




const Mobile = ({ showPopup, showModal, scrollYProgress }) => {
    const [menu, showMenu] = useState(false)
    const toggleMenu = () => {
        showMenu(!menu)
    }

    const [textApear, api2] = useSpring(
        () => ({
            from: { opacity: '0', transition: '.25s all .15s ease-in-out' },
            to: { opacity: '1', transition: '.25s all .15s ease-in-out' }
        }),
        []
    )
    return (
        <>
            <nav className="fixed top-4 w-full z-20 flex justify-between px-5 items-center" style={{ zIndex: 80 }}>
                <div className="logo h-fit cursor-pointer relative" style={{ zIndex: 1001 }}>
                    <svg className={`w-10 h-10 ${menu ? 'text-pink' : 'text-white'}`} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_854_5724)">
                            <path d="M45.6945 20.1162C38.3313 15.8922 30.8255 11.8946 23.3925 7.80703C19.4172 5.62255 15.3779 3.5396 11.484 1.21587C8.1862 -0.75104 4.92334 -0.127316 2.72193 1.63362C-0.325728 4.06179 -0.692146 7.88536 1.0178 10.9489C3.24829 14.9436 5.50496 18.9267 7.70637 22.9331C11.6672 30.1044 15.5843 37.2961 19.5568 44.4559C21.7029 48.3288 24.8204 51.1486 29.0167 52.6804C35.9961 55.2217 42.3939 54.0932 47.9192 49.2571C51.9905 45.6888 54.1367 41.0327 53.9476 35.248C54.3809 29.3879 50.5248 22.8867 45.6945 20.1162ZM51.9091 35.9733C51.9081 38.9668 51.0312 41.895 49.3858 44.3985C47.7405 46.902 45.3984 48.8719 42.6469 50.0665C42.3851 49.9244 42.1845 49.5907 42.0827 48.9728C41.5912 45.9267 40.9631 42.9009 41.6756 39.8084C42.1147 37.917 43.5658 36.7681 44.9791 35.6802C46.724 34.3429 48.8381 33.7307 50.8854 33.0084C51.3013 32.8633 51.4874 32.9243 51.6735 33.2985C51.8294 34.1816 51.9082 35.0766 51.9091 35.9733V35.9733ZM36.4963 51.3488C34.7002 51.3511 32.9176 51.0388 31.2298 50.4263C31.2392 50.3711 31.2528 50.3168 31.2705 50.2638C31.9364 48.3607 32.8932 46.6375 34.4374 45.3697C35.8914 44.1803 37.6712 44.63 38.6134 46.24C39.4218 47.6238 39.6835 49.1933 40.0965 50.7105C40.1147 50.777 40.1264 50.845 40.1314 50.9136C38.9441 51.2013 37.7268 51.3474 36.505 51.3488H36.4963ZM21.0835 35.9733C21.0844 33.6153 21.6304 31.2894 22.6789 29.1762C23.7275 27.0629 25.2504 25.2194 27.1294 23.7889C27.3023 23.9589 27.437 24.1636 27.5249 24.3894C29.5168 28.3732 30.8232 32.6627 31.3897 37.0786C31.9335 41.0443 31.3519 44.7895 30.1189 48.5087C30.0146 48.9362 29.8311 49.3406 29.578 49.701C27.0283 48.4215 24.8854 46.4602 23.3884 44.0361C21.8915 41.612 21.0995 38.8204 21.101 35.9733H21.0835ZM50.0305 30.586C43.1383 35.3379 34.9521 33.2579 30.9942 26.2345C30.4308 25.2523 29.9173 24.2424 29.4558 23.2087C29.334 22.9625 29.2722 22.6912 29.2755 22.4167C31.1538 21.4219 33.218 20.8256 35.3385 20.6653C37.459 20.505 39.5897 20.7842 41.5968 21.4853C43.6038 22.1864 45.4437 23.2943 47.0007 24.7391C48.5577 26.184 49.7982 27.9347 50.6441 29.8811C50.6004 30.1044 50.4347 30.3249 50.0479 30.5918L50.0305 30.586Z" fill="currentColor" />
                            <path d="M39.8114 23.5218C37.9298 23.545 36.5049 25.0507 36.5049 27.0031C36.5049 28.9555 37.6245 30.1333 39.5002 30.1768C41.3759 30.2203 42.8707 28.6799 42.8852 26.6027C42.9026 24.7373 41.6667 23.4986 39.8114 23.5218Z" fill="currentColor" />
                        </g>
                        <defs>
                            <clipPath id="clip0_854_5724">
                                <rect width="54" height="54" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className="burger w-10 h-8 relative" style={{ zIndex: 1001 }} onClick={toggleMenu}>
                    <span className={`w-full h-1 transition rounded-lg ${menu ? 'bg-pink rotate-45 bottom-0  my-auto ' : 'bg-white'} absolute top-0`}></span>
                    <span className={`w-full h-1 rounded-lg ${menu ? 'hidden' : 'bg-white'} absolute top-0 bottom-0 my-auto`}></span>
                    <span className={`w-full h-1 transition rounded-lg ${menu ? 'bg-pink -rotate-45 top-0 my-auto' : 'bg-white'} absolute bottom-0`}></span>
                </div>
                {
                    menu ?
                        <div className="fixed h-full w-full bg-lavender top-0 left-0" style={{ height: '100vh', zIndex: 1000 }}>
                            <ul className="py-16 px-5 grid items-center text-center text-blue text-lg mt-5">
                                <li onClick={() => showMenu(false)} className="pb-5"><a href="#spectr">Спектр защиты</a></li>
                                <li onClick={() => showMenu(false)} className="pb-5"><a href="#risk_groups">Группы риска</a></li>
                                <li onClick={() => showMenu(false)} className="pb-5"><a href="#faq">Частые вопросы</a></li>
                                <li onClick={() => showMenu(false)} className="pb-5"><a href="#">Истории пациентов</a></li>
                            </ul>
                        </div>
                        : ''
                }
            </nav>
            <div className={`content bg-lavender relative ${menu ? 'overflow-hidden' : ''}`}>
                <main className="text-white relative">
                    <div className="w-full" dangerouslySetInnerHTML={{ __html: require('/public/images/rays-mob.svg?include') }} />
                    <div
                        style={textApear}
                        className="content absolute top-0 left-0 right-0 bottom-0 m-auto h-fit">
                        <h1 className="text-center f-small mb-8 px-5">Весь спектр<br />защиты от Covid-19</h1>
                        <div className="description text-base text-center min-[360px]:px-16 px-10">
                            <p className="font-bold mb-2">Люди с ослабленным иммунитетом могут нуждаться в дополнительной защите от коронавирусной инфекции<sup>1</sup>.</p>
                            <p>Пройдите опрос, чтобы узнать,<br />находитесь ли вы в группе риска</p>
                        </div>
                        <button className="btn mx-auto block mt-8 " onClick={() => showPopup('opros')}>Пройти опрос**</button>
                    </div>
                </main>

                <section className="about-vac relative text-white px-6 py-16 h-100vh overflow-hidden flex flex-col">
                    <section className="sec-image w-full h-full z-50"
                        style={{
                            width: '100vw',
                            margin: '-4rem -1.5rem 2rem',
                            transition: '.3s all .7s ease-out',
                        }}
                    >
                        <picture>
                            <source srcSet={require(`/public/images/secBg.jpg?resize&size=1000&format=webp`)} type="image/webp" />
                            <img className='w-full' src={require(`/public/images/secbg-mob.jpg?resize&size=500`)} alt="" loading="lazy" />
                        </picture>
                    </section>
                    <section className="py-32 my-auto relative grid place-items-center">
                        <div className="text-lg font-bold spacing-05 uppercase ">Вакцинация является важной опцией профилактики коронавирусной инфекции, однако не всегда она обеспечивает необходимую защиту.<sup>[1]</sup> Люди со сниженным иммунитетом
                            <span className="text-pink"> могут нуждаться в дополнительной защите</span> от COVID-19<sup className="text-pink">[2-4]</sup>
                        </div>
                    </section>
                    <div className="flex gap-4 items-center w-10/12 mt-8 relative">
                        <Icon id={0}
                            img={`<svg viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.81127 11.5946L15.9464 29L31.0815 11.5946" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M11 15L15.0583 26.3631C15.3743 27.248 16.6257 27.248 16.9417 26.3631L21 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15.9463 29L15.9463 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                        <p className="text-white font-bold text-lg">Смотри спектр защиты от COVID-19</p>
                    </div>
                </section>
                <section className="spectr bg-blue-grad px-6 py-16" id="spectr">
                    <h2 className="text-white uppercase mob relative z-10" style={{
                        textShadow: '-2px 2px 43px #3E6BF4'
                    }}>спектр защиты<br />от Covid-19</h2>
                    <div className="text-white mt-8">
                        <div className="w-full relative">
                            <div className="absolute w-full h-full" style={{
                                background: '#0C32A5',
                                filter: 'blur(125px)',
                                mixBlendMode: 'color-dodge'
                            }}></div>
                            <picture >
                                <source srcSet={require(`/public/images/mob-img-1.png?resize&size=400&format=webp`)} type="image/webp" />
                                <img className='w-full rounded-xl mb-6 relative' src={require(`/public/images/mob-img-1.png?resize&size=200`)} alt="" loading="lazy" />
                            </picture>
                        </div>
                        <div className="relative">
                            <h3 className="spacing-05 font-bold text-lg leading-7 uppercase gilroy mb-4">Меры предосторожности</h3>
                            <p className="leading-5 text-sm gilroy font-medium">Соблюдение правил личной гигиены, социальное дистанцирование, использование средств индивидуальной защиты (медицинская маска, респиратор, лицевой щиток и т.д.)  </p>
                            <button className="btn mt-4 relative" onClick={() => showPopup(true)}>Узнать больше</button>
                        </div>
                    </div>
                    <div className="text-white mt-8">
                        <picture>
                            <source srcSet={require(`/public/images/mob-img-2.jpg?resize&size=400&format=webp`)} type="image/webp" />
                            <img className='w-full rounded-xl mb-6 relative'
                                src={require(`/public/images/mob-img-2.jpg?resize&size=200`)} alt="" loading="lazy" />
                        </picture>
                        <h3 className="spacing-05 font-bold text-lg leading-7 uppercase gilroy mb-4">Вакцинация</h3>
                        <p className="leading-5 text-sm gilroy font-medium">Вакцинация является важной опцией профилактики коронавирусной инфекции<sup>3</sup></p>
                        <button className="btn mt-4 relative" onClick={() => showPopup(true)}>Узнать больше</button>
                    </div>
                    <div className="text-white mt-8">
                        <div className="w-full relative">
                            <div className="absolute w-full h-full" style={{
                                background: '#0C32A5',
                                filter: 'blur(125px)',
                                mixBlendMode: 'color-dodge'
                            }}></div>
                            <picture >
                                <source srcSet={require(`/public/images/mob-img-3.png?resize&size=400&format=webp`)} type="image/webp" />
                                <img className='w-full rounded-xl mb-6 relative' src={require(`/public/images/mob-img-3.png?resize&size=200`)} alt="" loading="lazy" />
                            </picture>
                        </div>
                        <div className="relative">
                            <h3 className="spacing-05 font-bold text-lg leading-7 uppercase gilroy mb-4">Пассивная иммунизация</h3>
                            <p className="leading-5 text-sm gilroy font-medium">Пассивная иммунизация является дополнительной мерой защиты для пациентов со сниженным иммунным статусом или противопоказаниями к вакцинации
                                Спросите у вашего лечащего врача о дополнительной защите от COVID-19<sup>3</sup></p>
                            <button className="btn mt-4 relative" onClick={() => showPopup(true)}>Узнать больше</button>
                        </div>
                    </div>
                </section>
                <BigVideo />
                <PeopleStories />
                <VideoCorona />
                <FAQ />
                <Block11 />
                <Block12 />
                <Block13 showModal={showModal} />
            </div>
        </>
    )
}
export default Mobile;