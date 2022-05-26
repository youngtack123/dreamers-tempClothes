import { gql } from "@apollo/client";

export const Q_FETCH_FEEDS = gql`
  query fetchFeeds($feedTags: [String!], $regionId: String!, $page: Float) {
    fetchFeeds(feedTags: $feedTags, regionId: $regionId, page: $page) {
      feeds {
        id
        detail
        top
        bottom
        outer
        etc
        user {
          nickname
        }
        feedTag {
          tagName
        }
        feedImg {
          imgURL
        }
      }
    }
  }
`;

export const Q_GET_WEATHER = gql`
  query getWeather($regionName: String!) {
    getWeather(regionName: $regionName) {
      temp
    }
  }
`;

export const Q_FETCH_USER = gql`
  query {
    fetchUser {
      id
      region {
        id
        lat
        lon
      }
    }
  }
`;
