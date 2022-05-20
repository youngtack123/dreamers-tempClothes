import { useMutation } from "@apollo/client";
import React, { ChangeEvent, useRef, useState } from "react";
import FeedsWriteUI from "./feedsWrite.presenter";
import { M_UPLOAD_FEED_IMGS } from "./feedsWrite.queries";

const FeedsWrite = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | any>([]);

  const [showPhoto, setShowPhoto] = useState([]);

  const [uploadFeedImgs] = useMutation(M_UPLOAD_FEED_IMGS);

  const onClickImage = () => {
    fileRef.current?.click();
  };

  const onChangeImgUrls = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;

    try {
      const result = await uploadFeedImgs({
        variables: {
          imgs: file,
        },
      });
      console.log("result", result);
      setImageUrl((prev: string[]) => [...prev, result?.data.uploadFeedImgs]);
      setShowPhoto(showPhoto[0]);
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

  return (
    <FeedsWriteUI onClickImage={onClickImage} onChangeImgUrls={onChangeImgUrls} onClickDelete={onClickDelete} onClickPhoto={onClickPhoto} fileRef={fileRef} imageUrl={imageUrl} showPhoto={showPhoto} />
  );
};

export default FeedsWrite;
