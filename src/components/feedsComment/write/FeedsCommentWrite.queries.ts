import { gql } from "@apollo/client";

export const M_CREATE_COMMENT = gql`
  mutation createComment($createCommentInput: createCommentInput!) {
    createComment(createCommentInput: $createCommentInput) {
      id
      commentDetail
    }
  }
`;

export const Q_FETCH_USER = gql`
  query {
    fetchUser {
      id
      email
      nickname
    }
  }
`;
export const Q_FETCH_COMMENTS = gql`
  query fetchComments($page: Float, $feedId: String!) {
    fetchComments(page: $page, feedId: $feedId) {
      id
      commentDetail
      user {
        nickname
      }
      pComment {
        id
      }
    }
  }
`;
