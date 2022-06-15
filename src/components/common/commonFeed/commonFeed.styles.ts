import styled from "@emotion/styled";
import Emptyheart from "../../../../public/images/emptyheart.svg";
import DMIcon from "../../../../public/images/dm.svg";

interface ISelectRegionSpanProps {
  myRegion: boolean;
}

interface ISelectTagSpanProps {
  tagSelected: boolean;
}

export const FeedTop__Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

export const UserIcon__Img = styled.img`
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
  cursor: pointer;
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
  overflow: hidden;
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
  cursor: pointer;
`;

export const UnLikeHeart = styled(Emptyheart)`
  fill: transparent;
  stroke: #fff;
  stroke-width: 1px;
  height: 15px;
  width: 17px;
  cursor: pointer;
`;

export const Dm = styled(DMIcon)`
  fill: #fff;
  height: 14px;
  width: 16px;
  cursor: pointer;
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

export const SelectedRegion__Span = styled.span`
  background: ${(props: ISelectRegionSpanProps) => (props.myRegion ? "#fff2b2" : "#dddddd")};
  border: ${(props) => (props.myRegion ? "1px solid #ffdd87" : "")};
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  text-align: center;
  padding: 2px 6px;
`;

export const SelectedTag__Span = styled.span`
  background: ${(props: ISelectTagSpanProps) => (props.tagSelected ? "#fff2b2" : "#dddddd")};
  border: ${(props) => (props.tagSelected ? "1px solid #ffdd87" : "")};
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
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

export const ClothName__Span = styled.span`
  width: 170px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 5px;
`;
