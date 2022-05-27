import { atom, selector } from "recoil";
import { getAccessToken } from "../../lib/getAccessToken";
import { v1 } from "uuid";

//----mypage Select List Data ---//
export const selectMyPageList = atom({
  key: v1(),
  default: "나衣 룩북",
});

//-------loginAccessTokenState------//
export const accessTokenState = atom({
  key: v1(),
  default: "",
});

//-------loginRestoreAccessToken-----//
export const restoreAccessTokenLoadable = selector({
  key: v1(),
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const regionCategory = ["서울", "경기", "강원", "충북", "충남", "경북", "경남", "전북", "전남", "제주"];

export const tagCategory = [
  {
    id: 1,
    tagTitle: "스타일",
    tagItem: ["캐주얼", "스트릿", "트레이닝", "포멀", "세미포멀"],
  },
  {
    id: 2,
    tagTitle: "아우터",
    tagItem: ["트랙자켓", "플리스", "자켓", "점퍼", "코트"],
  },
  {
    id: 3,
    tagTitle: "상의",
    tagItem: ["티셔츠", "셔츠/블라우스", "니트", "맨투맨", "후드"],
  },
  {
    id: 4,
    tagTitle: "하의",
    tagItem: ["청바지", "슬랙스", "반바지", "스커트"],
  },
  {
    id: 5,
    tagTitle: "기타",
    tagItem: ["원피스"],
  },
];
//--------------결제--------------//
export const amountState = atom({
  key: v1(),
  default: 100,
});

//-------------타이머-----------//
export const timerState = atom({
  key: v1(),
  default: false,
});

//---------회원가입 인증-----------//
export const authState = atom({
  key: v1(),
  default: false,
});

//--------- 클릭한 유저 닉네임 값 -----------//
export const ClickedUser = atom({
  key: v1(),
  default: "",
});
