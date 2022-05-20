import * as s from "./feedsWrite.styles";
import Slider from "react-slick";
import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Modal from "../../common/commonModal";
import { IFeedsWriteUIProps } from "./feedsWrite.types";
import { v4 as uuidv4 } from "uuid";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

const FeedsWriteUI = (props: IFeedsWriteUIProps) => {
  return (
    <s.WrapperDiv>
      {/* 사진, 옷 정보 섹션 */}
      <s.LeftDiv>
        <s.PhotoLabel>사진</s.PhotoLabel>

        {props.showPhoto ? (
          <s.PhotoBoxDiv onClick={props.onClickImage}>
            <s.PhotoClickImg src="/images/uploadimg.png" onClick={props.onClickImage} />
            {props.showPhoto.map((item: any, index: number) => (
              <div key={uuidv4()}>{<s.PhotoClickImg key={index} src={`https://storage.cloud.google.com//${item}`} />}</div>
            ))}
          </s.PhotoBoxDiv>
        ) : (
          <s.PhotoBoxDiv onClick={props.onClickImage}>
            <s.PhotoClickImg src="/images/uploadimg.png" onClick={props.onClickImage} />
          </s.PhotoBoxDiv>
        )}

        {/* <s.PhotoBoxDiv onClick={props.onClickImage}>
          <s.PhotoClickImg src="/images/uploadimg.png" onClick={props.onClickImage} />
          {props.showPhoto.map((item: any, index: number) => (
            <div key={uuidv4()}>{<s.PhotoClickImg key={index} src={`https://storage.googleapis.com/${item}`} />}</div>
          ))}
        </s.PhotoBoxDiv> */}
        <input style={{ display: "none" }} type="file" multiple onChange={props.onChangeImgUrls} ref={props.fileRef} />
        <s.Slick {...settings}>
          {props.imageUrl.map((el: any, index: any) => (
            <s.MomDiv key={uuidv4()}>
              <s.PhotoImg key={index} src={`https://storage.cloud.google.com//${el}`} onClick={() => props.onClickPhoto(el)} />
              <s.ChildDiv onClick={() => props.onClickDelete(index)}>X</s.ChildDiv>
            </s.MomDiv>
          ))}
          {/* <s.ThumbnailDiv>
            <s.PhotoImg src="/images/landing.jpg" />
          </s.ThumbnailDiv>
          <s.ThumbnailDiv>
            <s.PhotoImg src="/images/google.png" />
          </s.ThumbnailDiv>
          <s.ThumbnailDiv>
            <s.PhotoImg src="/images/kakao.png" />
          </s.ThumbnailDiv>
          <s.ThumbnailDiv>
            <s.PhotoImg src="/images/landing.jpg" />
          </s.ThumbnailDiv>
          <s.ThumbnailDiv>
            <s.PhotoImg src="/images/landing.jpg" />
          </s.ThumbnailDiv>
          <s.ThumbnailDiv>
            <s.PhotoImg src="/images/landing.jpg" />
          </s.ThumbnailDiv> */}
        </s.Slick>

        <s.ClothesInfoLabel>옷 정보</s.ClothesInfoLabel>
        <s.ItemDiv>
          <s.OuterDiv>아우터</s.OuterDiv>
          <s.InfoInput placeholder="아우터 상품 정보를 입력해주세요" />
        </s.ItemDiv>
        <s.ItemDiv>
          <s.OuterDiv>상의</s.OuterDiv>
          <s.InfoInput placeholder="상의 상품 정보를 입력해주세요" />
        </s.ItemDiv>
        <s.ItemDiv>
          <s.OuterDiv>하의</s.OuterDiv>
          <s.InfoInput placeholder="하의 상품 정보를 입력해주세요" />
        </s.ItemDiv>
        <s.ItemDiv>
          <s.OuterDiv>기타</s.OuterDiv>
          <s.InfoInput placeholder="기타 상품 정보를 입력해주세요" />
        </s.ItemDiv>
      </s.LeftDiv>

      {/* 내용, 태그 섹션 */}
      <s.RightDiv>
        <s.ContentsLabel>내용</s.ContentsLabel>
        <s.ContentsTextArea placeholder="내용을 입력해주세요" />

        <s.RightBottomDiv>
          <s.TagsDiv>
            <s.TagsLabel>태그</s.TagsLabel>
            <s.ItemLabel>지역</s.ItemLabel>
            <s.RegionDiv>
              <s.TagDiv>서울</s.TagDiv>
              <s.TagDiv>경기</s.TagDiv>
              <s.TagDiv>강원</s.TagDiv>
              <s.TagDiv>충북</s.TagDiv>
              <s.TagDiv>충남</s.TagDiv>
            </s.RegionDiv>
            <s.RegionDiv>
              <s.RegionTagDiv>경북</s.RegionTagDiv>
              <s.RegionTagDiv>경남</s.RegionTagDiv>
              <s.RegionTagDiv>전북</s.RegionTagDiv>
              <s.RegionTagDiv>전남</s.RegionTagDiv>
              <s.RegionTagDiv>제주</s.RegionTagDiv>
            </s.RegionDiv>

            <s.ItemLabel>지역</s.ItemLabel>
            <s.StyleDiv>
              <s.StyleTagDiv>캐주얼</s.StyleTagDiv>
              <s.StyleTagDiv>스트릿</s.StyleTagDiv>
              <s.StyleTagDiv>트레이닝</s.StyleTagDiv>
              <s.StyleTagDiv>포멀</s.StyleTagDiv>
              <s.StyleTagDiv>세미포멀</s.StyleTagDiv>
            </s.StyleDiv>

            <s.ItemLabel>아우터</s.ItemLabel>
            <s.OuterItemDiv>
              <s.OuterTagDiv>트랙자켓</s.OuterTagDiv>
              <s.OuterTagDiv>플리스</s.OuterTagDiv>
              <s.OuterTagDiv>자켓</s.OuterTagDiv>
              <s.OuterTagDiv>점퍼</s.OuterTagDiv>
              <s.OuterTagDiv>코트</s.OuterTagDiv>
            </s.OuterItemDiv>

            <s.ItemLabel>상의</s.ItemLabel>
            <s.TopDiv>
              <s.TopTagDiv>티셔츠</s.TopTagDiv>
              <s.LongTagDiv>셔츠/블라우스</s.LongTagDiv>
              <s.TopTagDiv>니트</s.TopTagDiv>
              <s.TopTagDiv>맨투맨</s.TopTagDiv>
              <s.TopTagDiv>후드</s.TopTagDiv>
            </s.TopDiv>

            <s.ItemLabel>하의</s.ItemLabel>
            <s.BottomDiv>
              <s.BottomTagDiv>청바지</s.BottomTagDiv>
              <s.BottomTagDiv>슬랙스</s.BottomTagDiv>
              <s.BottomTagDiv>반바지</s.BottomTagDiv>
              <s.BottomTagDiv>스커트</s.BottomTagDiv>
            </s.BottomDiv>

            <s.ItemLabel>기타</s.ItemLabel>
            <s.OnePieceDiv>원피스</s.OnePieceDiv>
          </s.TagsDiv>

          <s.SubmitButton>저장</s.SubmitButton>
        </s.RightBottomDiv>
      </s.RightDiv>
    </s.WrapperDiv>
  );
};

export default FeedsWriteUI;
