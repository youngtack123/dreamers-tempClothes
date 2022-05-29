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
  margin-right: 2.7rem;
`;
const UserNameSpan = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
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
      location.reload();
      router.push("/");
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
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
        <Stack direction="row" spacing={2}>
          <div>
            <Button ref={anchorRef} id="composition-button" aria-controls={open ? "composition-menu" : undefined} aria-expanded={open ? "true" : undefined} aria-haspopup="true" onClick={handleToggle}>
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
      </HeaderContentDiv>
    </HeaderWrapperDiv>
  );
};

export default Header;
