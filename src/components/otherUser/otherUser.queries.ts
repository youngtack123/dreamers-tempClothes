import { gql } from "@apollo/client";

export const Q_FETCH_USER_FEEDS = gql`
  query fetchUserFeeds($userNickname: String!) {
    fetchUserFeeds(userNickname: $userNickname) {
      feeds {
        id
        feedImg {
          id
          imgURL
        }
      }
    }
  }
`;

export const Q_FETCH_NICK_NAME = gql`
  query fetchNickname($nickname: String!) {
    fetchNickname(nickname: $nickname) {
      nickname
      style
      region {
        id
        lat
        lon
      }
    }
  }
`;
