import { gql } from "@apollo/client";

export const M_CREATE_COMMENT = gql`
  mutation createComment($userId: String!, $createCommentInput: createCommentInput!) {
    createComment(userId: $userId, createCommentInput: $createCommentInput) {
      id
      comment
    }
  }
`;
