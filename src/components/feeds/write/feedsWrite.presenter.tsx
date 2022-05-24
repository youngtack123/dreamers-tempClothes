import * as s from "./feedsWrite.styles";
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../../common/commonModal";
import { IFeedsWriteUIProps } from "./feedsWrite.types";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const FeedsWriteUI = (props: IFeedsWriteUIProps) => {
  // console.log(props.fetchData?.fetchFeed.feedTag);
  // console.log(props.fetchData?.fetchFeed.region.id);
  // console.log(props.regionSelected);

  const bbb = props.fetchData?.fetchFeed.region.id;
  const [aaa, setAAA] = useState([props.fetchData?.fetchFeed.region.id]);
  // setAAA(props.fetchData?.fetchFeed.region.id);
  // useEffect(() => {
  //   setAAA(bbb);
  //   console.log("use in", aaa);
  // }, []);
  // console.log("use out", aaa);

  console.log("프레젠터", bbb);

  const showMaxCnt = 4;
  const arr = Array.from(new Array(3));

  const settings = {
    dots: false,
    infinite: arr.length > showMaxCnt,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <s.WrapperDiv>
      {/* 사진, 옷 정보 섹션 */}
      <s.Form onSubmit={props.isEdit ? props.handleSubmit(props.onClickUpdate) : props.handleSubmit(props.onClickSubmit)}>
        <s.LeftDiv>
          <s.PhotoLabel>사진</s.PhotoLabel>

          {props.showPhoto ? (
            <s.PhotoBoxDiv onClick={() => props.onClickImage}>
              <s.PhotoClickImg src="/images/uploadimg.png" onClick={() => props.onClickImage} />
              {props.showPhoto.map((item: any, index: number) => (
                <div key={uuidv4()}>{<s.ShowImg key={index} src={`https://storage.googleapis.com/${item}`} />}</div>
              ))}
            </s.PhotoBoxDiv>
          ) : (
            <s.PhotoBoxDiv onClick={() => props.onClickImage}>
              <s.PhotoClickImg src="/images/uploadimg.png" onClick={() => props.onClickImage} />
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
            <s.InfoInput type="text" {...props.register("outer")} defaultValue={props.fetchData?.fetchFeed.outer} placeholder="아우터 상품 정보를 입력해주세요" />
          </s.ItemDiv>
          <s.ItemDiv>
            <s.OuterDiv>상의</s.OuterDiv>
            <s.InfoInput type="text" {...props.register("top")} defaultValue={props.fetchData?.fetchFeed.top} placeholder="상의 상품 정보를 입력해주세요" />
          </s.ItemDiv>
          <s.ItemDiv>
            <s.OuterDiv>하의</s.OuterDiv>
            <s.InfoInput type="text" {...props.register("bottom")} defaultValue={props.fetchData?.fetchFeed.bottom} placeholder="하의 상품 정보를 입력해주세요" />
          </s.ItemDiv>
          <s.ItemDiv>
            <s.OuterDiv>기타</s.OuterDiv>
            <s.InfoInput type="text" {...props.register("etc")} defaultValue={props.fetchData?.fetchFeed.etc} placeholder="기타 상품 정보를 입력해주세요" />
          </s.ItemDiv>
        </s.LeftDiv>

        {/* 내용, 태그 섹션 */}
        <s.RightDiv>
          <s.ContentsLabel>내용</s.ContentsLabel>
          <s.ContentsTextArea type="text" {...props.register("detail")} defaultValue={props.fetchData?.fetchFeed.detail} placeholder="내용을 입력해주세요" />

          <s.RightBottomDiv>
            <s.TagsDiv>
              <s.TagsLabel>태그</s.TagsLabel>
              <s.ItemLabel>지역</s.ItemLabel>

              {/* {props.regionCategory.map((el) => {
                  return props.editRegion === "" ? (
                    aaa === el ? (
                      <s.RegionTagDiv style={{ backgroundColor: "#fff2b2", color: "#333" }}>{el}</s.RegionTagDiv>
                    ) : (
                      <s.RegionTagDiv key={uuidv4()} onClick={() => props.onClickRegion(el)} regionSelected={props.regionSelected === el}>
                        {el}
                      </s.RegionTagDiv>
                    )
                  ) : (
                    <div></div>
                  ); */}
              {/* // props.editRegion === el ? (
                  //   <s.RegionTagDiv style={{ backgroundColor: "#fff2b2", color: "#333" }}>{el}</s.RegionTagDiv>
                  // ) : (
                  //   <s.RegionTagDiv key={uuidv4()} onClick={() => props.onClickRegion(el)} regionSelected={props.regionSelected === el}>
                  //     {el}
                  //   </s.RegionTagDiv>
                  // );
                })} */}
              {/* {props.regionCategory.map((el) => {
                  return props.fetchData?.fetchFeed.region.id === el ? (
                    <s.RegionTagDiv style={{ backgroundColor: "#fff2b2", color: "#333" }}>{el}</s.RegionTagDiv>
                  ) : (
                    <s.RegionTagDiv key={uuidv4()} onClick={() => props.onClickRegion(el)} regionSelected={props.regionSelected === el}>
                      {el}
                    </s.RegionTagDiv>
                  );
                })} */}
              {props.isEdit ? (
                <s.RegionDiv>
                  {props.regionCategory.map((el) => (
                    <s.RegionTagDiv key={uuidv4()} onClick={() => props.onClickRegion(el)} myRegion={props.myRegion === el}>
                      {el}
                    </s.RegionTagDiv>
                  ))}
                </s.RegionDiv>
              ) : (
                <s.RegionDiv>
                  {props.regionCategory.map((el) => (
                    <s.RegionTagDiv key={uuidv4()} onClick={() => props.onClickRegion(el)} myRegion={props.myRegion === el}>
                      {el}
                    </s.RegionTagDiv>
                  ))}
                </s.RegionDiv>
              )}

              <s.ItemLabel>스타일</s.ItemLabel>
              <s.StyleDiv>
                {props.tagCategory[0].tagItem.map((el) => (
                  <s.StyleTagDiv onClick={() => props.onClickTag(el)} key={uuidv4()} myTag={props.myTag.includes(el)}>
                    {el}
                  </s.StyleTagDiv>
                ))}
              </s.StyleDiv>

              <s.ItemLabel>아우터</s.ItemLabel>
              <s.OuterItemDiv>
                {props.tagCategory[1].tagItem.map((el) => (
                  <s.OuterTagDiv onClick={() => props.onClickTag(el)} key={uuidv4()} myTag={props.myTag.includes(el)}>
                    {el}
                  </s.OuterTagDiv>
                ))}
              </s.OuterItemDiv>

              <s.ItemLabel>상의</s.ItemLabel>
              <s.TopDiv>
                {props.tagCategory[2].tagItem.map((el) => (
                  <s.TopTagDiv key={uuidv4()} onClick={() => props.onClickTag(el)} myTag={props.myTag.includes(el)}>
                    {el}
                  </s.TopTagDiv>
                ))}
              </s.TopDiv>

              <s.ItemLabel>하의</s.ItemLabel>
              <s.BottomDiv>
                {props.tagCategory[3].tagItem.map((el) => (
                  <s.BottomTagDiv key={uuidv4()} onClick={() => props.onClickTag(el)} myTag={props.myTag.includes(el)}>
                    {el}
                  </s.BottomTagDiv>
                ))}
              </s.BottomDiv>

              <s.ItemLabel>기타</s.ItemLabel>
              {props.tagCategory[4].tagItem.map((el) => (
                <s.OnePieceDiv key={uuidv4()} onClick={() => props.onClickTag(el)} myTag={props.myTag.includes(el)}>
                  {el}
                </s.OnePieceDiv>
              ))}
            </s.TagsDiv>

            <s.SubmitButton>{props.isEdit ? "수정" : "등록"}</s.SubmitButton>
          </s.RightBottomDiv>
        </s.RightDiv>
      </s.Form>
    </s.WrapperDiv>
  );
};

export default FeedsWriteUI;
