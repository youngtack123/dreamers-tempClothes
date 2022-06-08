import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const LeftTempDiv = styled.div`
  width: 335px;
  height: 548px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0.7rem 0.6rem 1.2rem -0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 2.8rem 2.1rem 4.2rem;
  margin-top: 2.6rem;
  /* margin-right: 80rem; */
  position: sticky;
  top: 0px;
`;
// ======================================================
//                      현재 시간 부분
// ======================================================
export const TimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
export const CurrentTimeDiv = styled.div`
  font-weight: 500;
  font-size: 2rem;
  font-size: 20px;
  color: #b7e576;
`;
export const Daytime = styled.div`
  font-weight: 800;
  font-size: 28px;
  color: #b7e576;
`;
export const Time = styled.div`
  font-weight: 800;
  font-size: 28px;
  color: #b7e576;
  margin-bottom: 4.5rem;
`;
// ======================================================
//                      선택 지역 부분
// ======================================================
export const MiddleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const RegionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 51px;
`;
export const SelectedRegionDiv = styled.div`
  font-weight: 800;
  font-size: 34px;
  color: #9ed763;
  margin-bottom: 95px;
`;
// ======================================================
//                       현재 기온 부분
// ======================================================
export const TodayTempDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const TodayDiv = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #9ed763;
`;
export const TempNumDiv = styled.div`
  font-weight: 800;
  font-size: 37px;
  color: #9ed763;
`;
export const DegreeDiv = styled.div`
  font-weight: 800;
  font-size: 37px;
  color: #9ed763;
  margin-bottom: 5rem;
`;
// ======================================================
//                   추천 옷차림 부분
// ======================================================
export const TagDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const PageDiv = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: rgba(68, 189, 72, 0.7);
`;
export const RecommendTop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: rgba(68, 189, 72, 0.7);
  text-decoration: underline;
`;
// ======================================================
//                   사진들 뿌리는 부분
// ======================================================

export const RightLookBookDiv = styled.div`
  width: 78.6rem;
  display: flex;
  flex-flow: row-reverse wrap;
  margin-left: 3rem;
  margin-top: 2.6rem;
  justify-content: flex-end;
  /* margin-left: 40rem; */
`;
export const LookBookItemImg = styled.img`
  width: 230px;
  height: 300px;
  border-radius: 1rem;
  margin-right: 3.2rem;
  margin-bottom: 3rem;
  transition: all 0.2s linear;
  cursor: pointer;

  :hover {
    filter: drop-shadow(1px 2px 7px rgba(0, 0, 0, 0.3));
    transform: scale(1.05);
  }
`;
// ======================================================
//                          등록 버튼
// ======================================================
export const WriteButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #b7e576;
  border: none;
  font-weight: 400;
  font-size: 40px;
  color: white;
  position: fixed;
  cursor: pointer;
  :hover {
    background-color: #ffea86;
  }
  bottom: 50px;
  right: 355px;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
    0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ScrollButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 130px;
  right: 355px;
  background-color: #b7e576;
  color: #fff;
  cursor: pointer;
  animation: ${fadeIn} 0.2s ease-out;
`;
export const UpArrowImg = styled.img``;
