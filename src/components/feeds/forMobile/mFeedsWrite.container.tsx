import { useMutation, useQuery } from "@apollo/client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { M_CREATE_FEED, M_UPDATE_FEED, M_UPLOAD_FEED_IMGS, Q_FETCH_FEED } from "../write/feedsWrite.queries";
import { regionCategory, tagCategory } from "../../common/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { checkValidationImage } from "../write/image.validation";
import { IFormProps, IUpdateFeedInput } from "../write/feedsWrite.types";
import { Modal } from "antd";
import "antd/dist/antd.css";
import MFeedsWriteUI from "./mFeedsWrite.presenter";

const MFeedsWrite = (props) => {
  const router = useRouter();

  const [myTag, setMyTag] = useState<String[]>([]);
  const [myRegion, setMyRegion] = useState<String>("");
  const [editRegion, setEditRegion] = useState("");
  const [isActive, setIsActive] = useState<boolean>(false);

  const aaa = props.fetchData?.fetchFeed.region.id;
  useEffect(() => {
    setEditRegion(props.fetchData?.fetchFeed.region.id);
  }, []);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });

  const [createFeed] = useMutation(M_CREATE_FEED);
  const [updateFeed] = useMutation(M_UPDATE_FEED);

  const onClickRegion = (e) => {
    setMyRegion(e);
  };

  // 태그 선택하기
  const onClickTag = (e) => {
    if (myTag.includes(e)) {
      const newMyTag = myTag.filter((tagEl) => tagEl !== e);
      setMyTag(newMyTag);
      return;
    }
    setMyTag([...myTag, e]);
  };

  // 이미지 업로드
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | any>([]);
  const [showPhoto, setShowPhoto] = useState([]);
  const [uploadFeedImgs] = useMutation(M_UPLOAD_FEED_IMGS);

  const onClickImage = () => {
    fileRef.current?.click();
  };
  const onChangeImgUrls = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    const isValid = checkValidationImage(file);
    if (!isValid) return;

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

  const onClickDelete = (deleteIndex: any) => {
    // setImageUrl(imageUrl.filter((photo) => photo !== deleteUrl));
    const deletedImg = imageUrl.splice(deleteIndex, 1);
    setImageUrl([...imageUrl]);
    setShowPhoto([]);
  };

  const onClickPhoto = (photo: any) => {
    setShowPhoto([photo]);
  };

  // 등록 버튼 활성화
  useEffect(() => {
    const active = () => {
      if (myTag.length !== 0 && imageUrl.length !== 0 && myRegion.length !== 0) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    active();
  }, [myTag, imageUrl, myRegion]);

  /////// 피드 등록 버튼
  const onClickSubmit = async (data: IFormProps) => {
    if (myTag.length === 0) {
      Modal.error({ content: "태그를 선택하세요" });
    } else if (imageUrl.length === 0) {
      Modal.error({ content: "이미지 업로드 필요" });
    }
    // if (!myRegion) { alert("지역 선택해주세요")}
    // if (!imageUrl) { alert("태그를 선택해주세요")}
    if (myTag.length !== 0 && imageUrl.length !== 0 && myRegion.length !== 0) {
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
        router.replace("/ootd");
        location.reload();
        Modal.success({ content: "피드가 등록되었습니다" });
      } catch (error) {
        alert(error.message);
      }
    }
  };

  // 피드 수정 버튼
  const onClickUpdate = async (data: IFormProps) => {
    const currentImgFiles = JSON.stringify(imageUrl);
    const fetchImgFiles = JSON.stringify(props.fetchData.fetchFeed.feedImg.imgURL);
    const isChangedImgFiles = currentImgFiles !== fetchImgFiles;

    const updateFeedInput: IUpdateFeedInput = {};
    if (data.detail) updateFeedInput.detail = data.detail;
    if (myRegion) updateFeedInput.regionId = myRegion;
    if (myTag) updateFeedInput.feedTags = myTag;
    if (data.outer) updateFeedInput.outer = data.outer;
    if (data.top) updateFeedInput.top = data.top;
    if (data.bottom) updateFeedInput.bottom = data.bottom;
    if (data.etc) updateFeedInput.etc = data.etc;
    if (isChangedImgFiles) updateFeedInput.imgURLs = imageUrl;
    try {
      const result = await updateFeed({
        variables: {
          updateFeedInput,
          feedId: String(router.query.feedId),
        },
      });
      Modal.success({ content: "피드가 수정되었습니다" });
      router.push(`/ootd`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <MFeedsWriteUI
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
      // 수정
      isEdit={props.isEdit}
      fetchData={props.fetchData}
      onClickUpdate={onClickUpdate}
      // 수정 태그
      editRegion={editRegion}
      aaa={aaa}
      // 해보는 중
      myRegion={myRegion}
      myTag={myTag}
      regionId={props.regionId}
      tagFetch={props.tagFetch}
      // 폼 버튼 활성화
      formState={formState}
      // 모달
      openModal={props.openModal}
      // 버튼 활성화
      isActive={isActive}
    />
  );
};

export default MFeedsWrite;
