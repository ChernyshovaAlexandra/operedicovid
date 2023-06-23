import React, { useEffect, useRef, forwardRef } from "react";
import { patients } from "/constants/patients";
import 'swiper/css';
import { register } from 'swiper/element/bundle';
import PatientCard from "./patient-card";
register();

// eslint-disable-next-line react/display-name
const Next = forwardRef((props, ref) => (
    <div className="next rounded-full border-2 border-white grid place-items-center p-2 w-fit h-fit" ref={ref}>
        <svg className="w-6 h-6"
            viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3427 20.1324C10.0955 19.8874 9.96606 19.5755 9.95438 19.1968C9.94269 18.8181 10.0609 18.5062 10.309 18.2611L16.9157 11.7116L1.84832 11.7116C1.4663 11.7116 1.14585 11.5833 0.886971 11.3267C0.628095 11.07 0.499106 10.7528 0.500005 10.375C0.500005 9.99629 0.629443 9.67861 0.888319 9.42198C1.1472 9.16535 1.46719 9.03747 1.84832 9.03837L16.9157 9.03837L10.309 2.48886C10.0618 2.24381 9.94359 1.93193 9.95438 1.55322C9.96516 1.1745 10.0946 0.862623 10.3427 0.617574C10.5899 0.372524 10.9045 0.25 11.2865 0.25C11.6685 0.25 11.9831 0.372524 12.2303 0.617574L21.1292 9.43936C21.264 9.55074 21.3598 9.6902 21.4164 9.85772C21.473 10.0252 21.5009 10.1977 21.5 10.375C21.5 10.5532 21.4721 10.7203 21.4164 10.8762C21.3607 11.0322 21.2649 11.177 21.1292 11.3106L12.2303 20.1324C11.9831 20.3775 11.6685 20.5 11.2865 20.5C10.9045 20.5 10.5899 20.3775 10.3427 20.1324Z" fill="white" />
        </svg>
    </div>
));
// eslint-disable-next-line react/display-name
const Prev = forwardRef((props, ref) => (
    <div className="prev rounded-full border-2 border-white grid place-items-center p-2 w-fit h-fit" ref={ref}>
        <svg className="w-6 h-6 rotate-180"
            viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3427 20.1324C10.0955 19.8874 9.96606 19.5755 9.95438 19.1968C9.94269 18.8181 10.0609 18.5062 10.309 18.2611L16.9157 11.7116L1.84832 11.7116C1.4663 11.7116 1.14585 11.5833 0.886971 11.3267C0.628095 11.07 0.499106 10.7528 0.500005 10.375C0.500005 9.99629 0.629443 9.67861 0.888319 9.42198C1.1472 9.16535 1.46719 9.03747 1.84832 9.03837L16.9157 9.03837L10.309 2.48886C10.0618 2.24381 9.94359 1.93193 9.95438 1.55322C9.96516 1.1745 10.0946 0.862623 10.3427 0.617574C10.5899 0.372524 10.9045 0.25 11.2865 0.25C11.6685 0.25 11.9831 0.372524 12.2303 0.617574L21.1292 9.43936C21.264 9.55074 21.3598 9.6902 21.4164 9.85772C21.473 10.0252 21.5009 10.1977 21.5 10.375C21.5 10.5532 21.4721 10.7203 21.4164 10.8762C21.3607 11.0322 21.2649 11.177 21.1292 11.3106L12.2303 20.1324C11.9831 20.3775 11.6685 20.5 11.2865 20.5C10.9045 20.5 10.5899 20.3775 10.3427 20.1324Z" fill="white" />
        </svg>
    </div>
));





const PeopleStories = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {

        const swiperEl = document.querySelector('swiper-container');
        const swiperParams = {
            navigation: {
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                1000: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                1224: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                },
            },
        };

        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
        console.log(123)
    }, [])
    return (
        <section className="min-[1000px]:pb-12 min-[1000px]:pt-36 py-16 bg-blue-grad w-full z-50 relative" id="risk_groups">
            <div className="contentmin-[1000px]:mx-auto max-[1000px]:w-11/12 min-[1000px]:px-12 px-5">
                <h2 className="font-normal text-4xl text-white header-sec">Кому может быть необходима<br />
                    пассивная иммунизация от Covid-19?</h2>
            </div>
            <div className="pl-5 min-[1000px]:pl-12 min-[1000px]:mx-auto swiper-inner-cont">
                <swiper-container init={false} style={{ 'minHeight': '250px' }}>
                    {patients && patients.map((pat, id) => (
                        <swiper-slide key={id} >
                            <PatientCard last={id === patients.length - 1} data={pat} odd={id % 2 === 0} />
                        </swiper-slide>
                    ))}

                </swiper-container>
                <div className="flex gap-6 mt-8 p-5">
                    <Prev ref={prevRef} />
                    <Next ref={nextRef} />
                </div>
            </div>
        </section>
    )
}

export default PeopleStories;