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
