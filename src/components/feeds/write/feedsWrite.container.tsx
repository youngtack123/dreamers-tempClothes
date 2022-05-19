import { gql, useMutation } from "@apollo/client";
import React, { ChangeEvent, useRef, useState } from "react";
import FeedsWriteUI from "./feedsWrite.presenter";

const UPLOAD_IMG = gql`
  mutation uploadImg($imgs: [Upload!]!) {
    uploadImg(imgs: $imgs)
  }
`;

const FeedsWrite = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | any>([]);

  const [showPhoto, setShowPhoto] = useState([]);

  const [uploadImg] = useMutation(UPLOAD_IMG);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeImgUrls = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    const imageUrlList = [...file];
    console.log(imageUrlList);

    imageUrlList.map(async (el) => {
      try {
        const result = await uploadImg({
          variables: {
            imgs: imageUrl,
          },
        });
        setImageUrl((prev: string[]) => [...prev, result.data?.uploadFile.url]);
        setShowPhoto(showPhoto[0]);
      } catch (error: any) {
        alert(error.message);
      }
    });
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

  return (
    <FeedsWriteUI onClickImage={onClickImage} onChangeImgUrls={onChangeImgUrls} onClickDelete={onClickDelete} onClickPhoto={onClickPhoto} fileRef={fileRef} imageUrl={imageUrl} showPhoto={showPhoto} />
  );
};

export default FeedsWrite;
