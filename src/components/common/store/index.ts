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
    console.log("newAccessToken", newAccessToken);
    return newAccessToken;
  },
});
