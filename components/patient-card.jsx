import React from "react";


const PatientCard = ({ data, odd, last }) => {
    return (
        <div className={`bg-white rounded-lg patient-card h-fit max-[1000px]:ml-5 ${last ? 'mr-5' : ''} ${odd ? '' : 'min-[1000px]:mt-24'}`}>
            <div className="rounded-xl overflow-hidden w-full relative patient-card_img bg-blue-grad">
                <picture>
                    <source srcSet={data.src} type="image/webp" />
                    <img className='absolute top-0 left-0 w-full h-full object-cover object-center'
                        src={data.img} alt="" loading="lazy" />
                </picture>
            </div>
            <div className="mt-9 patient-card_data">
                <p className="text-pink patient-card_data_name">{data.name}</p>
                <h4 className="text-black gilroy text-xl patient-card_data_diagnose">{data.diagnose}</h4>
                <p className="text-black gilroy font-bold patient-card_data_process text-lg">{data.process}</p>
                <p className="text-black gilroy patient-card_data_process text-lg font-normal"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                />
            </div>
        </div>
    )
}

export default PatientCard;