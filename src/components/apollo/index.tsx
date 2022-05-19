import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../lib/getAccessToken";
import { accessTokenState, restoreAccessTokenLoadable } from "../common/store/index";

const ApolloConfig = (props: any) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
  useEffect(() => {
    // 3. 글로벌 프로미스 방식
    restoreAccessToken.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // 토큰 만료이면 에러 확인 띄워주어야함
  // operation은 방금 실행한 쿼리
  // forward 방금 실행한 쿼리 실행해줘

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1.에러를 캐치해야함
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 해당 에러가 토큰 만료 에러인지를 체크 해줘야함(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2. refreshToken 으로 accessToken 을 재발급 받아야 함(새로운 걸로 재발급)
          // 별도의 함수로 뺌
          getAccessToken().then((newAccessToken) => {
            // 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // 3. 재발급 받은 accessToken 으로 방금 실패한 쿼리 재요청 하기

            // 기존의 헤더에 있던 내용들을 다 가져오고 Autorization 부분만 덮어 씌우기
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            // 변경된 operation 재요청 하기

            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://team01.leo3179.shop/graphql", // api 연결
    headers: { Authorization: `Bearer ${accessToken}` }, // axios의 interceptor와 비슷한 개념인듯함 헤더에다가 토큰값 넣어줌
    credentials: "include", // 쿠키같은 중요한 정보를 포함 시킬거냐?
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(), // 변수에 저장한 것들이 메모리에 저장되어짐? 약간 그런 뜻 같음
  });

  return (
    <div>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </div>
  );
};

export default ApolloConfig;
