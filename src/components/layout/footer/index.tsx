import React from "react";
import styled from "@emotion/styled";

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
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 700;
`;

const FooterLi = styled.li`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.6rem;
  margin-top: 1.1rem;
`;

const Footer = () => {
  return (
    <FooterWrapperDiv>
      <img src="../images/logo.png"></img>
      <FooterUlFlexDiv>
        <FooterHeadUl>
          <FooterHeadLi>Menu</FooterHeadLi>
          <FooterLi>오늘衣</FooterLi>
          <FooterLi>OOTD</FooterLi>
          <FooterLi>마이 페이지</FooterLi>
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
