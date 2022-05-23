import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Fillheart from "../../../public/images/fillheart.svg";
import Emptyheart from "../../../public/images/emptyheart.svg";
import DMIcon from "../../../public/images/dm.svg";
import { useRouter } from "next/router";

// const FeedWrapper__Div = styled.div`
//   width: 230px;
//   border: 1px solid #bebebe;
//   border-radius: 15px;
//   margin-bottom: 15px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   // display: inline-block;
//   margin-right: 10px;
// `;

const FeedTop__Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const UserIcon__Div = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #bebebe;
  margin-right: 5px;
`;

const UserName__Span = styled.span`
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
`;

const FeedBody__Div = styled.div`
  width: 230px;
  height: 300px;
`;

const FeedImageBox__Div = styled.div`
  width: 230px;
  height: 300px;
  // background-color: #bebebe;
  overflow: hidden;
  position: relative;
  &:hover > div {
    opacity: 100;
  }
`;

const FeedImage__Img = styled.img`
  /* width: 230px;
  height: 300px; */
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0;
`;

const HoverIcon__Div = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition-duration: 0.15s;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%);
`;

const LikeHeart = styled(Emptyheart)`
  fill: #f14848;
  height: 18px;
  width: 17px;
  /* position: absolute;
  bottom: 10px;
  left: 10px; */
`;

const UnLikeHeart = styled(Emptyheart)`
  fill: transparent;
  stroke: #fff;
  stroke-width: 1px;
  height: 15px;
  width: 17px;
  /* position: absolute;
  bottom: 20px;
  left: 20px; */
`;

const Dm = styled(DMIcon)`
  fill: #fff;
  height: 14px;
  width: 16px;
  /* position: absolute;
  bottom: 10px;
  right: 10px; */
`;

const FeedBottom__Div = styled.div`
  width: 230px;
  padding: 10px 10px 5px;
`;

const BottomTop__Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SelectedTag__Span = styled.span`
  background: #fff2b2;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  text-align: center;
  padding: 2px 6px;
`;

const NoSelectedTag__Span = styled.span`
  background: #dddddd;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  text-align: center;
  padding: 2px 6px;
`;

const BottomBottom__Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ClothInfo__Div = styled.div`
  width: 210px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ClothIcon__Div = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #333;
  margin-right: 10px;
`;

const ClothName__Span = styled.span`
  width: 170px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Q_FETCH_FEED = gql`
  query fetchFeed($feedId: String!) {
    fetchFeed(feedId: $feedId) {
      id
      detail
      feedTag {
        tagName
      }
      user {
        nickname
      }
      # feedImg {
      #   imgURL
      # }
    }
  }
`;

const M_TOGGLE_LIKE_FEED = gql`
  mutation toggleLikeFeed($userId: String!, $feedId: String!) {
    toggleLikeFeed(userId: $userId, feedId: $feedId)
  }
`;

const OotdFeed = (props) => {
  const router = useRouter();

  const { data: feedData } = useQuery(Q_FETCH_FEED, {
    variables: {
      feedId: String(router.query.feedId),
    },
  });

  const [toggleLikeFeed] = useMutation(M_TOGGLE_LIKE_FEED);

  const onClickLike = (e) => {
    toggleLikeFeed({
      variables: {
        userId: "userData.userId",
        feedId: e.target.value,
      },
    });
  };

  const onClickMoveToDetail = (event) => {
    router.push(`/feeds/${event.currentTarget.id}`);
  };

  console.log(props.el);

  return (
    // <FeedWrapper__Div>
    <>
      <FeedTop__Div>
        <UserIcon__Div></UserIcon__Div>
        <UserName__Span>{props.el.user.nickname}</UserName__Span>
      </FeedTop__Div>

      <FeedBody__Div>
        <FeedImageBox__Div id={props.el.id} onClick={onClickMoveToDetail}>
          <FeedImage__Img src={`https://storage.googleapis.com/${props.el.feedImg[0]?.imgURL}` ? `https://storage.googleapis.com/${props.el.feedImg[0]?.imgURL}` : ""} />
          <HoverIcon__Div>
            <UnLikeHeart onClick={onClickLike} />
            {/* {toggleLikeFeed ? <LikeHeart /> : <UnLikeHeart />} */}
            <Dm />
          </HoverIcon__Div>
        </FeedImageBox__Div>
      </FeedBody__Div>

      <FeedBottom__Div>
        <BottomTop__Div>
          <SelectedTag__Span>#{props.myRegion}</SelectedTag__Span>
          {props.el.feedTag.map((el, idx) => (
            <SelectedTag__Span key={idx}>#{el.tagName}</SelectedTag__Span>
          ))}
        </BottomTop__Div>

        <BottomBottom__Div>
          {props.el.outer ? (
            <ClothInfo__Div>
              <ClothIcon__Div></ClothIcon__Div>
              <ClothName__Span>{props.el?.outer}</ClothName__Span>
            </ClothInfo__Div>
          ) : (
            ""
          )}

          {props.el.top ? (
            <ClothInfo__Div>
              <ClothIcon__Div></ClothIcon__Div>
              <ClothName__Span>{props.el?.top}</ClothName__Span>
            </ClothInfo__Div>
          ) : (
            ""
          )}

          {props.el.bottom ? (
            <ClothInfo__Div>
              <ClothIcon__Div></ClothIcon__Div>
              <ClothName__Span>{props.el?.bottom}</ClothName__Span>
            </ClothInfo__Div>
          ) : (
            ""
          )}

          {props.el.etc ? (
            <ClothInfo__Div>
              <ClothIcon__Div></ClothIcon__Div>
              <ClothName__Span>{props.el?.etc}</ClothName__Span>
            </ClothInfo__Div>
          ) : (
            ""
          )}
        </BottomBottom__Div>
      </FeedBottom__Div>
    </>
    // </FeedWrapper__Div>
  );
};

export default OotdFeed;
