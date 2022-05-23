import { gql } from "@apollo/client";

export const M_CREATE_COMMENT = gql`
  mutation createComment($userId: String!, $createCommentInput: createCommentInput!) {
    createComment(userId: $userId, createCommentInput: $createCommentInput) {
      id
      comment
    }
  }
`;

export const Q_FETCH_USER = gql`
  query fetchUser {
    userId
    nickname
  }
`;
export const Q_FETCH_COMMENT = gql`
  query fetchComment($feedId: String!) {
    fetchComment(feedId: $feedId) {
      id
      comment
      feed {
        id
        comment {
          id
          comment
        }
      }
      user {
        userId
      }
    }
  }
`;
