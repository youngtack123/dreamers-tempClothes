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
