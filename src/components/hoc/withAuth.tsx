// @ts-ignore
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../common/store";
import { getAccessToken } from "../lib/getAccessToken";

// eslint-disable-next-line react/display-name
export const withAuth = (Componenet: any) => (props: any) => {
  const Router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    // 3. 글로벌 프로미스 방식(비회원 접근시 토큰 재발급 요청 방지를 위해 로딩과 함께 사용할 것)
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용 가능합니다!!!");
          Router.push("/");
        }
      });
    }
  }, []);

  return <Componenet {...props}></Componenet>;
};
