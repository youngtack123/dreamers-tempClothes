import React, { useRef } from "react";
import styled from "@emotion/styled";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Menu, Dropdown, Space } from "antd";

const HeaderWrapperDiv = styled.div`
  background-color: white;
  width: 100%;
  z-index: 9999;
  border-bottom: 1px solid #bebebe;
`;

const HeaderContentDiv = styled.div`
  height: 13.3rem;
  display: flex;
  justify-content: row;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 2.1rem;
  margin-left: 15.1rem;
`;
const TodayClothesDiv = styled.div`
  position: relative;
  /* font-weight: 600; */
  font-size: 1.8rem;
  cursor: pointer;
`;

const HeaderContentOOTDDiv = styled.div`
  position: relative;
  margin-left: 5.1rem;
  margin-right: 9.8rem;
  /* font-weight: 600; */
  font-size: 1.8rem;
  cursor: pointer;
`;
const MainLogoImg = styled.img`
  width: 9.3rem;
  height: 7.8rem;
  cursor: pointer;
`;
const HiUserDiv = styled.div`
  font-size: 1.2rem;
  margin-left: 9.8rem;
`;
const UserNameSpan = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
`;
const ItemImg = styled.img`
  width: 3rem;
  height: 3rem;
  margin-left: 2.7rem;
  cursor: pointer;
`;

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;
const FETCH_USER = gql`
  query {
    fetchUser {
      nickname
    }
  }
`;

const Header = () => {
  const [m_logout] = useMutation(LOGOUT);
  const { data } = useQuery(FETCH_USER);
  const router = useRouter();

  const logout = async () => {
    try {
      router.push("/");
      const logoutResult = await m_logout();
      // console.log("logoutResult", logoutResult);
      alert("로그아웃 성공!");
      localStorage.clear();
      location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  const moveToTodayCloth = () => {
    router.push("/tempClothes");
  };
  const moveToOOTD = () => {
    router.push("/ootd");
  };
  const moveToMyPage = () => {
    router.push("/mypage");
  };
  const goBacktoLanding = () => {
    router.push("/");
  };

  return (
    <HeaderWrapperDiv>
      <HeaderContentDiv>
        <TodayClothesDiv onClick={moveToTodayCloth}>오늘衣</TodayClothesDiv>
        <HeaderContentOOTDDiv onClick={moveToOOTD}>OOTD</HeaderContentOOTDDiv>
        <MainLogoImg src="/images/mainlogo.png" onClick={goBacktoLanding}></MainLogoImg>
        <HiUserDiv>
          기온에 맞는 옷을 입고 싶은 <UserNameSpan>{data?.fetchUser.nickname}</UserNameSpan> 님, 환영합니다!
        </HiUserDiv>
        <ItemImg src="/images/headerUser.png" />
      </HeaderContentDiv>
    </HeaderWrapperDiv>
  );
};

export default Header;
