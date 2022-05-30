import { ChangeEvent, MouseEvent } from "react";
import { FormState, UseFormHandleSubmit, UseFormRegisterReturn } from "react-hook-form";

export interface IFeedsWriteProps {
  onClickRegion: (e: any) => void;
  onClickTag: (e: any) => void;
  isEdit: boolean;
  fetchData?: any;
  regionId: string;
  tagFetch: any;
  fetchImg: any;
}

export interface IFeedsWriteUIProps {
  onClickImage: () => void;
  onChangeImgUrls: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDelete: (deleteIndex: any) => void;
  onClickPhoto: (photo: any) => void;
  fileRef: any;
  imageUrl: any;
  showPhoto: any;
  editRegion: string;
  isActive: boolean;
  isEdit: boolean;
  fetchData: any;
  myRegion: any;
  myTag: any;
  regionCategory: any;
  tagCategory: any;
  onClickRegion: (e: any) => void;
  onClickTag: (e: any) => void;
  handleSubmit: UseFormHandleSubmit;
  onClickUpdate: (data: IFormValue) => void;
  onClickSubmit: (data: IFormValue) => void;
  register: UseFormRegisterReturn;
}

// export interface IFormValue {
//   detail: string;
//   top: string;
//   bottom: string;
//   outer: string;
//   etc: string;
//   imgURLs: string;
// }

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

export interface IFormValue {
  register: UseFormRegisterReturn;
  detail: string;
  top: string;
  bottom: string;
  outer: string;
  etc: string;
  imgURLs: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

export interface IRegionTagLiProps {
  isRegionMatched: boolean;
}

export interface IStyleTagLi {
  myTag: boolean;
}
