import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import HeaderForTheRest from "./headerFortheRest";

import { useRouter } from "next/router";
interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN = ["/", "/login", "/signup", "/onboarding1", "/onboarding2", "/onboarding3"];

const OnlyforRest = ["/", "/feeds", "/mypage", "/ootd", "/otherUser", "/tempClothes"];

const LayOut = (props: ILayoutProps) => {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);
  const isHidden2 = OnlyforRest.includes(router.asPath);

  return (
    <>
      {!isHidden && <Header />}
      {!isHidden2 && <HeaderForTheRest />}
      <div>{props.children}</div>
      {!isHidden && <Footer />}
    </>
  );
};

export default LayOut;
