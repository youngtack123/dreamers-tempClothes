import React from "react";
import * as mWrite from "./mFeedsWrite.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

const MFeedsWriteUI = (props) => {
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
    <mWrite.WrapperDiv>
      <mWrite.Form>
        <mWrite.PhotoLabel>사진</mWrite.PhotoLabel>
        {props.isEdit ? (
          <>
            {/* 피드 수정 */}
            {props.showPhoto ? (
              <mWrite.PhotoBoxDiv onClick={props.onClickImage}>
                <mWrite.PhotoClickImg src="/images/uploadimg.png" onClick={props.onClickImage} />
                {props.showPhoto.map((item: any, index: number) => (
                  <div key={uuidv4()}>{<mWrite.ShowImg key={index} src={`https://storage.googleapis.com/${item}`} />}</div>
                ))}
              </mWrite.PhotoBoxDiv>
            ) : (
              <mWrite.PhotoBoxDiv>
                <mWrite.ShowImg src={`https://storage.googleapis.com/${props.fetchData?.fetchFeed.feedImg[0].imgURL}`} />
              </mWrite.PhotoBoxDiv>
            )}
            <input style={{ display: "none" }} type="file" multiple onChange={props.onChangeImgUrls} ref={props.fileRef} />

            {props.imageUrl.length !== 0 ? (
              <mWrite.SlickDiv>
                <mWrite.Slick {...settings}>
                  {props.imageUrl.map((el: any, index: any) => {
                    return (
                      <mWrite.MomDiv key={uuidv4()}>
                        <mWrite.PhotoImg src={`https://storage.googleapis.com/${el}`} onClick={() => props.onClickPhoto(el)} />
                        <mWrite.ChildDiv onClick={() => props.onClickDelete(index)}>x</mWrite.ChildDiv>
                      </mWrite.MomDiv>
                    );
                  })}
                </mWrite.Slick>
              </mWrite.SlickDiv>
            ) : (
              <mWrite.SlickDiv>
                <mWrite.Slick {...settings}>
                  {props.fetchData?.fetchFeed.feedImg.map((el, index) => (
                    <mWrite.MomDiv key={uuidv4()}>
                      <mWrite.PhotoImg src={`https://storage.googleapis.com/${el.imgURL}`} onClick={() => props.onClickPhoto(el.imgURL)} />
                      <mWrite.ChildDiv onClick={() => props.onClickDelete(index)}>x</mWrite.ChildDiv>
                    </mWrite.MomDiv>
                  ))}
                </mWrite.Slick>
              </mWrite.SlickDiv>
            )}
          </>
        ) : (
          <>
            {props.showPhoto ? (
              <mWrite.PhotoBoxDiv onClick={props.onClickImage}>
                <mWrite.PhotoClickImg src="/images/uploadimg.png" onClick={props.onClickImage} />
                {props.showPhoto.map((item: any, index: number) => (
                  <div key={uuidv4()}>{<mWrite.ShowImg key={index} src={`https://storage.googleapimWrite.com/${item}`} />}</div>
                ))}
              </mWrite.PhotoBoxDiv>
            ) : (
              <mWrite.PhotoBoxDiv onClick={props.onClickImage}>
                <mWrite.PhotoClickImg src="/images/uploadimg.png" onClick={props.onClickImage} />
              </mWrite.PhotoBoxDiv>
            )}
            <input style={{ display: "none" }} type="file" multiple onChange={props.onChangeImgUrls} ref={props.fileRef} />

            <mWrite.SlickDiv>
              <mWrite.Slick>
                {props.imageUrl.map((el: any, index: any) => {
                  return (
                    <mWrite.MomDiv key={uuidv4()}>
                      <mWrite.PhotoImg src={`https://storage.googleapimWrite.com/${el}`} onClick={() => props.onClickPhoto(el)} />
                      <mWrite.ChildDiv onClick={() => props.onClickDelete(index)}>x</mWrite.ChildDiv>
                    </mWrite.MomDiv>
                  );
                })}
              </mWrite.Slick>
            </mWrite.SlickDiv>
          </>
        )}

        <mWrite.ContentsLabel>내용</mWrite.ContentsLabel>
        <mWrite.ContentsTextArea type="text" {...props.register("detail")} defaultValue={props.fetchData?.fetchFeed.detail} placeholder="내용을 입력해주세요" />

        <mWrite.TagsDiv>
          <mWrite.TagsLabel>태그</mWrite.TagsLabel>
          <mWrite.ItemLabel>지역</mWrite.ItemLabel>

          {props.isEdit ? (
            <mWrite.RegionUl>
              {props.regionCategory.map((el) => (
                <mWrite.RegionTagLi key={uuidv4()} onClick={() => props.onClickRegion(el)} myRegion={props.myRegion === el}>
                  {el}
                </mWrite.RegionTagLi>
              ))}
            </mWrite.RegionUl>
          ) : (
            <mWrite.RegionUl>
              {props.regionCategory.map((el) => (
                <mWrite.RegionTagLi key={uuidv4()} onClick={() => props.onClickRegion(el)} myRegion={props.myRegion === el}>
                  {el}
                </mWrite.RegionTagLi>
              ))}
            </mWrite.RegionUl>
          )}

          <mWrite.ItemLabel>스타일</mWrite.ItemLabel>
          <mWrite.StyleUl>
            {props.tagCategory[0].tagItem.map((el) => (
              <mWrite.StyleTagLi onClick={() => props.onClickTag(el)} key={uuidv4()} myTag={props.myTag.includes(el)}>
                {el}
              </mWrite.StyleTagLi>
            ))}
          </mWrite.StyleUl>

          <mWrite.ItemLabel>아우터</mWrite.ItemLabel>
          <mWrite.OuterItemUl>
            {props.tagCategory[1].tagItem.map((el) => (
              <mWrite.OuterTagLi onClick={() => props.onClickTag(el)} key={uuidv4()} myTag={props.myTag.includes(el)}>
                {el}
              </mWrite.OuterTagLi>
            ))}
          </mWrite.OuterItemUl>

          <mWrite.ItemLabel>상의</mWrite.ItemLabel>
          <mWrite.TopUl>
            {props.tagCategory[2].tagItem.map((el) => (
              <mWrite.TopTagLi key={uuidv4()} onClick={() => props.onClickTag(el)} myTag={props.myTag.includes(el)}>
                {el}
              </mWrite.TopTagLi>
            ))}
          </mWrite.TopUl>

          <mWrite.ItemLabel>하의</mWrite.ItemLabel>
          <mWrite.BottomUl>
            {props.tagCategory[3].tagItem.map((el) => (
              <mWrite.BottomTagLi key={uuidv4()} onClick={() => props.onClickTag(el)} myTag={props.myTag.includes(el)}>
                {el}
              </mWrite.BottomTagLi>
            ))}
          </mWrite.BottomUl>

          <mWrite.ItemLabel>기타</mWrite.ItemLabel>
          <mWrite.EtcUl>
            {props.tagCategory[4].tagItem.map((el) => (
              <mWrite.EtcLi key={uuidv4()} onClick={() => props.onClickTag(el)} myTag={props.myTag.includes(el)}>
                {el}
              </mWrite.EtcLi>
            ))}
          </mWrite.EtcUl>
        </mWrite.TagsDiv>

        <mWrite.ClothesInfoLabel>옷 정보</mWrite.ClothesInfoLabel>
        <mWrite.ItemDiv>
          <mWrite.OuterDiv>아우터</mWrite.OuterDiv>
          <mWrite.InfoInput type="text" {...props.register("outer")} defaultValue={props.fetchData?.fetchFeed.outer} placeholder="아우터 상품 정보를 입력해주세요" />
        </mWrite.ItemDiv>
        <mWrite.ItemDiv>
          <mWrite.OuterDiv>상의</mWrite.OuterDiv>
          <mWrite.InfoInput type="text" {...props.register("top")} defaultValue={props.fetchData?.fetchFeed.top} placeholder="상의 상품 정보를 입력해주세요" />
        </mWrite.ItemDiv>
        <mWrite.ItemDiv>
          <mWrite.OuterDiv>하의</mWrite.OuterDiv>
          <mWrite.InfoInput type="text" {...props.register("bottom")} defaultValue={props.fetchData?.fetchFeed.bottom} placeholder="하의 상품 정보를 입력해주세요" />
        </mWrite.ItemDiv>
        <mWrite.ItemDiv>
          <mWrite.OuterDiv>기타</mWrite.OuterDiv>
          <mWrite.InfoInput type="text" {...props.register("etc")} defaultValue={props.fetchData?.fetchFeed.etc} placeholder="기타 상품 정보를 입력해주세요" />
        </mWrite.ItemDiv>

        <mWrite.SubmitButton isActive={props.isActive}>{props.isEdit ? "수정" : "등록"}</mWrite.SubmitButton>
      </mWrite.Form>
    </mWrite.WrapperDiv>
  );
};

export default MFeedsWriteUI;
