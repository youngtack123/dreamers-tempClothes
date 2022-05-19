import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($userId: String!, $password: String!) {
    login(userId: $userId, password: $password)
  }
`;
