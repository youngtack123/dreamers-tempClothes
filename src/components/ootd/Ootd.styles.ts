import styled from "@emotion/styled";
import Masonry from "react-masonry-css";

export const Container__Div = styled.div`
  display: flex;
  width: 1200px;
  min-height: 815px;
  height: auto;
  position: relative;
  margin: 0 auto;
  padding-top: 25px;
`;

export const Container_head__Div = styled.div`
  display: flex;
  width: 120rem;
  height: 80px;
  justify-content: flex-start;
`;

export const Container_Side__Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  position: fixed;
`;

export const Container_Body__Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 230px;
  width: 965px;
`;

export const TodayInfo__Div = styled.div`
  width: 203px;
  height: 80px;
  background: #ffffff;
  border-radius: 10px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
  margin-right: 20px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
`;

export const Date__Div = styled.div`
  width: 66px;
  height: 32px;
  display: flex;
  justify-content: space-between;
`;

export const Month__Span = styled.span`
  font-weight: 600;
  font-size: 26px;
  color: rgba(51, 51, 51, 0.7);
`;

export const Day__Span = styled.span`
  font-weight: 600;
  font-size: 26px;
`;

export const Temp__Span = styled.span`
  font-weight: 600;
  font-size: 26px;
  color: #b7e576;
`;

export const MyTag__Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  height: 100px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 26px;
`;

export const TagSelect__Div = styled.div`
  display: flex;
  width: 965px;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const TagSeletedUnit__Span = styled.span`
  background: #fff2b2;
  border-radius: 50px;
  padding: 3px 6px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  margin-right: 7px;
  margin-bottom: 5px;
`;

export const TagWrapper__Div = styled.div`
  width: 203px;
  height: 730px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #bebebe;
  border-radius: 10px;
  background-color: #fff;
  margin-right: 15px;
`;

export const TagWrapper_Head__Div = styled.div`
  width: 203px;
  height: 38px;
  padding-top: 10px;
  padding-bottom: 12px;
  border-bottom: 1px solid #bebebe;
`;

export const Tag__Span = styled.span`
  font-size: 18px;
  font-weight: 500;
  padding-left: 15px;
`;

export const TagBox__Div = styled.div`
  width: 175px;
  height: 97px;
  border-bottom: 1px solid #bebebe;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 9px 14px 16px 15px;
  &:last-child {
    border-bottom: none;
  }
`;

export const TagCategory__Span = styled.span`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 1px;
`;

export const RegionList__Ul = styled.ul`
  width: 146px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

export const RegionTags__Li = styled.li`
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 8px;
  font-weight: ${(props) => (props.regionSelected ? 700 : 400)};
  cursor: pointer;
`;

export const StyleList__Ul = styled.ul`
  width: 146px;
  height: 44px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.3rem;
  padding: 0;
`;

export const StyleTags__Li = styled.li`
  font-size: 12px;
  margin-right: 13px;
  margin-bottom: 8px;
  list-style: none;
  font-weight: ${(props) => (props.isSelected ? 700 : 400)};
  cursor: pointer;
`;

export const OuterList__Ul = styled.ul`
  width: 146px;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 3px;
  padding: 0;
  cursor: pointer;
`;

export const OuterTags__Li = styled.li`
  font-size: 12px;
  margin-right: 13px;
  margin-bottom: 8px;
  list-style: none;
  cursor: pointer;
  font-weight: ${(props) => (props.isSelected ? 700 : 400)};
`;

export const TopTagsList__Ul = styled.ul`
  width: 146px;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 3px;
  padding: 0;
`;

export const TopTags__Li = styled.li`
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  list-style: none;
  font-weight: ${(props) => (props.isSelected ? 700 : 400)};
  cursor: pointer;
`;

export const BottomList__Ul = styled.ul`
  width: 146px;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 3px;
  padding: 0;
`;

export const BottomTags__Li = styled.li`
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 3px;
  list-style: none;
  font-weight: ${(props) => (props.isSelected ? 700 : 400)};
  cursor: pointer;
`;

export const EtcList__Ul = styled.ul`
  width: 146px;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 3px;
  padding: 0;
`;

export const EtcTags__Li = styled.li`
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  list-style: none;
  font-weight: ${(props) => (props.isSelected ? 700 : 400)};
  cursor: pointer;
`;

export const Feeds__Div = styled.div`
  width: 100rem;
  height: 996px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;

export const Aaa = styled(Masonry)`
  display: flex;
  // flex-wrap: wrap;
  justify-content: space-between;
  z-index: 9999;

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: 100%;
  }
  .my-masonry-grid_column {
    padding-left: 10px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    width: 230px;
    border: 1px solid #bebebe;
    border-radius: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 10px;
    background-color: #fff;
  }
`;

export const ScrollButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 130px;
  right: 180px;
  background-color: #b7e576;
  color: #fff;
  cursor: pointer;
  z-index: 9999;
`;
export const UpArrowImg = styled.img``;

export const WriteButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #b7e576;
  border: none;
  font-weight: 400;
  font-size: 40px;
  color: white;
  // margin-top: 850px;
  position: fixed;
  /* margin-left: 1120px; */
  cursor: pointer;
  :hover {
    background-color: #ffea86;
  }
  bottom: 50px;
  right: 180px;
  z-index: 9999;
`;
