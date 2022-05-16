import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";

const ApolloConfig = (props: any) => {
  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql", // api 연결
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(), // 변수에 저장한 것들이 메모리에 저장되어짐? 약간 그런 뜻 같음
  });

  return (
    <div>
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </div>
  );
};

export default ApolloConfig;
