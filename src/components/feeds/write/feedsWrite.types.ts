import { ChangeEvent, MouseEvent } from "react";
import { FormState, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export interface IFeedsWriteProps {
  onClickRegion?: (e: string) => void;
  onClickTag?: (e: string) => void;
  isEdit?: boolean;
  fetchData?: any;
  fetchImg?: any;
  closeModal?: () => void;
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
  myRegion: string;
  myTag: string[];
  regionCategory: any;
  tagCategory: any;
  onClickRegion: (e: string) => void;
  onClickTag: (e: string) => void;
  onClickUpdate: (data: IFormValue) => void;
  onClickSubmit: (data: IFormValue) => void;
  register: UseFormRegister<IFormValue>;
  handleSubmit: UseFormHandleSubmit<IFormValue>;
  formState: FormState<IFormValue>;
  fetchImg: any;
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

export interface IFormValue {
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
