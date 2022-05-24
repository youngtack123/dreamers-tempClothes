import { gql } from "@apollo/client";

export const UPDATE_PASSWORD = gql`
  mutation updatePassword($originPassword: String!, $updatePassword: String!) {
    updatePassword(originPassword: $originPassword, updatePassword: $updatePassword) {
      id
      email
      phone
      gender
      style
      nickname
    }
  }
`;
