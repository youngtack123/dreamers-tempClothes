import styled from "@emotion/styled";
import Slider from "react-slick";
import { keyframes } from "@emotion/react";
import { IFeedDetailButtonProps } from "./feedDetail.types";

export const Body = styled.body`
  background-color: transparent;
`;

export const Wrapper__Div = styled.div`
  width: 102rem;
  height: 70rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin: 0 auto; ;
`;

export const Wrapper_Left__Div = styled.div`
  width: 50.9rem;
  height: 66rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PhotoBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50.9rem;
  height: 45.5rem;
  border-radius: 1rem;
  margin-bottom: 2.5rem;
  overflow: hidden;
`;

export const ShowImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const ImageBox__Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Slick = styled(Slider)`
  width: 30rem;
  height: 6.5rem;
  margin-bottom: 25px;
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
  width: 6.5rem;
  height: 6.5rem;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
`;

export const ImageThum__Div = styled.div`
  width: 32.6rem;
  height: 7.4rem;
`;

export const ClothesBox__Div = styled.div`
  width: 50.9rem;
  height: 9.1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const ClothesInfo__Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 24rem;
  height: 4rem;
  padding: 1.2rem 1rem 1.3rem;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 10px;
`;

export const ClothesDetail__Span = styled.div`
  font-size: 1.4rem;
  margin-left: 0.7rem;
`;

export const OuterIcon__SVG = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  background-image: url("/images/coat.png");
`;

export const TopIcon__SVG = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url("/images/top.png");
`;

export const BottomIcon__SVG = styled.div`
  width: 1.1rem;
  height: 1.6rem;
  background-image: url("/images/pants.png");
  margin-left: 0.3rem;
`;

export const ETCIcon__SVG = styled.div`
  width: 1.3rem;
  height: 2rem;
  background-image: url("/images/dress.png");
`;

export const Wrapper_Right__Div = styled.div`
  width: 45.5rem;
  height: 66rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FeedDetailBox__Div = styled.div`
  width: 100%;
  height: 27rem;
  padding: 1rem 1.3rem 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

export const FeedDetail_Top__Div = styled.div`
  width: 43rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  border-bottom: 1px solid #bebebe;
`;

// 나중에 이미지로 수정하기
export const UserIcon__Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #bebebe;
`;

export const UserId__Div = styled.div`
  width: 33.2rem;
  font-size: 1.3rem;
  font-weight: 700;
  padding-left: 0.3rem;
  cursor: pointer;
`;

export const IconBox__Div = styled.div`
  width: 5.6rem;
  height: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LikeIcon__Div = styled.div`
  &:hover > div {
    visibility: visible;
  }
`;

export const LikeCountTooltip__Div = styled.div`
  color: #bebebe;
  font-size: 10px;
  position: absolute;
  top: -2.2rem;
  right: 0;
  text-align: right;
  visibility: hidden;
  width: 90px;
`;

export const Content__Div = styled.div`
  width: 43rem;
  height: 15.5rem;
  border-bottom: 1px solid #bebebe;
`;

export const ContentDetail__P = styled.p`
  font-size: 1.3rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  margin: 0.5rem 0;
`;

export const FeedDetail_Bottom__Div = styled.div`
  width: 43rem;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 0.5rem;
  position: relative;
`;

export const Tag__Div = styled.div`
  width: 40rem;
  height: auto;
  padding-top: 1.5rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 0.5rem;
`;

export const TagUnit__Span = styled.span`
  font-size: 1.2px;
  margin-right: 0.5rem;
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
  width: 4.3rem;
  height: 6rem;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  right: 0;
  top: 3rem;
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
  width: 45.5rem;
  height: 37rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bebebe;
  border-radius: 5px;
`;

export const CommentDetail__Div = styled.div`
  width: 45.5rem;
  height: 291px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CommentCreate__Div = styled.div`
  width: 43rem;
  height: 6.4rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #bebebe;
  padding-top: 1.2rem;
`;
