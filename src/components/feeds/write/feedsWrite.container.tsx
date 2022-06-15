import { useMutation } from "@apollo/client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import FeedsWriteUI from "./feedsWrite.presenter";
import { M_CREATE_FEED, M_UPDATE_FEED, M_UPLOAD_FEED_IMGS } from "./feedsWrite.queries";
import { regionCategory, tagCategory } from "../../common/store";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { checkValidationImage } from "./image.validation";
import { IFeedsWriteProps, IFormValue, IUpdateFeedInput } from "./feedsWrite.types";
import "antd/dist/antd.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IMutation, IMutationCreateFeedArgs, IMutationUpdateFeedArgs } from "../../types/types";

const FeedsWrite = (props: IFeedsWriteProps) => {
  const router = useRouter();

  const [createFeed] = useMutation<Pick<IMutation, "createFeed">, IMutationCreateFeedArgs>(M_CREATE_FEED);
  const [updateFeed] = useMutation<Pick<IMutation, "updateFeed">, IMutationUpdateFeedArgs>(M_UPDATE_FEED);

  const [myTag, setMyTag] = useState<string[]>([]);
  const [myRegion, setMyRegion] = useState<string>("");
  const [editRegion, setEditRegion] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  const { register, handleSubmit, formState } = useForm<IFormValue>({
    mode: "onChange",
  });

  const onClickRegion = (e: string) => {
    setMyRegion(e);
  };

  // 태그 선택하기
  const onClickTag = (e: string) => {
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
      toast.error(error.message, {
        icon: "🤔",
      });
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
      if ((myTag.length !== 0 && imageUrl.length !== 0 && myRegion.length !== 0) || (props.fetchData?.fetchFeed.feedImg.length !== 0 && myRegion.length !== 0 && myTag.length !== 0)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    active();
  }, [myTag, imageUrl, myRegion]);

  const onClickSubmit = async (data: IFormValue) => {
    if (myTag.length === 0) {
      toast.warning("태그가 없어요!", {
        icon: "🥺",
      });
    } else if (imageUrl.length === 0) {
      toast.warning("사진이 없어요!", {
        icon: "🥺",
      });
    }
    if (myTag.length !== 0 && imageUrl.length !== 0 && myRegion.length !== 0) {
      try {
        await createFeed({
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
        toast.success("피드 등록 성공!", {
          icon: "😊",
        });
        router.push("/mypage");
        props.closeModal();
      } catch (error) {
        toast.error(error.message, {
          icon: "🤔",
        });
      }
    }
  };

  const onClickUpdate = async (data: IFormValue) => {
    const updateFeedInput: IUpdateFeedInput = {};
    if (data.detail) updateFeedInput.detail = data.detail;
    if (myRegion) updateFeedInput.regionId = myRegion;
    if (myTag) updateFeedInput.feedTags = myTag;
    if (data.outer) updateFeedInput.outer = data.outer;
    if (data.top) updateFeedInput.top = data.top;
    if (data.bottom) updateFeedInput.bottom = data.bottom;
    if (data.etc) updateFeedInput.etc = data.etc;
    if (imageUrl) updateFeedInput.imgURLs = imageUrl;

    try {
      await updateFeed({
        variables: {
          updateFeedInput,
          feedId: String(router.query.feedId),
        },
      });
      router.push("/mypage");
      toast.success("피드 수정 성공!", {
        icon: "😊",
      });
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  return (
    <>
      <FeedsWriteUI
        onClickImage={onClickImage}
        onChangeImgUrls={onChangeImgUrls}
        onClickDelete={onClickDelete}
        onClickPhoto={onClickPhoto}
        fileRef={fileRef}
        imageUrl={imageUrl}
        showPhoto={showPhoto}
        onClickRegion={onClickRegion}
        onClickTag={onClickTag}
        onClickSubmit={onClickSubmit}
        register={register}
        handleSubmit={handleSubmit}
        regionCategory={regionCategory}
        tagCategory={tagCategory}
        isEdit={props.isEdit}
        fetchData={props.fetchData}
        onClickUpdate={onClickUpdate}
        editRegion={editRegion}
        myRegion={myRegion}
        myTag={myTag}
        formState={formState}
        isActive={isActive}
        fetchImg={props.fetchImg}
      />
    </>
  );
};

export default FeedsWrite;
