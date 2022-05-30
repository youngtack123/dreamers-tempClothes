export interface IOnClickRegion {
  e: any;
}

export interface IOotdUIProps {
  tempData: any;
  regionCategory: any;
  tagCategory: any;
  onClickRegion: (e: any) => void;
  onClickTag: (e: any) => void;
  onClickRemoveTag: (e: any) => void;
  myRegion: string;
  myTag: string[];
  data: any;
  tagSelected: string[];
  regionSelected: string;
  closeModal: () => void;
}
