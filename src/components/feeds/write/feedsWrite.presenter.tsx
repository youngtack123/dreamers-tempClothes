import * as s from "./feedsWrite.styles";
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../../common/commonModal";
import { IFeedsWriteUIProps } from "./feedsWrite.types";
import { v4 as uuidv4 } from "uuid";

const showMaxCnt = 4;
const arr = Array.from(new Array(3));

const settings = {
  dots: false,
  infinite: arr.length > showMaxCnt,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const FeedsWriteUI = (props: IFeedsWriteUIProps) => {
  return (
    <s.WrapperDiv>
      {/* 사진, 옷 정보 섹션 */}
      <s.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <s.LeftDiv>
          <s.PhotoLabel>사진</s.PhotoLabel>

          {props.showPhoto ? (
            <s.PhotoBoxDiv onClick={props.onClickImage}>
              <s.PhotoClickImg src="/images/uploadimg.png" onClick={props.onClickImage} />
              {props.showPhoto.map((item: any, index: number) => (
                <div key={uuidv4()}>{<s.ShowImg key={index} src={`https://storage.googleapis.com/${item}`} />}</div>
              ))}
            </s.PhotoBoxDiv>
          ) : (
            <s.PhotoBoxDiv onClick={props.onClickImage}>
              <s.PhotoClickImg src="/images/uploadimg.png" onClick={props.onClickImage} />
            </s.PhotoBoxDiv>
          )}
          <input style={{ display: "none" }} type="file" multiple onChange={props.onChangeImgUrls} ref={props.fileRef} />

          <s.SlickDiv>
            <s.Slick {...settings}>
              {props.imageUrl.map((el: any, index: any) => {
                console.log(el);
                return (
                  <s.MomDiv key={uuidv4()}>
                    <s.PhotoImg src={`https://storage.googleapis.com/${el}`} onClick={() => props.onClickPhoto(el)} />
                    <s.ChildDiv onClick={() => props.onClickDelete(index)}>x</s.ChildDiv>
                  </s.MomDiv>
                );
              })}
            </s.Slick>
          </s.SlickDiv>

          <s.ClothesInfoLabel>옷 정보</s.ClothesInfoLabel>
          <s.ItemDiv>
            <s.OuterDiv>아우터</s.OuterDiv>
            <s.InfoInput type="text" {...props.register("outer")} placeholder="아우터 상품 정보를 입력해주세요" />
          </s.ItemDiv>
          <s.ItemDiv>
            <s.OuterDiv>상의</s.OuterDiv>
            <s.InfoInput type="text" {...props.register("top")} placeholder="상의 상품 정보를 입력해주세요" />
          </s.ItemDiv>
          <s.ItemDiv>
            <s.OuterDiv>하의</s.OuterDiv>
            <s.InfoInput type="text" {...props.register("bottom")} placeholder="하의 상품 정보를 입력해주세요" />
          </s.ItemDiv>
          <s.ItemDiv>
            <s.OuterDiv>기타</s.OuterDiv>
            <s.InfoInput type="text" {...props.register("etc")} placeholder="기타 상품 정보를 입력해주세요" />
          </s.ItemDiv>
        </s.LeftDiv>

        {/* 내용, 태그 섹션 */}
        <s.RightDiv>
          <s.ContentsLabel>내용</s.ContentsLabel>
          <s.ContentsTextArea type="text" {...props.register("detail")} placeholder="내용을 입력해주세요" />

          <s.RightBottomDiv>
            <s.TagsDiv>
              <s.TagsLabel>태그</s.TagsLabel>
              <s.ItemLabel>지역</s.ItemLabel>
              <s.RegionDiv>
                {props.regionCategory.map((el) => (
                  <s.RegionTagDiv key={uuidv4()} onClick={() => props.onClickRegion(el)} regionSelected={props.regionSelected === el}>
                    {el}
                  </s.RegionTagDiv>
                ))}
              </s.RegionDiv>

              <s.ItemLabel>스타일</s.ItemLabel>
              <s.StyleDiv>
                {props.tagCategory[0].tagItem.map((el) => (
                  <s.StyleTagDiv onClick={() => props.onClickTag(el)} key={uuidv4()} tagSelected={props.tagSelected.includes(el)}>
                    {el}
                  </s.StyleTagDiv>
                ))}
              </s.StyleDiv>

              <s.ItemLabel>아우터</s.ItemLabel>
              <s.OuterItemDiv>
                {props.tagCategory[1].tagItem.map((el) => (
                  <s.OuterTagDiv onClick={() => props.onClickTag(el)} key={uuidv4()} tagSelected={props.tagSelected.includes(el)}>
                    {el}
                  </s.OuterTagDiv>
                ))}
              </s.OuterItemDiv>

              <s.ItemLabel>상의</s.ItemLabel>
              <s.TopDiv>
                {props.tagCategory[2].tagItem.map((el) => (
                  <s.TopTagDiv key={uuidv4()} onClick={() => props.onClickTag(el)} tagSelected={props.tagSelected.includes(el)}>
                    {el}
                  </s.TopTagDiv>
                ))}
              </s.TopDiv>

              <s.ItemLabel>하의</s.ItemLabel>
              <s.BottomDiv>
                {props.tagCategory[3].tagItem.map((el) => (
                  <s.BottomTagDiv key={uuidv4()} onClick={() => props.onClickTag(el)} tagSelected={props.tagSelected.includes(el)}>
                    {el}
                  </s.BottomTagDiv>
                ))}
              </s.BottomDiv>

              <s.ItemLabel>기타</s.ItemLabel>
              {props.tagCategory[4].tagItem.map((el) => (
                <s.OnePieceDiv key={uuidv4()} onClick={() => props.onClickTag(el)} tagSelected={props.tagSelected.includes(el)}>
                  {el}
                </s.OnePieceDiv>
              ))}
            </s.TagsDiv>

            <s.SubmitButton>저장</s.SubmitButton>
          </s.RightBottomDiv>
        </s.RightDiv>
      </s.Form>
    </s.WrapperDiv>
  );
};

export default FeedsWriteUI;
