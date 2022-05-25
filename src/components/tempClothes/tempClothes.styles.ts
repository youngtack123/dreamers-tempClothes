import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* position: relative; */
`;
export const LeftTempDiv = styled.div`
  /* width: 33.5rem; */
  width: 335px;
  height: 548px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: fixed;
  /* top: 0px; */
  /* z-index: 1; */
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0.7rem 0.6rem 1.2rem -0.5rem rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding-right: 2.1rem;
  margin-top: 2.6rem;
  margin-right: 80rem;
`;
// ======================================================
//                      현재 시간 부분
// ======================================================
export const TimeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-top: 2.6rem;
`;
export const CurrentTimeDiv = styled.div`
  font-weight: 500;
  font-size: 2rem;
  font-size: 20px;
  color: #b7e576;
  margin-bottom: 1.5rem;
`;
export const Daytime = styled.div`
  font-weight: 800;
  /* font-size: 2.8rem; */
  font-size: 28px;
  color: #b7e576;
`;
export const Time = styled.div`
  font-weight: 800;
  /* font-size: 2.8rem; */
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
  align-items: center;
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
  justify-content: center;
  align-items: flex-end;
`;
export const TodayDiv = styled.div`
  font-weight: 500;
  /* font-size: 2rem; */
  font-size: 20px;
  color: #9ed763;
  margin-bottom: 1.5rem;
`;
export const TempNumDiv = styled.div`
  font-weight: 800;
  /* font-size: 3.4rem; */
  font-size: 37px;
  color: #9ed763; // 연두
  /* color: #FFEA86; // 노랑 */
  /* color: #9DC4FF; // 파랑 */
`;
export const DegreeDiv = styled.div`
  font-weight: 800;
  /* font-size: 3.4rem; */
  font-size: 37px;
  color: #9ed763; // 연두
  /* color: #FFEA86; */ // 노랑
  /* color: #9DC4FF; // 파랑 */
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
  margin-bottom: 3.4rem;
`;
export const PageDiv = styled.div`
  font-weight: 500;
  /* font-size: 2rem; */
  font-size: 20px;
  color: rgba(68, 189, 72, 0.7);
  margin-bottom: 1.5rem;
`;
export const RecommendTop = styled.div`
  /* font-size: 3.2rem; */
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
  /* flex-direction: row; */
  flex-flow: row-reverse wrap;
  margin-left: 3rem;
  margin-top: 2.6rem;
  justify-content: flex-end;
  margin-left: 40rem;
`;
export const LookBookItemImg = styled.img`
  width: 230px;
  height: 300px;
  border-radius: 1rem;
  margin-right: 3.2rem;
  margin-bottom: 3rem;
  transition: all 0.2s linear;

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
  margin-top: 850px;
  position: fixed;
  /* margin-left: 1120px; */
  cursor: pointer;
  :hover {
    background-color: #ffea86;
  }
  bottom: 50px;
  right: 355px;
`;
