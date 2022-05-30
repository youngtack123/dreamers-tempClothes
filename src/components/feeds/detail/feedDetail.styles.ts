import styled from "@emotion/styled";
import LikeIcon from "../../../../public/images/emptyheart.svg";
import DMIcon from "../../../../public/images/dm.svg";
import Slider from "react-slick";
import { keyframes } from "@emotion/react";
import { IFeedDetailButtonProps } from "./feedDetail.types";

export const Body = styled.body`
  background-color: transparent;
`;

export const Wrapper__Div = styled.div`
  width: 1020px;
  height: 700px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin: 0 auto; ;
`;

export const Wrapper_Left__Div = styled.div`
  width: 509px;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PhotoBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 509px;
  height: 455px;
  /* background: #eeeeee; */
  border-radius: 10px;
  margin-bottom: 25px;
  // position: relative;
  overflow: hidden;
`;

export const ShowImg = styled.img`
  width: 100%;
  //height: 330px;
  border-radius: 10px;
`;

export const ImageBox__Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* width: 509px;
  height: 455px;
  overflow: hidden;
  border: 1px solid #bebebe;
  border-radius: 10px; */
`;

export const Slick = styled(Slider)`
  width: 300px;
  height: 65px;
  margin-bottom: 25px;
  /* margin-left: 10px; */
  .slick-slider /*슬라이드 틀 조정*/ {
    display: inline-block;
  }
  .slick-prev {
    left: -20px !important;
    z-index: 1000;
    background-color: white;
  }

  .slick-next {
    right: -20px !important;
    z-index: 1000;
    background-color: white;
  }
  .slick-prev:before {
    content: "<";
    color: black;
    font-weight: 600;
    font-family: "SUIT";
  }
  .slick-next:before {
    content: ">";
    color: black;
    font-weight: 600;
    font-family: "SUIT";
  }
`;

export const MomDiv = styled.div`
  position: relative;
  overflow: hidden;
`;
export const ChildDiv = styled.div`
  position: absolute;
  color: black;
  top: 1px;
  left: 54px;
`;

export const ImageDetail__Img = styled.img`
  width: 65px;
  height: 65px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
`;

export const ImageThum__Div = styled.div`
  width: 326px;
  height: 74px;
`;

export const ClothesBox__Div = styled.div`
  width: 509px;
  height: 91px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ClothesInfo__Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 240px;
  height: 40px;
  padding: 12px 10px 13px;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 10px;
`;

export const ClothesDetail__Span = styled.div`
  font-size: 14px;
  margin-left: 7px;
`;

export const OuterIcon__SVG = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("/images/coat.png");
`;

export const TopIcon__SVG = styled.div`
  width: 16px;
  height: 16px;
  background-image: url("/images/top.png");
`;

export const BottomIcon__SVG = styled.div`
  width: 11px;
  height: 16px;
  background-image: url("/images/pants.png");
  margin-left: 3px;
`;

export const ETCIcon__SVG = styled.div`
  width: 13px;
  height: 20px;
  background-image: url("/images/dress.png");
`;

export const Wrapper_Right__Div = styled.div`
  width: 455px;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FeedDetailBox__Div = styled.div`
  width: 100%;
  height: 270px;
  padding: 10px 13px 15px 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

export const FeedDetail_Top__Div = styled.div`
  width: 430px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-bottom: 1px solid #bebebe;
`;

// 나중에 이미지로 수정하기
export const UserIconImg__Div = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #bebebe;
`;

export const UserId__Div = styled.div`
  width: 332px;
  font-size: 13px;
  font-weight: 700;
  padding-left: 3px;
  cursor: pointer;
`;

export const IconBox__Div = styled.div`
  width: 56px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LikeCount__Span = styled.span`
  padding: 2px 10px;
  background-color: #fff2b2;
  border-radius: 30px;
  font-size: 12px;
  position: absolute;
  top: -30px;
  right: -6px;
`;

export const Content__Div = styled.div`
  width: 430px;
  height: 155px;
  border-bottom: 1px solid #bebebe;
`;

export const ContentDetail__P = styled.p`
  width: 100%;
  font-size: 13px;
  padding-top: 5px;
  padding-left: 5px;
  margin: 5px 0;
`;

export const FeedDetail_Bottom__Div = styled.div`
  width: 430px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 5px;
  position: relative;
`;

export const Tag__Div = styled.div`
  width: 400px;
  height: auto;
  padding-top: 15px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 5px;
`;

export const TagUnit__Span = styled.span`
  font-size: 12px;
  margin-right: 5px;
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

// 수정 삭제 토글 버튼
export const SettingBox__Div = styled.div`
  width: 43px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  position: absolute;
  right: 0;
  top: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  animation: ${(props: IFeedDetailButtonProps) => (props.isOpen ? fadeIn : fadeOut)} 0.2s ease-out;
`;

export const Edit__Span = styled.span`
  &:active,
  :hover {
    font-weight: 700;
  }
  cursor: pointer;
`;

export const Delete__Span = styled.span`
  &:active,
  :hover {
    font-weight: 700;
  }
  cursor: pointer;
`;

export const CommentBox__Div = styled.div`
  width: 455px;
  height: 370px;
  // padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bebebe;
  border-radius: 5px;
`;

export const CommentDetail__Div = styled.div`
  width: 100%;
  height: 291px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* gap: 1; */
`;

export const CommentCreate__Div = styled.div`
  width: 430px;
  height: 64px;
  //padding: 12px 15px 0 25px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #bebebe;
  padding-top: 12px;
`;
