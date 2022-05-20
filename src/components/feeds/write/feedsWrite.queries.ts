import { gql } from "@apollo/client";

export const M_UPLOAD_FEED_IMGS = gql`
  mutation uploadFeedImgs($imgs: [Upload!]!) {
    uploadFeedImgs(imgs: $imgs)
  }
`;
