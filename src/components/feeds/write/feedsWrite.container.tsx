import { useMutation } from "@apollo/client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import FeedsWriteUI from "./feedsWrite.presenter";
import { M_CREATE_FEED, M_UPLOAD_FEED_IMGS } from "./feedsWrite.queries";
import { regionCategory, tagCategory } from "../../common/store";
import { useForm } from "react-hook-form";

const FeedsWrite = () => {
  const [myTag, setMyTag] = useState<String[]>([]);
  const [myRegion, setMyRegion] = useState<String>();
  const [tagSelected, setTagSelected] = useState<String[]>([]);
  const [regionSelected, setRegionSelected] = useState<String>();

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const [createFeed] = useMutation(M_CREATE_FEED);

  const onClickRegion = (e) => {
    setMyRegion(e);
    setRegionSelected(e);
  };

  // 태그 선택하기
  const onClickTag = (e) => {
    if (myTag.includes(e) || tagSelected.includes(e)) {
      const newMyTag = myTag.filter((tagEl) => tagEl !== e);
      setMyTag(newMyTag);
      setTagSelected(newMyTag);
      return;
    }
    setMyTag([...myTag, e]);
    setTagSelected([...tagSelected, e]);
  };

  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | any>([]);
  const [showPhoto, setShowPhoto] = useState([]);
  const [uploadFeedImgs] = useMutation(M_UPLOAD_FEED_IMGS);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeImgUrls = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    let temp = [];
    try {
      const result = await uploadFeedImgs({
        variables: {
          imgs: file,
        },
      });
      setImageUrl((prev: string[]) => [...prev, ...result?.data?.uploadFeedImgs]);
      temp = [...result?.data?.uploadFeedImgs].reverse();
      setShowPhoto((prev) => [...prev, ...temp]);
    } catch (error: any) {
      alert(error.message);
    }
  };
  console.log(imageUrl);

  const onClickDelete = (deleteIndex: any) => {
    // setImageUrl(imageUrl.filter((photo) => photo !== deleteUrl));
    const deletedImg = imageUrl.splice(deleteIndex, 1);
    setImageUrl([...imageUrl]);
    setShowPhoto([]);
  };

  const onClickPhoto = (photo: any) => {
    setShowPhoto([photo]);
  };

  /////// 피드 등록 버튼
  const onClickSubmit = async (data) => {
    try {
      const feedResult = await createFeed({
        variables: {
          createFeedInput: {
            detail: data.detail,
            regionId: myRegion,
            feedTags: myTag,
            imgURLs: imageUrl,
            top: data.top,
            bottom: data.bottom,
            outer: data.outer,
            etc: data.etc,
          },
        },
      });
      console.log(feedResult);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <FeedsWriteUI
      onClickImage={onClickImage}
      onChangeImgUrls={onChangeImgUrls}
      onClickDelete={onClickDelete}
      onClickPhoto={onClickPhoto}
      fileRef={fileRef}
      imageUrl={imageUrl}
      showPhoto={showPhoto}
      // 피드 등록 함수
      onClickRegion={onClickRegion}
      onClickTag={onClickTag}
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      // 지역, 태그
      regionCategory={regionCategory}
      tagCategory={tagCategory}
      // 선택값
      regionSelected={regionSelected}
      tagSelected={tagSelected}
    />
  );
};

export default FeedsWrite;
