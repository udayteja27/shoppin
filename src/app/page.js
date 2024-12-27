"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ICONS from "@/assets";
import CustomCTA from "@/components/CustomCTA";
import Header from "@/components/header";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import BandCarousel, {
  DescriptionDisplay,
  PriceDisplay,
  SideViewDisplay,
  WatchNameDisplay
} from "@/components/BandCarousel";
import { bandData, casesData, collectionData, sizeData } from "@/utils/contantData";
import bandICon from "../assets/band.svg";
import caseIcon from "../assets/case.svg";
import sizeIcon from "../assets/size.svg";
import CaseCarousel from "@/components/CaseCarousel";
import SizeCarousel from "@/components/SizeCarousel";

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  top: 29rem;
  @media (min-width: 1024px, max-width: 1205px) {
    margin-top: 210px;
    top: 16rem;
  }
  @media (max-width: 1024px) {
    margin-top: 210px;
    top: 29rem;
  }
  @media (max-width: 768px) {
    margin-top: -110px;
    top: 29rem;
  }
  @media (max-width: 480px) {
    margin-top: -110px;
    top: 29rem;
  }
`;


const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
  text-align: left;
  white-space: nowrap;
  // padding: 50px 150px 0px 150px;
`;

const WrapperText = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
  text-align: left;
  padding: 58px 0px 0px 407px;
  margin-bottom: -5px @media (max-width: 1200px) {
    padding: 120px 0px 0px 150px;
  }
  @media (max-width: 1024px) {
    padding: 120px 0px 0px 100px;
  }
  @media (max-width: 768px) {
    padding: 120px 0px 0px 100px;
  }
  @media (max-width: 480px) {
    padding: 40px 0px 40px 40px;
  }
`;

const UpperText = styled.section`
  color: #1d1d1f;
  font-family: sans-serif;
  font-size: 21px;
  font-weight: 400;
  letter-spacing: 0.011em;
  line-height: 1.381002381;
  padding-bottom: 10px;
  text-align: left;
