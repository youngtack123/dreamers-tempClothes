import { IQuery } from "../types/types";

export interface ITempClothesUIProps {
  weatherData?: Pick<IQuery, "getWeather">;
  userData?: Pick<IQuery, "fetchUser">;
  tagData?: Pick<IQuery, "fetchFeedTags">;
  // weatherData: {
  //   getWeather: {
  //     temp: number;
  //   };
  // };
  // userData: {
  //   fetchUser: {
  //     id: string;
  //     region: {
  //       id: string;
  //     };
  //   };
  // };
  //   tagData: {
  //     fetchFeedTags: [
  //       {
  //         feed: [
  //           {
  //             feedImg: [
  //               {
  //                 imgURL: string;
  //               },
  //               {
  //                 imgURL: string;
  //               }
  //             ];
  //             id: string;
  //           }
  //         ];
  //         tagName: string;
  //       },
  //       {
  //         feed: [
  //           {
  //             feedImg: [
  //               {
  //                 imgURL: string;
  //               },
  //               {
  //                 imgURL: string;
  //               }
  //             ];
  //             id: string;
  //           }
  //         ];
  //         tagName: string;
  //       }
  //     ];
  //   };
}
