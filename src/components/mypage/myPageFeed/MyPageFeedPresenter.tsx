import React from "react";
import * as S from "./MyPageFeedStyles";
const MyPageFeedPresenter = () => {
  const testArr = Array.from({ length: 16 }, (v, i) => i + 1);
  console.log(testArr);
  return (
    <S.RealMyPageFeedWrapper>
      <S.MyPageFeedWrapper>
        <div>
          <S.MyPageFeedHeadP>나衣 룩북</S.MyPageFeedHeadP>
          <S.MyPageFeedLookBooxDiv>
            {testArr.map((res, index) => {
              return (
                <div
                  key={index}
                  style={{ marginBottom: "1.5rem", marginRight: "1.1rem" }}
                >
                  <img src="../images/image 37.png" alt="test"></img>
                </div>
              );
            })}
          </S.MyPageFeedLookBooxDiv>
        </div>
      </S.MyPageFeedWrapper>
    </S.RealMyPageFeedWrapper>
  );
};

export default MyPageFeedPresenter;
