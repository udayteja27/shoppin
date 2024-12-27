"use client";

import React, { useState } from "react";
import styled from "styled-components";
import ICONS from "../assets/index";
import { zIndexValues } from "../utils/style";
import { motion } from "motion/react";
import ActionButton from "./ActionButton";
import CustomCTA from "./CustomCTA";
import { useRouter } from "next/navigation";

const OuterWrapper = styled.div`
  z-index: ${zIndexValues.HEADER};
`
const Wrapper = styled.section`
  top: 0;
  z-index: ${zIndexValues.HEADER};
  height: 61px;
  width: calc(100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  margin: 26px 0px 0px 34px;
`;
const Right = styled.div`
  padding: 25px 35px 5px 0px;
`;

const Profile = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  z-index: ${zIndexValues.HEADER};
  justify-content: flex-start;
  padding: 25px 20px 5px 0px;
  gap: 16px;

  @media (max-width: 480px) {
    padding: 25px 5px 5px 0px;
     justify-content: space-between;
  }
`;
const ViewRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
const ViewLeft = styled.p`
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
`;

const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #32323270;
  z-index: ${zIndexValues.SIDEBAR};
  display: ${(props) => (props.visible == "true" ? "block" : "none")};
`;

const Header = ({ actionOpen, setActionOpen, arrBtn, animate, setVisibleCarousel, setdescriptionContainer }) => {
  const router = useRouter();
  const [selectedCollection, setSelectedCollection] = useState('Apple Watch Series 10');

  const handleActionClick = () => {
    setActionOpen(!actionOpen);
  };

  const handleSelect = (value) => {
    setVisibleCarousel("")
    setSelectedCollection(value);
    setTimeout(() => {
      setdescriptionContainer(true)
    }, 2000);
  };

  const handleClick = () => {
    router.push(ICONS.PRODUCT_PAGE);
  };
  return (
    <OuterWrapper>
      <Overlay
        visible={actionOpen.toString()}
        onClick={() => setActionOpen(false)}
      />
      <Wrapper>
        <Left>
          <Img
            src={ICONS.APPLE_ICON}
            alt="Saathi_Logo"
            width="90px"
            height="20px"
          />
        </Left>
        {animate && (
          <>
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Profile onClick={() => handleActionClick()}>
                <ViewRight>
                  <ViewLeft>{"Collections"}</ViewLeft>
                  <Img
                    src={actionOpen ? ICONS?.ARROW_UP : ICONS?.ARROW_DOWN}
                    alt="arrowDown"
                    width="14px"
                    height="14px"
                  />
                </ViewRight>
                {actionOpen ? (
                  <ActionButton
                    arrBtn={arrBtn}
                    setActionOpen={setActionOpen}
                    isLast
                    width="280px"
                    fontSize="17px"
                    top="60px"
                    left="-80px"
                    right="10px"
                    selectedValue={selectedCollection}
                    onSelect={handleSelect}
                  />
                ) : null}
              </Profile>
            </motion.div>
            <motion.div
              className="box"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Right>
                <CustomCTA
                  title="Save"
                  bgColor="#0071e3"
                  color="#fff"
                  fontSize="14px"
                  padding="8px"
                  borderRadius="25px"
                  buttonWidth="65px"
                  onClick={handleClick}
                />
              </Right>
            </motion.div>
          </>
        )}
      </Wrapper>
    </OuterWrapper>
  );
};

export default Header;