import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: createUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      phone
      gender
      style
    }
  }
`;

export const CONFIRM_OVERLAP_EMAIL = gql`
  mutation confirmOverlapEmail($email: String!) {
    confirmOverlapEmail(email: $email)
  }
`;

export const CONFIRM_OVERLAP_NIC = gql`
  mutation confirmOverlapNic($nickname: String!) {
    confirmOverlapNic(nickname: $nickname)
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
