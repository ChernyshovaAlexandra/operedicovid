import React from "react";
import { modals } from "../constants/modals";
// import ImageOptimized from "./ImageBlock";
import FooterBlock from "./FooterBlock";

const Block13 = ({ showModal }) => {
  return (
    <section className="min-[1000px]:px-20 px-5 py-16 bg-darkBlue text-white relative z-40">
      <div className="content mx-auto">
        {/* <p className="text-sm mt-2 txt-footer">
          Здесь вам могут помочь с информацией относительно вашего заболевания:
        </p>
        <div className="mt-8 grid min-[1100px]:grid-cols-4 min-[600px]:grid-cols-2 gap-8">
          <ImageOptimized
            image1={{
              srcWebp: "/images/1.jpg?resize&size=288&format=webp",
              src: "/images/1.jpg?resize&size=144",
            }}
            image2={{
              srcWebp: "/images/11.jpg?resize&size=500&format=webp",
              src: "/images/11.jpg?resize&size=250",
            }}
          />
          <ImageOptimized
            image1={{
              srcWebp: "/images/21.jpg?resize&size=500&format=webp",
              src: "/images/21.jpg?resize&size=250",
            }}
            image2={{
              srcWebp: "/images/2.jpg?resize&size=288&format=webp",
              src: "/images/2.jpg?resize&size=144",
            }}
          />
          <ImageOptimized
            image1={{
              srcWebp: "/images/31.jpg?resize&size=500&format=webp",
              src: "/images/31.jpg?resize&size=250",
            }}
            image2={{
              srcWebp: "/images/3.jpg?resize&size=288&format=webp",
              src: "/images/3.jpg?resize&size=144",
            }}
          />
          <ImageOptimized
            image1={{
              srcWebp: "/images/41.jpg?resize&size=500&format=webp",
              src: "/images/41.jpg?resize&size=250",
            }}
            image2={{
              srcWebp: "/images/4.jpg?resize&size=288&format=webp",
              src: "/images/4.jpg?resize&size=144",
            }}
          />
        </div> */}
        {/* <hr className="my-12 bg-blue" /> */}
        <FooterBlock modals={modals} showModal={showModal} />
      </div>
    </section>
  );
};

export default Block13;
