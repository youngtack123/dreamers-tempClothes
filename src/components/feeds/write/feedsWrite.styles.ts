import styled from "@emotion/styled";
import Slider from "react-slick";

export const WrapperDiv = styled.div`
  width: 966px;
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  padding: 20px 29px 15px 44px;
  // border: 1px solid #bebebe;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
`;

// ======================================================
//                사진, 옷 정보 섹션
// ======================================================
export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;
`;
export const PhotoLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`;
export const PhotoBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 330px;
  background: #eeeeee;
  border-radius: 10px;
  margin-bottom: 25px;
  position: relative;
`;
export const PhotoClickImg = styled.img`
  width: 36px;
  height: 36px;
  position: absolute;
  top: 142px;
  left: 156px;
  z-index: 1;
`;
export const ClothesInfoLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 25px;
`;
export const ItemDiv = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
export const OuterDiv = styled.div`
  font-size: 14px;
`;
export const InfoInput = styled.input`
  width: 280px;
  height: 40px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #bebebe;
  border-radius: 10px;
  outline: none;
  ::placeholder {
    font-size: 12px;
    color: #bebebe;
  }
`;
// ======================================================
//                     내용, 태그 섹션
// ======================================================
export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentsLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`;
export const ContentsTextArea = styled.textarea`
  width: 486px;
  height: 330px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #bebebe;
  border-radius: 10px;
  outline: none;
  padding: 12px;
  margin-bottom: 20px;
  resize: none;
  ::placeholder {
    font-size: 14px;
    color: #bebebe;
  }
`;
export const RightBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
export const TagsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 60px;
`;
export const TagsLabel = styled.label`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 14px;
`;
export const ItemLabel = styled.label`
  font-size: 14px;
  margin-bottom: 9px;
`;
export const RegionUl = styled.ul`
  width: 340px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // margin-bottom: 14px;
  margin: 0;
  padding: 0;
`;
export const TagDiv = styled.div`
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 13px;
  background: #dddddd;
  border-radius: 50px;
  color: white;
  :hover {
    background-color: #fff2b2;
    color: #333333;
  }
`;
export const RegionTagLi = styled.li`
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 13px;
  border-radius: 50px;
  margin-bottom: 14px;
  background: ${(props) => (props.myRegion || props.regionId ? "#fff2b2" : "#ddd")};
  /* background: ${(props) => (props.aaa ? "#fff2b2" : "#ddd")}; */
  color: ${(props) => (props.myRegion || props.regionId ? "#333" : "#fff")};
  :hover {
    background-color: #fff2b2;
    color: #333333;
  }
`;
export const StyleUl = styled.ul`
  width: 340px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;
export const StyleTagLi = styled.li`
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 12px;
  background: #dddddd;
  border-radius: 50px;
  margin-bottom: 14px;
  background: ${(props) => (props.myTag || props.tagFetch ? "#fff2b2" : "#ddd")};
  color: ${(props) => (props.myTag || props.tagFetch ? "#333" : "#fff")};
  :hover {
    background-color: #fff2b2;
    color: #333333;
  }
`;
export const OuterItemUl = styled.ul`
  width: 340px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;
export const OuterTagLi = styled.li`
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 12px;
  border-radius: 50px;
  margin-bottom: 14px;
  background: ${(props) => (props.myTag ? "#fff2b2" : "#ddd")};
  color: ${(props) => (props.myTag ? "#333" : "#fff")};
  :hover {
    background-color: #fff2b2;
    color: #333333;
  }
`;
export const TopUl = styled.ul`
  width: 340px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;
export const TopTagLi = styled.li`
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 12px;
  background: #dddddd;
  border-radius: 50px;
  margin-bottom: 14px;
  background: ${(props) => (props.myTag ? "#fff2b2" : "#ddd")};
  color: ${(props) => (props.myTag ? "#333" : "#fff")};
  :hover {
    background-color: #fff2b2;
    color: #333333;
  }
`;
export const LongTagDiv = styled.div`
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 10px;
  background: #dddddd;
  border-radius: 50px;
  color: white;
  margin-bottom: 14px;
  :hover {
    background-color: #fff2b2;
    color: #333333;
  }
`;
export const BottomUl = styled.ul`
  width: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;
export const BottomTagLi = styled.li`
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 12px;
  background: #dddddd;
  border-radius: 50px;
  margin-bottom: 14px;
  background: ${(props) => (props.myTag ? "#fff2b2" : "#ddd")};
  color: ${(props) => (props.myTag ? "#333" : "#fff")};
  :hover {
    background-color: #fff2b2;
    color: #333333;
  }
`;
export const EtcUl = styled.ul`
  width: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;
export const EtcLi = styled.li`
  width: 60px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 12px;
  border-radius: 50px;
  background: ${(props) => (props.myTag ? "#fff2b2" : "#ddd")};
  color: ${(props) => (props.myTag ? "#333" : "#fff")};
  :hover {
    background-color: #fff2b2;
    color: #333333;
  }
`;
export const SubmitButton = styled.button`
  width: 70px;
  height: 40px;
  background: #eeeeee;
  border-radius: 7px;
  font-size: 14px;
  color: #b2b2b2;
  border: none;
  margin-left: 400px;
`;

export const ThumbnailDiv = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 10px;
  overflow: hidden;
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
export const PhotoImg = styled.img`
  width: 65px;
  height: 65px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
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
export const ShowImg = styled.img`
  width: 340px;
  height: 330px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 2;
  border-radius: 10px;
`;
export const SlickDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
