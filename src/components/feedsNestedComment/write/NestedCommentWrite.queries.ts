import { gql } from "@apollo/client";

export const Q_FETCH_SUB_COMMENTS = gql`
  query fetchSubComments($pCommentId: String!) {
    fetchSubComments(pCommentId: $pCommentId) {
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
