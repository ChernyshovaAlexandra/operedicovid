import React from "react";

const BigVideo = () => {
    return (
        <section className="min-[1000px]:pb-12 min-[1000px]:px-12 min-[1000px]:pt-36 px-5 py-16 bg-lavender relative">
            <div className="content mx-auto">
                <h2 className="font-normal header-sec text-darkBlue">Чем моноклональные антитела<br /> отличаются от вакцины?</h2>
                <video
                    className="w-full h-full mt-8 mx-auto video block frst"
                    src="/video/vid2.mp4"
                    muted autoPlay playsInline loop />
            </div>
        </section>
    )
}

export default BigVideo;

