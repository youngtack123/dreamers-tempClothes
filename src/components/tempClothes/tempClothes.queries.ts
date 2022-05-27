import { gql } from "@apollo/client";

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
export const Q_FETCH_FEED_TAGS = gql`
  query fetchFeedTags($count: Int!) {
    fetchFeedTags(count: $count) {
      tagName
      feed {
        id
        feedImg {
          imgURL
        }
      }
    }
  }
`;
