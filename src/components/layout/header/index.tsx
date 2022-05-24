import React from "react";
import styled from "@emotion/styled";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { accessTokenState } from "../../common/store/index";
const HeaderWrapperDiv = styled.div`
  background-color: white;
  width: 100%;
  z-index: 9999;
  height: 8rem;
  border-bottom: 1px solid #bebebe;
`;

const HeaderContentDiv = styled.div`
  font-size: 1.8rem;
  display: flex;
  justify-content: flex-end;
  height: 8rem;
  align-items: center;
`;

const HeaderContentOOTDDiv = styled.div`
  margin-left: 9.2rem;
  margin-right: 8.5rem;
`;

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

const Header = () => {
  const [m_logout] = useMutation(LOGOUT);
  const router = useRouter();

  const logout = async () => {
    try {
      router.push("/");
      const logoutResult = await m_logout();
      console.log("logoutResult", logoutResult);
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

  return (
    <HeaderWrapperDiv>
      <HeaderContentDiv>
        <div onClick={moveToTodayCloth}>오늘衣</div>
        <HeaderContentOOTDDiv onClick={moveToOOTD}>#OOTD</HeaderContentOOTDDiv>
        <img src="../images/user.png" width="40px" height="40px" style={{ marginRight: "17.2rem " }} onClick={moveToMyPage}></img>
        <div onClick={logout}>로그아웃</div>
      </HeaderContentDiv>
    </HeaderWrapperDiv>
  );
};

export default Header;
