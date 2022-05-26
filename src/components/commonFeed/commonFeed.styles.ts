import styled from "@emotion/styled";
import Fillheart from "../../../public/images/fillheart.svg";
import Emptyheart from "../../../public/images/emptyheart.svg";
import DMIcon from "../../../public/images/dm.svg";

export const FeedTop__Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const UserIcon__Div = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #bebebe;
  margin-right: 5px;
`;

export const UserName__Span = styled.span`
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
`;

export const FeedBody__Div = styled.div`
  width: 230px;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover > div {
    opacity: 100;
  }
`;

export const FeedImageBox__Div = styled.div`
  width: 230px;
  height: 300px;
  // background-color: #bebebe;
  overflow: hidden;
  // position: relative;
`;

export const FeedImage__Img = styled.img`
  width: 228px;
  height: 100%;
  object-fit: cover;
  border: hidden;
`;

export const HoverIcon__Div = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition-duration: 0.15s;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%);
`;

export const LikeHeart = styled(Emptyheart)`
  fill: #f14848;
  height: 18px;
  width: 17px;
  /* position: absolute;
  bottom: 10px;
  left: 10px; */
`;

export const UnLikeHeart = styled(Emptyheart)`
  fill: transparent;
  stroke: #fff;
  stroke-width: 1px;
  height: 15px;
  width: 17px;
  /* position: absolute;
  bottom: 20px;
  left: 20px; */
`;

export const Dm = styled(DMIcon)`
  fill: #fff;
  height: 14px;
  width: 16px;
  /* position: absolute;
  bottom: 10px;
  right: 10px; */
`;

export const FeedBottom__Div = styled.div`
  width: 230px;
  padding: 10px 10px 5px;
`;

export const BottomTop__Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const SelectedTag__Span = styled.span`
  background: #fff2b2;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  text-align: center;
  padding: 2px 6px;
`;

export const NoSelectedTag__Span = styled.span`
  background: #dddddd;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  text-align: center;
  padding: 2px 6px;
`;

export const BottomBottom__Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ClothInfo__Div = styled.div`
  width: 210px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const ClothIcon__Div = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #333;
  margin-right: 10px;
`;

export const ClothName__Span = styled.span`
  width: 170px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
