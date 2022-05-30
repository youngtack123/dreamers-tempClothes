import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { toast } from "react-toastify";

const HeaderWrapperDiv = styled.div`
  background-color: white;
  width: 100%;
  height: 200px;
  padding: 25px 120px 10px;
  z-index: 9999;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Pretendard, SUIT;
`;

const HeaderContentDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MainLogoImg = styled.img`
  width: 9rem;
  height: 7.5rem;
  margin-bottom: 10px;
  cursor: pointer;
`;

const HorizonBarDiv = styled.div`
  width: 120rem;
  height: 1px;
  background: #ddd;
  // border: 0.5px solid #eee;
  position: relative;
`;

const HiUserSpan = styled.span`
  position: absolute;
  top: 113px;
  display: inline-block;
  padding: 0.3rem 2rem;
  background-color: #f9f9f9;
  border-left: 5px solid #fff;
  border-right: 5px solid #fff;
  color: #727272;
  border-radius: 100px;
  font-size: 14px;
`;
const UserNameSpan = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: #333;
`;

const MainMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 124px;
  background-color: #eee;
`;
const MainMenuNav = styled.nav``;

const MainMenuUl = styled.ul`
  display: flex;
  width: 59.6rem;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  font-size: 16px;
  margin: 0;
`;
const TodayClothesLi = styled.li`
  cursor: pointer;
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #ffea86;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const OOTDLi = styled.li`
  cursor: pointer;
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #ffea86;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const MyPageLi = styled.li`
  cursor: pointer;
`;

const LoginLi = styled.li`
  cursor: pointer;
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #ffea86;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const SignupLi = styled.li`
  cursor: pointer;
  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px #ffea86;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

const ItemImg = styled.img`
  width: 3rem;
  height: 3rem;
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

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const logout = async () => {
    try {
      router.push("/");
      await m_logout();
      localStorage.clear();
      // location.reload();
      router.push("/");
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  const moveToTodayCloth = () => {
    router.push("/tempClothes");
    setOpen(false);
  };
  const moveToOOTD = () => {
    router.push("/ootd");
    setOpen(false);
  };
  const moveToMyPage = () => {
    router.push("/mypage");
    setOpen(false);
  };
  const goBacktoLanding = () => {
    router.push("/");
    setOpen(false);
  };

  const moveToLogin = () => {
    router.push("/login");
  };

  const moveToSignup = () => {
    router.push("/signup");
  };

  return (
    <HeaderWrapperDiv>
      <HeaderContentDiv>
        <MainLogoImg src="/images/mainlogo.png" onClick={goBacktoLanding}></MainLogoImg>
        <HorizonBarDiv></HorizonBarDiv>
        {data?.fetchUser.nickname ? (
          <HiUserSpan>
            기온에 맞는 옷을 입고 싶은 <UserNameSpan>{data?.fetchUser.nickname}</UserNameSpan> 님, 환영합니다.
          </HiUserSpan>
        ) : (
          <></>
        )}

        <MainMenuNav>
          <MainMenuUl>
            <TodayClothesLi onClick={moveToTodayCloth}>오늘衣</TodayClothesLi>
            <OOTDLi onClick={moveToOOTD}>OOTD</OOTDLi>
            {data?.fetchUser ? (
              <MyPageLi>
                <Stack direction="row" spacing={2}>
                  <div>
                    <Button
                      ref={anchorRef}
                      id="composition-button"
                      aria-controls={open ? "composition-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}
                    >
                      <ItemImg src="/images/headerUser.png" />
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="bottom-start" transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList autoFocusItem={open} id="composition-menu" aria-labelledby="composition-button" onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={moveToMyPage}>마이페이지</MenuItem>
                                <MenuItem onClick={logout}>로그아웃</MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </div>
                </Stack>
              </MyPageLi>
            ) : (
              <>
                <LoginLi onClick={moveToLogin}>로그인</LoginLi>
                <SignupLi onClick={moveToSignup}>회원가입</SignupLi>
              </>
            )}
          </MainMenuUl>
        </MainMenuNav>
      </HeaderContentDiv>
    </HeaderWrapperDiv>
  );
};

export default Header;
