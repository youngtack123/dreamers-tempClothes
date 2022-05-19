import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: createUserInput!) {
    createUser(createUserInput: $createUserInput) {
      userId
      email
      phone
      gender
      style
    }
  }
`;

export const CONFIRM_OVERLAP_ID = gql`
  mutation confirmOverlapId($userId: String!) {
    confirmOverlapId(userId: $userId)
  }
`;

export const CONFIRM_OVERLAP_NIC = gql`
  mutation confirmOverlapNic($nickname: String!) {
    confirmOverlapNic(nickname: $nickname)
  }
`;
