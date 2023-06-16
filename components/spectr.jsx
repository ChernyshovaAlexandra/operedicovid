import React from "react";
import Icon from "./icon";
import { motion } from 'framer-motion'
import { animated } from '@react-spring/web'
import { coordinates } from '../constants/coordinates';



const Spectr = ({ showPopup, raysSpectrOneBlue, raysSpectrTwoWhite, raysSpectrTwoBlue, spectrZashityAll, scrollYProgress }) => {
    const props = { initial: { opacity: 0, transition: { duration: .2, delay: .2 } }, animated: { opacity: 1, transition: { duration: .2, delay: .2 } } }

    return (
        <animated.section className="bg-lavender grid items-center relative"
            style={{ height: '100vh', opacity: spectrZashityAll.opacity }}>
            <div className="absolute w-full h-full" style={{ zIndex: 10 }}>
                <animated.div style={{ display: raysSpectrOneBlue.display }}>
                    <picture className="absolute -bottom-16 blur-2px -right-8 w-4/12">
                        <source srcSet={require(`/public/images/doctor-after.png?resize&size=623&format=webp`)} type="image/webp" />
                        <img src={require(`/public/images/doctor-after.png?resize&size=312`)} alt="" loading="lazy" />
                    </picture>
                </animated.div>
                <animated.div style={{ display: raysSpectrTwoWhite.display }}>
                    <picture className="absolute -bottom-16 blur-2px -right-28 w-4/12">
                        <source srcSet={require(`/public/images/doctor-after-light.png?resize&size=623&format=webp`)} type="image/webp" />
                        <img 
                            src={require(`/public/images/doctor-after-light.png?resize&size=312`)} alt="" loading="lazy" />
                    </picture>
                </animated.div>
                <animated.div style={{ display: raysSpectrTwoBlue.display }}>
                    <picture className="absolute -bottom-16 blur-2px -right-8 w-4/12">
                        <source srcSet={require(`/public/images/doctor-after.png?resize&size=623&format=webp`)} type="image/webp" />
                        <img 
                            src={require(`/public/images/doctor-after.png?resize&size=312`)} alt="" loading="lazy" />
                    </picture>
                </animated.div>
            </div>
            <animated.div
                className={`w-full h-full relative overflow-hidden `}>
                <animated.picture className="w-full h-full absolute top-0" style={{ opacity: (1 - raysSpectrOneBlue.opacity) }}>
                    <source srcSet={require(`/public/images/raysbg.jpg?resize&size=1920&format=avif`)} type="image/webp" />
                    <img 
                        className='w-full h-full absolute top-0 '
                        src={require(`/public/images/raysbg.jpg?resize&size=1000`)} alt="" loading="lazy" />
                </animated.picture>

                <animated.picture className="w-full h-full absolute top-0" style={{ opacity: raysSpectrTwoWhite.opacity }}>
                    <source srcSet={require(`/public/images/raysLbg.jpg?resize&size=1920&format=avif`)} type="image/webp" />
                    <img 
                        className='w-full h-full absolute top-0'
                        src={require(`/public/images/raysLbg.jpeg?resize&size=1000`)} alt="" loading="lazy" />
                </animated.picture>
            </animated.div>
            <div className="header-container container absolute flex text-2xl left-12 my-auto h-full">
                <div className="w-5/12 h-full relative" >
                    <animated.h2
                        style={{ color: raysSpectrTwoWhite.color }}
                        className="text-white header">спектр защиты<br />от Covid-19 </animated.h2>
                    <div className="absolute bottom-16">
                        <animated.div className="mb-9 gap-3 items-center" style={{ display: raysSpectrOneBlue.display }}>
                            <Icon id={0} img={`<svg class="w-10 h-10"  viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9047 7.85058C21.9657 7.8254 22.0343 7.8254 22.0953 7.85058L36.2508 13.6882C36.3444 13.7268 36.4054 13.818 36.4054 13.9193V25.0807C36.4054 25.182 36.3444 25.2732 36.2508 25.3118L22.0953 31.1494C22.0343 31.1746 21.9657 31.1746 21.9047 31.1494L7.74924 25.3118C7.65563 25.2732 7.59456 25.182 7.59456 25.0807V13.9193C7.59456 13.818 7.65563 13.7268 7.74924 13.6882L21.9047 7.85058Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M37 14H43V23C43 24.1046 42.1046 25 41 25H37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/><path d="M7 14H1V23C1 24.1046 1.89543 25 3 25H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/><path d="M22 8V31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M30 28L22 12L14 28L22 31L30 28Z" fill="currentColor"/></svg>`} />
                            <Icon id={1} img={`<svg class="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="12" width="22" height="27" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M19.6154 24L9.87294 30.6459C9.32676 31.0185 9 31.6369 9 32.2981V37C9 38.1046 9.89543 39 11 39H27L19.6154 24Z" fill="currentColor"/><path d="M30.5119 17.7432L9.49187 31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/><path d="M13.3896 10.4705C13.3896 9.36589 14.2851 8.47046 15.3896 8.47046H25.2312C26.3358 8.47046 27.2312 9.36589 27.2312 10.4705V11.6647H13.3896V10.4705Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M18.7134 1.01733H22.9723V8.4705H18.7134V1.01733Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M13.625 1.01733C12.5204 1.01733 11.625 1.91276 11.625 3.01733L11.625 4.5766L18.7435 4.5766L18.7435 1.01733L13.625 1.01733Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                            <Icon id={2} img={`<svg class="w-10 h-10"  viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 29V27.2303L9.10807 20.0955C11.1389 18.073 12.1544 16.3408 12.1544 14.8989C12.1544 13.6442 11.7595 12.6704 10.9697 11.9775C10.1987 11.2659 9.26791 10.9101 8.17725 10.9101C6.14637 10.9101 4.67023 11.8371 3.74881 13.691L2.08462 12.7079C2.70517 11.4906 3.55136 10.573 4.62322 9.95506C5.69507 9.31835 6.87975 9 8.17725 9C9.75682 9 11.1389 9.53371 12.3236 10.6011C13.5271 11.6498 14.1288 13.0824 14.1288 14.8989C14.1288 16.0412 13.8092 17.1367 13.1698 18.1854C12.5305 19.2341 11.6279 20.339 10.462 21.5L4.82066 27.0899H14.5519V29H2Z" fill="currentColor"/><path d="M36 9.33708V29H34.0255V12.3146L27.1149 23.8315H26.8328L19.9222 12.3146V29H17.9478V9.33708H20.4017L26.9739 20.2921L33.546 9.33708H36Z" fill="currentColor"/></svg>`} />
                        </animated.div>
                        <animated.div className="mb-9 gap-3 items-center" style={{ display: raysSpectrTwoWhite.display }}>
                            <Icon id={0} img={`<svg class="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="10" width="17" height="29" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 38L27 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/><path d="M20 24.5L27.3253 37.84L27 38.5L11.5 38.5L20 24.5Z" fill="currentColor"/><path d="M13 9C13 7.89543 13.8954 7 15 7H24C25.1046 7 26 7.89543 26 9V10H13V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 3C12 1.89543 12.8954 1 14 1H25C26.1046 1 27 1.89543 27 3V5C27 6.10457 26.1046 7 25 7H14C12.8954 7 12 6.10457 12 5V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                        </animated.div>
                        <animated.div className="mb-9 gap-3 items-center" style={{ display: raysSpectrTwoBlue.display }}>
                            <Icon id={0} img={`<svg class="w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.80957 5L17.4921 14.2424C17.8875 14.6198 18.1112 15.1426 18.1112 15.6891V34.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M5 7.34131L14.3651 16.2381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M32.1587 5L22.4762 14.2424C22.0808 14.6198 21.8571 15.1426 21.8571 15.6891V34.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M34.9683 7.34131L25.6032 16.2381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>`} />
                        </animated.div>

                        <div className="mt-6">
                            <animated.div style={{ color: raysSpectrTwoWhite.color }}>
                                <animated.div style={{ display: raysSpectrOneBlue.display }} className="flex-col">
                                    <h2 className="header-secondary">Меры предосторожности</h2>
                                    <p className="header-secondary-text">Соблюдение правил личной гигиены, социальное дистанцирование, использование средств индивидуальной защиты (медицинская маска, респиратор, лицевой щиток и т.д.)  </p>
                                </animated.div>
                                <animated.div style={{ display: raysSpectrTwoWhite.display }} className="flex-col">
                                    <h2 className="header-secondary">Вакцинация</h2>
                                    <p className="header-secondary-text">Вакцинация является важной опцией профилактики коронавирусной инфекции<sup>3</sup></p>
                                </animated.div>
                                <animated.div style={{ display: raysSpectrTwoBlue.display }} className="flex-col">
                                    <h2 className="header-secondary">Пассивная иммунизация</h2>
                                    <p className="header-secondary-text bold">Пассивная иммунизация является дополнительной мерой защиты для пациентов со сниженным иммунным статусом или противопоказаниями к вакцинации</p>
                                    <span className="header-secondary-text-addition mt-4"> Спросите у вашего лечащего врача о дополнительной защите от COVID-19<sup>3</sup></span>
                                </animated.div>
                            </animated.div>
                        </div>
                        <motion.div variants={props} initial="initial" whileInView='animated' className="header-btn">
                            <a href='https://xn--80aaezjt5d.xn--80aesfpebagmfblc0a.xn--p1ai/' style={{ zIndex: '998' }}
                                className="btn  relative">Узнать больше</a>
                        </motion.div>
                    </div>

                </div>

            </div>

            <div className="w-6/12 absolute bottom-0 right-4">
                <animated.div
                    style={{
                        display: raysSpectrOneBlue.display,
                        transform: scrollYProgress.to(s => (`translateX(-${s * 1500}px)`)),
                        right: `-${coordinates.block4.coordinates[0] * 1000}px`,
                        position: 'relative'
                    }}>
                    <picture style={{ maxHeight: '90vh', position: "relative", bottom: '-5rem' }}>
                        <source srcSet={require(`/public/images/doctor-1.png?resize&size=800&format=webp`)} type="image/webp" />
                        <img src={require(`/public/images/doctor-1.png?resize&size=400`)} alt="" loading="lazy" />
                    </picture>
                </animated.div>
            </div>
            <div className="w-7/12 absolute bottom-0 right-4">
                <animated.div
                    style={{
                        display: raysSpectrTwoWhite.display,
                        transform: scrollYProgress.to(s => (`translateX(-${s * 1500}px)`)),
                        right: `-${coordinates.block5.coordinates[0] * 1550}px`,
                        position: 'relative'
                    }}>
                    <picture style={{ maxHeight: '80vh' }}>
                        <source srcSet={require(`/public/images/doctor-2.png?resize&size=800&format=webp`)} type="image/webp" />
                        <img src={require(`/public/images/doctor-2.png?resize&size=400`)} alt="" loading="lazy" />
                    </picture>
                </animated.div>
            </div>
            <div className="w-8/12 absolute bottom-0 right-4">
                <animated.div
                    style={{
                        display: raysSpectrTwoBlue.display,
                        transform: scrollYProgress.to(s => (`translateX(-${s * 1500}px)`)),
                        right: `-${coordinates.block6.coordinates[0] * 2000}px`,
                        position: 'relative'
                    }}>
                    {/* <img src={tela} alt="" style={{ maxHeight: '80vh' }} /> */}
                    <picture style={{ maxHeight: '80vh' }}>
                        <source srcSet={require(`/public/images/tela.png?resize&size=1000&format=webp`)} type="image/webp" />
                        <img src={require(`/public/images/tela.png?resize&size=500`)} alt="" loading="lazy" />
                    </picture>
                </animated.div>
            </div>

        </animated.section>

    )
}

export default Spectr;