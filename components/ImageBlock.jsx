import React from "react";

const ImageOptimized = ({ image1, image2 }) => {
  return (
    <div className="bg-blue rounded-xl grid items-center overflow-hidden">
      <picture>
        <source srcSet={image1.srcWebp} type="image/webp" />
        <img
          className="w-full h-full object-cover -my-1 object-center max-[1000px]:hidden"
          src={image1.src}
          alt=""
          loading="lazy"
        />
      </picture>
      <picture>
        <source srcSet={image2.srcWebp} type="image/webp" />
        <img
          className="w-full h-full object-cover -my-1 object-center hidden max-[1000px]:block"
          src={image2.src}
          alt=""
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default ImageOptimized;
