import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import { useRouter } from "next/router";
interface ILayoutProps {
  children: ReactNode;
}

const HIDDEN = ["/"];

const LayOut = (props: ILayoutProps) => {
  const router = useRouter();
  const isHidden = HIDDEN.includes(router.asPath);
  return (
    <>
      {!isHidden && <Header></Header>}
      <div>{props.children}</div>
      {!isHidden && <Footer></Footer>}
    </>
  );
};

export default LayOut;