`;

const MainText = styled.section`
  font-family: sans-serif;
  font-size: 62px;
  font-weight: 600;
  letter-spacing: -0.009em;
  line-height: 1.0625;
  padding: 0px 0px 40px 0px;

  @media (max-width: 1200px) {
    font-size: 64px;
  }
  @media (max-width: 768px) {
    font-size: 38px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ImageWrapper = styled.section`
  position: relative;
  width: 723px;
  height: 723px;
  margin: -98px auto;

  @media (max-width: 1200px) {
    width: 723px;
    height: 723px;
    margin: 50px auto;
  }
  @media (max-width: 768px) {
    width: 423px;
    height: 423px;
    margin: 50px auto;
  }
  @media (max-width: 480px) {
    margin: 50px auto;
    width: 323px;
    height: 323px;
  }
`;

const ImageLayer = styled.img`
  position: absolute;
  display: flex;
  top: 100px;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ButtonComponent = styled.section`
  // position: fixed;
  margin: 0 10px;
  top: 87%;
  left: 37%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: sans-serif;
  gap: 18px;
`;

const FadeWrapper = styled(motion.div)`
  width: 100%;
  text-align: center;
`;

export default function Home() {
  const [actionOpen, setActionOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [visibleCarousel, setVisibleCarousel] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [watchName, setWatchName] = useState("Apple Watch Series 10");
  const [showSideView, setShowSideView] = useState(false);
  const [descriptionContainer, setdescriptionContainer] = useState(true);



  const handleSetName = (text) => {
    setWatchName(text);
  };

  const arrBtn = [
    {
      text: "Apple Watch Series 10",
      active: true,
      isVisible: true,
      color: "#000",
      iconHeight: "16px",
      iconWidth: "16px",
      onClick: () => handleSetName("Apple Watch Series 10"),
    },
    {
      text: "Apple Watch Hermès Series 10",
      active: true,
      isVisible: true,
      color: "#000",
      iconHeight: "16px",
      iconWidth: "16px",
      onClick: () => handleSetName("Apple Watch Hermès Series 10"),
    },
    {
      text: "Apple Watch SE",
      active: true,
      isVisible: true,
      color: "#000",
      iconHeight: "16px",
      iconWidth: "16px",
      onClick: () => handleSetName("Apple Watch SE"),
    },
  ];

  const handleClick = () => {
    setAnimate(true);
  };

  const handleShowBands = (text) => {
    setVisibleCarousel(text);
    setdescriptionContainer(false);
  };
  return (
    <>
      <Header
        actionOpen={actionOpen}
        animate={animate}
        arrBtn={arrBtn}
        setActionOpen={setActionOpen}
        setVisibleCarousel={setVisibleCarousel}
        setdescriptionContainer={setdescriptionContainer}
      />
      <Wrapper>
        {!animate && (
          <WrapperText>
            <UpperText>Apple Watch Studio</UpperText>
            <MainText>
              Choose a case. <br />
              Pick a band.
              <br />
              Create your own style.
            </MainText>
            <CustomCTA
              title="Get started"
              bgColor="#0071e3"
              color="#fff"
              fontSize="18px"
              padding="12px"
              borderRadius="25px"
              buttonWidth="130px"
              onClick={handleClick}
            />
          </WrapperText>
        )}

        {visibleCarousel === "" && (
          <motion.div
            className="box relative"
            whileHover="hover"
            animate={animate ? { y: -120, scale: 0.5 } : { y: 0, scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <AnimatePresence mode="wait">
              <FadeWrapper
                key={watchName}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <ImageWrapper className="relative">
                  <div>
                    {/* <ImageLayer
                  src={bandData[carouselIndex]}
                  alt={`fffff`}
                /> */}
                  </div>

                  {ICONS.BAND_1 && (
                    <motion.div
                      initial={animate && { x: "40%" }}
                      animate={animate && { x: 0 }}
                      transition={animate && {
                        duration: 0.8,
                        delay: 0,
                        ease: "easeOut"
                      }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 1
                      }}
                    >
                      <ImageLayer
                        src={collectionData[watchName]?.bandSrcFront || ICONS.BAND_1}
                        alt="Watch Band"
                      />
                    </motion.div>
                  )}

                  {/* Watch Dial (Now with higher z-index) */}
                  {ICONS.APPLE_CASE_ALUMINUM_BLACK && (
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 2
                    }}>
                      <ImageLayer
                        src={
                          showSideView
                            ? collectionData[watchName]?.watchsideview || ICONS.WATCH_BLACK_SIDE_VIEW
                            : collectionData[watchName]?.dialsrcFront || ICONS.APPLE_CASE_ALUMINUM_BLACK
                        }
                        alt="Apple Case Aluminum Black"
                      />
                    </div>
                  )}
                </ImageWrapper>
              </FadeWrapper>
            </AnimatePresence>
          </motion.div>
        )
        }

        {visibleCarousel === "Band" && (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <BandCarousel
              images={bandData}
              watchName={watchName}
              setShowSideView={setShowSideView}
              showSideView={showSideView}
              descriptionContainer={descriptionContainer}
            />
          </motion.div>
        )}

        {visibleCarousel === "Case" && (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <CaseCarousel images={casesData} watchName={watchName} descriptionContainer={descriptionContainer}/>
          </motion.div>
        )}

        {visibleCarousel === "Size" && (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <SizeCarousel images={sizeData} watchName={watchName} />
          </motion.div>
        )}

        {animate ? (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            {descriptionContainer ? (
              <DescriptionContainer style={{ position: "absolute", width: "100vw" }}>
                <AnimatePresence mode="wait">
                  <FadeWrapper
                    key={watchName}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <SideViewDisplay
                      style={{ color: "#06c", fontWeight: 600 }}
                      onClick={() => setShowSideView(!showSideView)}
                    >
                      {showSideView ? <u>Front view</u> : <u>Side view</u>}
                    </SideViewDisplay>
                    <WatchNameDisplay>
                      {watchName}
                    </WatchNameDisplay>
                    <DescriptionDisplay>
                      {collectionData[watchName]?.description || "No description available"}
                    </DescriptionDisplay>
                    <PriceDisplay>
                      From ${collectionData[watchName]?.price || "N/A"}
                    </PriceDisplay>
                  </FadeWrapper>
                </AnimatePresence>
              </DescriptionContainer>
            ): ""}

            <ButtonComponent>
              <CustomCTA
                title="Size"
                showIcon={true}
                url={sizeIcon}
                bgColor="#e8e8ed"
                color="#1d1d1f"
                fontSize="18px"
                padding="12px"
                borderRadius="25px"
                buttonWidth="130px"
                onClick={() => handleShowBands("Size")}
              />
              <CustomCTA
                title="Case"
                showIcon={true}
                url={caseIcon}
                bgColor="#e8e8ed"
                color="#1d1d1f"
                fontSize="18px"
                padding="12px"
                borderRadius="25px"
                buttonWidth="130px"
                onClick={() => handleShowBands("Case")}
              />
              <CustomCTA
                title="Band"
                showIcon={true}
                url={bandICon}
                bgColor="#e8e8ed"
                color="#1d1d1f"
                fontSize="18px"
                padding="12px"
                borderRadius="25px"
                buttonWidth="130px"
                onClick={() => handleShowBands("Band")}
              />
            </ButtonComponent>
          </motion.div>
        ): ""}
      </Wrapper>
    </>
  );
}