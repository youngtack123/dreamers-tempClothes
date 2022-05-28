import { ChangeEvent } from "react";

export interface IFeedsWriteUIProps {
  onClickImage: () => void;
  onChangeImgUrls: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDelete: (deleteIndex: any) => void;
  onClickPhoto: (photo: any) => void;
  fileRef: any;
  imageUrl: any;
  showPhoto: any;
  editRegion: string;
}

export interface IFormProps {
  detail: string;
  top: string;
  bottom: string;
  outer: string;
  etc: string;
}

export interface IUpdateFeedInput {
  detail?: string;
  regionId?: any;
  feedTags?: any;
  outer?: string;
  top?: string;
  bottom?: string;
  etc?: string;
  imgURLs?: any;
}
