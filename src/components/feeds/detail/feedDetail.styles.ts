import styled from "@emotion/styled";
import LikeIcon from "../../../public/images/emptyheart.svg";
import DMIcon from "../../../public/images/dm.svg";

export const Wrapper__Div = styled.div`
  width: 1020px;
  height: 700px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

export const Wrapper_Left__Div = styled.div`
  width: 509px;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageBox__Div = styled.div`
  width: 509px;
  height: 455px;
  overflow: hidden;
  border: 1px solid #bebebe;
  border-radius: 10px;
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
  padding: 20px 13px 15px 12px;
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
  border-bottom: 1px solid #bebebe;
`;

// 나중에 이미지로 수정하기
export const UserIconImg__Div = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #bebebe;
`;

export const UserId__Div = styled.div`
  width: 332px;
  padding-left: 20px;
  font-weight: 600;
`;

export const IconBox__Div = styled.div`
  width: 46px;
  height: 16px;
  display: flex;
  justify-content: space-between;
`;

export const LikeIcon__SVG = styled(LikeIcon)`
  width: 18px;
  height: 16px;
  stroke: #bebebe;
`;

export const DMIcon__SVG = styled(DMIcon)`
  width: 18px;
  height: 15px;
  fill: #bebebe;
`;

export const Content__Div = styled.div`
  width: 430px;
  height: 155px;
  border-bottom: 1px solid #bebebe;
`;

export const ContentDetail__P = styled.p`
  width: 100%;
  height: 155px;
`;

export const Tag__Div = styled.div`
  width: 430px;
  height: 30px;
  padding-top: 15px;
  display: flex;
  justify-content: flex-start;
  /* gap: 1; */
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
