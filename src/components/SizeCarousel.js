"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ICONS from "@/assets";
import styled from "styled-components";

const ImageLayer = styled.img`
  position: absolute;
  display: flex;
  top: 5px;
  left: 30%;
  width: 20%;
  height: 70%;
`;

const ImageBigLayer = styled.img`
  position: absolute;
  display: flex;
  top: 1px;
  left: 49%;
  width: 22%;
  height: 73%;
`;

const ImageArrows = styled.img`
  position: absolute;
  display: flex;
  background-color: "#e8e8ed";
  width: 70%;
  height: 70%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const WatchNameDisplay = styled.div`
  font-family: sans-serif;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #6e6e73;
  text-transform: uppercase;
`;

const SideViewDisplay = styled.div`
  font-family: sans-serif;
  margin-top: 4px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: #6e6e73;
  cursor: pointer;
`;

const DescriptionDisplay = styled.div`
  font-family: sans-serif;
  margin-top: 4px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #1d1d1f;
`;
const PriceDisplay = styled.div`
  font-family: sans-serif;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #1d1d1f;
`;

const CarouselContainer = ({
  speed = 800,
  slidesToScroll = 1,
  slidesToShow = 2,
  infinite = false,
  setCurrentSlide,
  children,
}) => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} shadow-customArrow !right-0 !top-[40%] !flex !h-6 !w-6 !transform items-center justify-center !bg-[#e8e8ed] rounded-full xl:!h-9 xl:!w-9`}
        onClick={onClick}
        style={{ ...style }}
      >
        <ImageArrows src={ICONS.NEXT_ARROW} alt="arrow" style={{ zIndex: 5 }} />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} shadow-customArrow !left-[0px] !top-[40%] !flex !h-6 !w-6 !transform items-center justify-center !rounded-full !bg-[#e8e8ed] z-10 xl:!h-9 xl:!w-9`}
        onClick={onClick}
        style={{ ...style }}
      >
        <ImageArrows
          src={ICONS.PREV_ARROW}
          alt="arrow"
          style={{ zIndex: 10 }}
        />
      </div>
    );
  }

  const settings = {
    className: "slider variable-width ",
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    beforeChange: (_, next) => {
      setCurrentSlide(next);
    },
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings} className="">
      {children}
    </Slider>
  );
};

const PlayButton = ({ showSideView }) => {
  return (
    <div className="">
      <ImageLayer
        src={
          showSideView
            ? ICONS.WATCH_BLACK_SIDE_VIEW
            : ICONS.APPLE_CASE_ALUMINUM_BLACK
        }
        alt="Apple Case Aluminum Black"
        style={{ zIndex: 5 }}
      />
    </div>
  );
};

const BigPlayButton = ({ showSideView }) => {
  return (
    <div className="">
      <ImageBigLayer
        src={
          showSideView
            ? ICONS.WATCH_BLACK_SIDE_VIEW_2
            : ICONS.APPLE_CASE_ALUMINUM_BLACK
        }
        alt="Apple Case Aluminum Black"
        style={{ zIndex: 5 }}
      />
    </div>
  );
};

const SizeCarousel = ({ images, watchName }) => {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [showSideView, setShowSideView] = useState(false);

  const handleClick = () => {
    setShowSideView(!showSideView);
  };

  return (
    <div className="mt-6 p-2 w-full h-full">
      <div className="mt-4 w-full relative">
        <PlayButton showSideView={showSideView} />
        <BigPlayButton showSideView={showSideView} />
        <CarouselContainer slidesToShow={5} setCurrentSlide={setCurrentSlide}>
          {images?.map((item, idx) => (
            <div key={idx}>
              <div className="mx-12 box-border flex flex-col items-center gap-2">
                <div className="relative w-[250px] h-[320px]">
                  <Image
                    src={item?.img}
                    alt="housemaid"
                    layout="fill"
                    objectFit="fill"
                  />
                </div>
              </div>
            </div>
          ))}
        </CarouselContainer>
        <DescriptionContainer>
          <SideViewDisplay
            style={{ color: "#06c", fontWeight: 600 }}
            onClick={() => handleClick()}
          >
            {showSideView ? <u> Front view</u> : <u> Side view </u>}
          </SideViewDisplay>
          <WatchNameDisplay>
            {watchName ?? "No Name Available"}
          </WatchNameDisplay>
          <DescriptionDisplay>
            42mm / 46mm Jet Black Aluminum Case with Lake Green Solo Loop
          </DescriptionDisplay>
          <PriceDisplay>From $399 / $429</PriceDisplay>
        </DescriptionContainer>
      </div>
    </div>
  );
};

export default SizeCarousel;