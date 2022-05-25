import styled from "@emotion/styled";
import LikeIcon from "../../../../public/images/emptyheart.svg";
import DMIcon from "../../../../public/images/dm.svg";
import Slider from "react-slick";

export const Body = styled.body`
  background-color: transparent;
`;

export const Wrapper__Div = styled.div`
  width: 1020px;
  height: 700px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #c4c4c4;
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
  background: #eeeeee;
  border-radius: 10px;
  margin-bottom: 25px;
  position: relative;
`;

export const ShowImg = styled.img`
  width: 340px;
  height: 330px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
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
`;
export const ChildDiv = styled.div`
  position: absolute;
  color: black;
  top: 1px;
  left: 54px;
`;

export const ImageDetail__Img = styled.img`
  width: 100%;
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
  width: 240px;
  height: 40px;
  padding: 12px 10px 13px;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 10px;
`;

export const ClothesDetail__Span = styled.div`
  font-size: 14px;
`;

export const OuterIcon__SVG = styled.div``;

export const TopIcon__SVG = styled.div``;

export const BottomIcon__SVG = styled.div``;

export const ETCIcon__SVG = styled.div``;

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
`;

export const IconBox__Div = styled.div`
  width: 46px;
  height: 16px;
  display: flex;
  justify-content: space-between;
`;

// export const LikeIcon__SVG = styled(LikeIcon)`
//   width: 18px;
//   height: 16px;
//   stroke: #bebebe;
// `;

// export const DMIcon__SVG = styled(DMIcon)`
//   width: 18px;
//   height: 15px;
//   fill: #bebebe;
// `;

export const Content__Div = styled.div`
  width: 430px;
  height: 155px;
  border-bottom: 1px solid #bebebe;
`;

export const ContentDetail__P = styled.p`
  width: 100%;
  font-size: 13px;
  padding-left: 5px;
  margin: 5px 0;
`;

export const FeedDetail_Bottom__Div = styled.div`
  width: 430px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 5px;
  position: relative;
`;

export const Tag__Div = styled.div`
  width: 400px;
  height: 30px;
  padding-top: 15px;
  display: flex;
  justify-content: flex-start;

  padding-left: 5px;
`;

export const TagUnit__Span = styled.span`
  font-size: 12px;
  margin-right: 10px;
`;

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
  bottom: 20px;
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
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #bebebe;
  border-radius: 5px;
`;

export const CommentDetail__Div = styled.div`
  width: 430px;
  height: 291px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* gap: 1; */
`;

export const CommentCreate__Div = styled.div`
  width: 430px;
  height: 49px;
  padding: 12px 15px 0 25px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #bebebe;
`;

export const CommentInput__Input = styled.input`
  width: 359px;
  height: 37px;
  background: #eeeeee;
  border-radius: 30px;
  padding: 11px 16px;
  border: none;
`;

export const CommentSubmitBtn__Button = styled.button`
  width: 14px;
  height: 20px;
`;
