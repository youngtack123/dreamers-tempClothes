import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query {
    fetchUser {
      id
      email
      phone
      gender
      style
      nickname
      userImgURL
      button
      region {
        id
        lat
        lon
      }
      deletedAt
    }
  }
`;

export const FETCH_WEATHER = gql`
  query getWeather($regionName: String!) {
    getWeather(regionName: $regionName) {
      status
      weatherDetail
      weatherIcon
      rainAmount
      rainRate
      temp
      feelsLike
      uvi
    }
  }
`;
