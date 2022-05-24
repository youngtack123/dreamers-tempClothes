import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: updateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      email
      phone
      gender
      style
      nickname
      userImgURL
      region {
        id
        lat
        lon
      }
    }
  }
`;
export const CONFIRM_AUTH_NUMBER = gql`
  mutation confirmAuthNumber($authNumber: String!) {
    confirmAuthNumber(authNumber: $authNumber)
  }
`;

export const CREATE_PHONE_AUTH = gql`
  mutation createPhoneAuth($phone: String!) {
    createPhoneAuth(phone: $phone)
  }
`;
