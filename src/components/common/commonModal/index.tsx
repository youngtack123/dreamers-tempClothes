import React, { useEffect } from "react";

const Modal = (props) => {
  const { open, close, header } = props;
  // useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed;
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = "";
  //     window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  //   };
  // }, []);
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"} style={{ overflowY: "hidden" }}>
      {open ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
