import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide transition every 3 seconds
  };

  const images = [
    "https://res.cloudinary.com/dppgyjdcg/image/upload/v1720257075/image2_qwvvvc.jpg",
    "https://res.cloudinary.com/dppgyjdcg/image/upload/v1720257072/image1_tahoox.jpg",
    "https://res.cloudinary.com/dppgyjdcg/image/upload/v1720257078/image3_midjfa.jpg",
    "https://res.cloudinary.com/dppgyjdcg/image/upload/v1720257071/image4_qngz9d.jpg",
    "https://res.cloudinary.com/dppgyjdcg/image/upload/v1720257079/img1_gbjpjg.jpg",
    "https://res.cloudinary.com/dppgyjdcg/image/upload/v1720257075/img2_j2yzur.jpg",
    "https://res.cloudinary.com/dppgyjdcg/image/upload/v1720257072/img3_uzcqlu.jpg",
    "https://res.cloudinary.com/dppgyjdcg/image/upload/v1720257075/img4_mhquur.jpg",
  ];

  return (
    <Slider {...settings} className={className}>
      {images.map((url, index) => (
        <div key={index}>
          <img
            src={url}
            alt={`slide-${index}`}
            className="h-[650px] w-full "
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
