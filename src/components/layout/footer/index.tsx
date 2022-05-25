import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const FooterWrapperDiv = styled.div`
  width: 100%;
  height: 20rem;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterUlFlexDiv = styled.div`
  display: flex;
  margin-left: 18.7rem;
`;
const FooterHeadUl = styled.ul`
  margin-right: 13.8rem;
`;

const FooterHeadLi = styled.li`
  font-size: 1.4rem;
  font-weight: 700;
`;

const MenuLi = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1.1rem;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

const FooterLi = styled.li`
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1.1rem;
`;

const Footer = () => {
  const router = useRouter();

  const MoveToTempClothes = () => {
    router.push("/tempClothes");
  };
  const MoveToOOTD = () => {
    router.push("/ootd");
  };
  const MoveToMypage = () => {
    router.push("/mypage");
  };

  return (
    <FooterWrapperDiv>
      <FooterUlFlexDiv>
        <FooterHeadUl>
          <FooterHeadLi>Menu</FooterHeadLi>
          <MenuLi onClick={MoveToTempClothes}>오늘衣</MenuLi>
          <MenuLi onClick={MoveToOOTD}>OOTD</MenuLi>
          <MenuLi onClick={MoveToMypage}>마이 페이지</MenuLi>
        </FooterHeadUl>
        <FooterHeadUl>
          <FooterHeadLi>Made by</FooterHeadLi>
          <FooterLi>Dreamers</FooterLi>
        </FooterHeadUl>
        <FooterHeadUl>
          <FooterHeadLi>Contact</FooterHeadLi>
          <FooterLi>010-1234-5678</FooterLi>
          <FooterLi>abc@abc.com</FooterLi>
        </FooterHeadUl>
      </FooterUlFlexDiv>
    </FooterWrapperDiv>
  );
};

export default Footer;
