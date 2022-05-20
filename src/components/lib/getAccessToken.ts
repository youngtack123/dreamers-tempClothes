import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken
  }
`;

export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient("https://team01.leo3179.shop/graphql", { credentials: "include" });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    console.log(result);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error: any) {}
}
