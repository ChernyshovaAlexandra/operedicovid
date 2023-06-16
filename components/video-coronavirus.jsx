import React, { useState } from "react";

const VideoCorona = () => {
    const [video, showVideo] = useState(false)
    return (
        <section className="min-[1000px]:p-12 px-5 py-16 bg-lavender relative z-40">
            <div className="content mx-auto relative">
                <div className="w-full h-full rounded-3xl mx-auto video overflow-hidden" >
                    <div className="w-full max-[1000px]:relative img-container-vid max-[1000px]:rounded-2xl overflow-hidden">
                        <picture className="max-[1000px]:absolute max-[1000px]:h-full max-[1000px]:w-full">
                            <source srcSet={require(`/public/images/video-bg.jpg?resize&size=1280&format=webp`)} type="image/webp" />
                            <img className="w-full block"
                                src={require(`/public/images/video-bg.jpg?resize&size=640&format=webp`)} alt="" loading="lazy" />
                        </picture>
                    </div>
                    {!video ?
                        <div className="min-[1000px]:absolute min-[1000px]:p-8 left-8 top-8 max-[1000px]:mt-8">
                            <h2 className="font-normal header-sec changeColor">Коронавирус изменил<br /> жизнь многих из нас</h2>
                            <p className="text-blue min-[1000px]:text-white min-[1000px]:mt-6 -mt-8 max-[1000px]:font-medium">Истории пациентов со сниженным иммунитетом</p>
                            <button className="mt-8 btn flex gap-2 w-fit" onClick={() => showVideo(true)}>Смотреть
                                <svg className="w-6 h-6" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5698 19.8201C19.3798 19.8201 19.1898 19.7501 19.0398 19.6001C18.7498 19.3101 18.7498 18.8301 19.0398 18.5401C22.6498 14.9301 22.6498 9.06012 19.0398 5.46012C18.7498 5.17012 18.7498 4.69012 19.0398 4.40012C19.3298 4.11012 19.8098 4.11012 20.0998 4.40012C24.2898 8.59012 24.2898 15.4101 20.0998 19.6001C19.9498 19.7501 19.7598 19.8201 19.5698 19.8201Z" fill="white" />
                                    <path d="M5.42982 19.8201C5.23982 19.8201 5.04982 19.7501 4.89982 19.6001C0.709824 15.4101 0.709824 8.59012 4.89982 4.40012C5.18982 4.11012 5.66982 4.11012 5.95982 4.40012C6.24982 4.69012 6.24982 5.17012 5.95982 5.46012C2.34982 9.07012 2.34982 14.9401 5.95982 18.5401C6.24982 18.8301 6.24982 19.3101 5.95982 19.6001C5.80982 19.7501 5.61982 19.8201 5.42982 19.8201Z" fill="white" />
                                    <path d="M12.4998 22.71C11.2498 22.7 10.0598 22.5 8.94976 22.11C8.55976 21.97 8.34976 21.54 8.48976 21.15C8.62976 20.76 9.04976 20.55 9.44976 20.69C10.4098 21.02 11.4298 21.2 12.5098 21.2C13.5798 21.2 14.6098 21.02 15.5598 20.69C15.9498 20.56 16.3798 20.76 16.5198 21.15C16.6598 21.54 16.4498 21.97 16.0598 22.11C14.9398 22.5 13.7498 22.71 12.4998 22.71Z" fill="white" />
                                    <path d="M15.7998 3.34004C15.7198 3.34004 15.6298 3.33004 15.5498 3.30004C14.5998 2.96004 13.5698 2.79004 12.4998 2.79004C11.4298 2.79004 10.4098 2.97004 9.44976 3.30004C9.04976 3.43004 8.62976 3.23004 8.48976 2.84004C8.34976 2.45004 8.55976 2.02004 8.94976 1.88004C10.0698 1.49004 11.2598 1.29004 12.4998 1.29004C13.7398 1.29004 14.9398 1.49004 16.0498 1.88004C16.4398 2.02004 16.6498 2.45004 16.5098 2.84004C16.3998 3.15004 16.1098 3.34004 15.7998 3.34004Z" fill="white" />
                                    <path d="M9.24023 11.9999V10.3299C9.24023 8.2499 10.7102 7.3999 12.5102 8.4399L13.9602 9.2799L15.4102 10.1199C17.2102 11.1599 17.2102 12.8599 15.4102 13.8999L13.9602 14.7399L12.5102 15.5799C10.7102 16.6199 9.24023 15.7699 9.24023 13.6899V11.9999Z" fill="white" />
                                </svg>
                            </button>
                        </div> :
                        <video controls className="video-player w-full">
                            <source
                                src="/video/1.mp4"
                                autoPlay
                                type="video/mp4" />
                        </video >
                    }
                </div>
            </div>
        </section>
    )
}

export default VideoCorona;