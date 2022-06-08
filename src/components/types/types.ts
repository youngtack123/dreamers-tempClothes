export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IChat = {
  __typename?: 'Chat';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  message: Scalars['String'];
  room: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IComment = {
  __typename?: 'Comment';
  commentDetail: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  feed: IFeed;
  id: Scalars['String'];
  pComment?: Maybe<IComment>;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ICreateFeedInput = {
  bottom?: InputMaybe<Scalars['String']>;
  detail: Scalars['String'];
  etc?: InputMaybe<Scalars['String']>;
  feedTags: Array<Scalars['String']>;
  imgURLs: Array<Scalars['String']>;
  outer?: InputMaybe<Scalars['String']>;
  regionId: Scalars['String'];
  top?: InputMaybe<Scalars['String']>;
};

export type IFeed = {
  __typename?: 'Feed';
  bottom?: Maybe<Scalars['String']>;
  comment: Array<IComment>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  detail: Scalars['String'];
  etc?: Maybe<Scalars['String']>;
  feedImg: Array<IFeedImg>;
  feedLike?: Maybe<Array<IFeedLike>>;
  feedTag: Array<IFeedTag>;
  id: Scalars['String'];
  likeCount?: Maybe<Scalars['Int']>;
  outer?: Maybe<Scalars['String']>;
  region: IRegion;
  top?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: IUser;
  watchCount?: Maybe<Scalars['Int']>;
};

export type IFeedImg = {
  __typename?: 'FeedImg';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  feed: IFeed;
  id: Scalars['String'];
  imgURL: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type IFeedLike = {
  __typename?: 'FeedLike';
  feed: IFeed;
  id: Scalars['String'];
  isLike: Scalars['Boolean'];
  user: IUser;
};

export type IFeedTag = {
  __typename?: 'FeedTag';
  count: Scalars['Int'];
  deletedAt: Scalars['DateTime'];
  feed: Array<IFeed>;
  id: Scalars['String'];
  tagName: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  cancelButton: IPaymentButton;
  confirmAuthNumber: Scalars['String'];
  confirmOverlapEmail: Scalars['String'];
  confirmOverlapNic: Scalars['String'];
  createButton: IPaymentButton;
  createComment: IComment;
  createFeed: IFeed;
  createFeedImgs: Array<IFeedImg>;
  createPhoneAuth: Scalars['String'];
  createRedis: Scalars['String'];
  createRegion: IRegion;
  createUser: IUser;
  deleteComment: Scalars['Boolean'];
  deleteFeed: Scalars['Boolean'];
  deleteFeedImgs: Scalars['Boolean'];
  deleteRegion: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['String'];
  payChat: IUser;
  restoreAccessToken: Scalars['String'];
  toggleLikeFeed: Scalars['Boolean'];
  updateComment: IComment;
  updateFeed: IFeed;
  updateFeedImgs: Array<Scalars['String']>;
  updatePassword: IUser;
  updateRegion: IRegion;
  updateUser: IUser;
  uploadFeedImgs: Array<Scalars['String']>;
  uploadUserImg: Scalars['String'];
};


export type IMutationCancelButtonArgs = {
  imp_uid: Scalars['String'];
};


export type IMutationConfirmAuthNumberArgs = {
  authNumber: Scalars['String'];
};


export type IMutationConfirmOverlapEmailArgs = {
  email: Scalars['String'];
};


export type IMutationConfirmOverlapNicArgs = {
  nickname: Scalars['String'];
};


export type IMutationCreateButtonArgs = {
  amount: Scalars['Int'];
  imp_uid: Scalars['String'];
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateFeedArgs = {
  createFeedInput: ICreateFeedInput;
};


export type IMutationCreateFeedImgsArgs = {
  feedId: Scalars['String'];
  imgURLs: Array<Scalars['String']>;
};


export type IMutationCreatePhoneAuthArgs = {
  phone: Scalars['String'];
};


export type IMutationCreateRegionArgs = {
  lat: Scalars['String'];
  lon: Scalars['String'];
  regionId: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['String'];
};


export type IMutationDeleteFeedArgs = {
  feedId: Scalars['String'];
};


export type IMutationDeleteFeedImgsArgs = {
  feedImgId: Scalars['String'];
};


export type IMutationDeleteRegionArgs = {
  regionId: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationToggleLikeFeedArgs = {
  feedId: Scalars['String'];
};


export type IMutationUpdateCommentArgs = {
  commentId: Scalars['String'];
  email: Scalars['String'];
  updateCommentInput: IUpdateCommentInput;
};


export type IMutationUpdateFeedArgs = {
  feedId: Scalars['String'];
  updateFeedInput: IUpdateFeedInput;
};


export type IMutationUpdateFeedImgsArgs = {
  feedId: Scalars['String'];
  imgURLs: Array<Scalars['String']>;
};


export type IMutationUpdatePasswordArgs = {
  originPassword: Scalars['String'];
  updatePassword: Scalars['String'];
};


export type IMutationUpdateRegionArgs = {
  lat: Scalars['String'];
  lon: Scalars['String'];
  regionId: Scalars['String'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadFeedImgsArgs = {
  imgs: Array<Scalars['Upload']>;
};


export type IMutationUploadUserImgArgs = {
  img: Scalars['Upload'];
};

export enum IPayment_Button_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
}

export type IPaymentButton = {
  __typename?: 'PaymentButton';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  imp_uid: Scalars['String'];
  status: IPayment_Button_Status_Enum;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchComments: IFetchCommentOutput;
  fetchFeed: IFeed;
  fetchFeedLike: IFetchFeedLikeOutput;
  fetchFeedTags: Array<IFeedTag>;
  fetchFeeds: IFetchFeedOutput;
  fetchLogs: Array<IChat>;
  fetchMyFeeds: IFetchFeedOutput;
  fetchNickname: IUser;
  fetchRedis: Scalars['String'];
  fetchRegion: IRegion;
  fetchSubComments: Array<IComment>;
  fetchUser: IUser;
  fetchUserFeeds: IFetchFeedOutput;
  fetchUsers: Array<IUser>;
  getWeather: IWeatherOutPut;
};


export type IQueryFetchCommentsArgs = {
  feedId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchFeedArgs = {
  feedId: Scalars['String'];
};


export type IQueryFetchFeedLikeArgs = {
  feedId: Scalars['String'];
};


export type IQueryFetchFeedTagsArgs = {
  count: Scalars['Int'];
};


export type IQueryFetchFeedsArgs = {
  feedTags?: InputMaybe<Array<Scalars['String']>>;
  page?: InputMaybe<Scalars['Int']>;
  regionId: Scalars['String'];
};


export type IQueryFetchLogsArgs = {
  opponentNickname: Scalars['String'];
};


export type IQueryFetchMyFeedsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type IQueryFetchNicknameArgs = {
  nickname: Scalars['String'];
};


export type IQueryFetchRegionArgs = {
  reagionName: Scalars['String'];
};


export type IQueryFetchSubCommentsArgs = {
  pCommentId: Scalars['String'];
};


export type IQueryFetchUserFeedsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  userNickname: Scalars['String'];
};


export type IQueryGetWeatherArgs = {
  regionName: Scalars['String'];
};

export type IRegion = {
  __typename?: 'Region';
  id: Scalars['String'];
  lat: Scalars['String'];
  lon: Scalars['String'];
};

export type IUpdateFeedInput = {
  bottom?: InputMaybe<Scalars['String']>;
  detail?: InputMaybe<Scalars['String']>;
  etc?: InputMaybe<Scalars['String']>;
  feedTags?: InputMaybe<Array<Scalars['String']>>;
  imgURLs?: InputMaybe<Array<Scalars['String']>>;
  outer?: InputMaybe<Scalars['String']>;
  regionId?: InputMaybe<Scalars['String']>;
  top?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  button: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  nickname: Scalars['String'];
  phone: Scalars['String'];
  region?: Maybe<IRegion>;
  style?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userImgURL?: Maybe<Scalars['String']>;
};

export type IWeatherOutPut = {
  __typename?: 'WeatherOutPut';
  feelsLike: Scalars['Float'];
  rainAmount: Scalars['Float'];
  rainRate: Scalars['Float'];
  status: Scalars['String'];
  temp: Scalars['Float'];
  uvi: Scalars['Float'];
  weatherDetail: Scalars['String'];
  weatherIcon: Scalars['String'];
};

export type ICreateCommentInput = {
  commentDetail: Scalars['String'];
  feedId: Scalars['String'];
  pCommentId?: InputMaybe<Scalars['String']>;
};

export type ICreateUserInput = {
  email: Scalars['String'];
  gender: Scalars['String'];
  nickname: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  regionId: Scalars['String'];
  style: Scalars['String'];
  userImgURL?: InputMaybe<Scalars['String']>;
};

export type IFetchCommentOutput = {
  __typename?: 'fetchCommentOutput';
  comments: Array<IComment>;
  page?: Maybe<Scalars['Int']>;
};

export type IFetchFeedLikeOutput = {
  __typename?: 'fetchFeedLikeOutput';
  isLike: Scalars['Boolean'];
  likeCount: Scalars['Int'];
  nickname: Scalars['String'];
};

export type IFetchFeedOutput = {
  __typename?: 'fetchFeedOutput';
  count?: Maybe<Scalars['Int']>;
  feeds: Array<IFeed>;
  page?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
};

export type IUpdateCommentInput = {
  commentDetail?: InputMaybe<Scalars['String']>;
  feedId?: InputMaybe<Scalars['String']>;
  pCommentId?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  regionId?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Scalars['String']>;
  userImgURL?: InputMaybe<Scalars['String']>;
};
