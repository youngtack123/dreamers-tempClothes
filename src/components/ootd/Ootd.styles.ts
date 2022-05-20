import styled from "@emotion/styled";
import Masonry from "react-masonry-css";

export const Container__Div = styled.div`
  display: flex;
  width: 1200px;
  height: auto;
  position: relative;
  margin: 0 auto;
`;

export const Container_head__Div = styled.div`
  display: flex;
  width: 120rem;
  height: 80px;
  justify-content: flex-start;
  // width: 100%;
  // justify-content: flex-start;
`;

export const Container_Side__Div = styled.div`
  display: flex;
  flex-direction: column;
  // position: relative;
  width: 230px;
  position: fixed;

  /* position: fixed;
  z-index: 1;
  left: 50px;
  top: 0; */
`;

export const Container_Body__Div = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // margin-left: 210px;
  // padding-left: 150px;
  flex-wrap: wrap;
  margin-left: 300px;

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
  border: 1px solid #bebebe;
  /* position: fixed;
  left: 0; */

  /* width: 20.3rem;
  height: 8rem;
  background: #ffffff;
  border-radius: 1rem;
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.6rem;
  margin-right: 2rem;
  border: 0.1rem solid #bebebe; */
`;

export const Date__Div = styled.div`
  width: 66px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  /* width: 6.6rem;
  height: 3.2rem;
  display: flex;
  justify-content: space-between; */
`;

export const Month__Span = styled.span`
  font-weight: 600;
  font-size: 26px;
  color: rgba(51, 51, 51, 0.7);

  /* font-weight: 600;
  font-size: 2.6rem;
  color: rgba(51, 51, 51, 0.7); */
`;

export const Day__Span = styled.span`
  font-weight: 600;
  font-size: 26px;
  /* font-weight: 600;
  font-size: 2.6rem; */
`;

export const Temp__Span = styled.span`
  font-weight: 600;
  font-size: 26px;
  color: #b7e576;
  /* font-weight: 600;
  font-size: 2.6rem;
  color: #b7e576; */
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

  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1.5rem;
  height: 8rem;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 2.6rem; */
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

  /* background: #fff2b2;
  border-radius: 5rem;
  padding: 0.3rem 0.6rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  margin-right: 0.7rem; */
`;

export const TagWrapper__Div = styled.div`
  width: 203px;
  height: 730px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* padding: 13px 14px 15px 83px; */
  border: 1px solid #bebebe;
  border-radius: 10px;
  background-color: #fff;
  margin-right: 15px;
  /* position: fixed;
  left: 0;
  top: 180px; */

  /* width: 20.3rem;
  height: 73rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 0.1rem solid #bebebe;
  border-radius: 1rem;
  background-color: #fff;
  margin-right: 1.5rem;  */
`;

export const TagWrapper_Head__Div = styled.div`
  width: 20.3rem;
  height: 3.8rem;
  padding-top: 1rem;
  padding-bottom: 1.2rem;
  border-bottom: 0.1rem solid #bebebe;
`;

export const Tag__Span = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  padding-left: 1.5rem;
`;

export const TagBox__Div = styled.div`
  width: 17.5rem;
  height: 9.7rem;
  border-bottom: 0.1rem solid #bebebe;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0.9rem 1.4rem 1.6rem 1.5rem;
  &:last-child {
    border-bottom: none;
  }
`;

export const TagCategory__Span = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const RegionList__Ul = styled.ul`
  width: 14.6rem;
  height: 4.4rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  // margin-left: 0.3rem;
`;

export const RegionTags__Li = styled.li`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  margin-bottom: 0.8rem;
  font-weight: ${(props) => (props.isSelected ? 700 : 400)};
`;

export const StyleList__Ul = styled.ul`
  width: 14.6rem;
  height: 4.4rem;
  display: flex;
  justify-content: space-b;
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
`;

export const OuterList__Ul = styled.ul`
  width: 14.6rem;
  height: 4.4rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 0.3rem;
  padding: 0;
  cursor: pointer;
`;

export const OuterTags__Li = styled.li`
  font-size: 1.2rem;
  margin-right: 1.3rem;
  margin-bottom: 0.8rem;
  list-style: none;
  cursor: pointer;
  :hover {
    color: #601098;
    text-decoration: underline;
  }
`;

export const TopTagsList__Ul = styled.ul`
  width: 14.6rem;
  height: 4.4rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 0.3rem;
  padding: 0;
`;

export const TopTags__Li = styled.li`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  list-style: none;
`;

export const BottomList__Ul = styled.ul`
  width: 14.6rem;
  height: 4.4rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 0.3rem;
  padding: 0;
`;

export const BottomTags__Li = styled.li`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  margin-bottom: 0.3rem;
  list-style: none;
`;

export const EtcList__Ul = styled.ul`
  width: 14.6rem;
  height: 4.4rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 0.3rem;
  padding: 0;
`;

export const EtcTags__Li = styled.li`
  font-size: 1.2rem;
  margin-right: 0.8rem;
  margin-bottom: 0.8rem;
  list-style: none;
`;

export const Feeds__Div = styled.div`
  width: 965px;
  display: flex;
  flex-wrap: wrap;
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
