import React from "react";
import ReactImageMagnify from "react-image-magnify";

const ImageMagnify = ({ img }) => {
  return (
    <div>
      <div className="">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: img,
              sizes:
                "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
              srcSet: `${img} 1x, ${img}@2x.jpg 2x`,
              isHintEnabled: true,
              enlargedImagePosition: "over",
            },
            largeImage: {
              src: img,
              width: 1000,
              height: 1000,
            },
            enlargedImageContainerDimensions: {
              width: "150%",
              height: "150%",
            },
            enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
          }}
        />
      </div>
    </div>
  );
};

export default ImageMagnify;
