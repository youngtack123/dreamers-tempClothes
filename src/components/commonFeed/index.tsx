import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Fillheart from "../../../public/images/fillheart.svg";
import Emptyheart from "../../../public/images/emptyheart.svg";
import DMIcon from "../../../public/images/dm.svg";

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
`;

const FeedImage__Img = styled.img`
  /* width: 230px;
  height: 300px; */
  width: 100%;
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
  /* background-color: rgba(0, 0, 0, 0.25); */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.25) 30%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  &:hover {
    opacity: 100;
  }
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
  font-size: 12px;
`;

const Q_FETCH_FEEDS_WITH_TAGS = gql`
  query fetchFeedsWithTags($feedTags: [String!]!, $regionId: String!) {
    fetchFeedsWithTags(feedTags: $feedTags, regionId: $regionId) {
      detail
      feedTag {
        tagName
      }
    }
  }
`;

const Q_FETCH_FEED = gql`
  query fetchFeed($feedId: String!) {
    fetchFeed(feedId: $feedId) {
      detail
      feedTag {
        tagName
      }
    }
  }
`;

const OotdFeed = (props) => {
  const { data } = useQuery(Q_FETCH_FEEDS_WITH_TAGS, {
    variables: {
      feedTags: props.myTag,
      regionId: props.myRegion,
    },
  });

  const { data: feedData } = useQuery(Q_FETCH_FEED, {
    variables: {
      feedId: "fe603d8e-1414-4efe-be66-7e15165617fb",
    },
  });

  console.log(props.el.detail);

  return (
    // <FeedWrapper__Div>
    <>
      <FeedTop__Div>
        <UserIcon__Div></UserIcon__Div>
        <UserName__Span>{props.el.user?.userId}</UserName__Span>
      </FeedTop__Div>

      <FeedBody__Div>
        <FeedImageBox__Div>
          <FeedImage__Img src="https://i0.wp.com/echeveau.net/wp-content/uploads/2021/03/OOTD-20210312-2.jpg?w=1200&ssl=1" />
          <HoverIcon__Div>
            <LikeHeart />
            <UnLikeHeart />
            <Dm />
          </HoverIcon__Div>
        </FeedImageBox__Div>
      </FeedBody__Div>

      <FeedBottom__Div>
        <BottomTop__Div>
          {/* <SelectedTag__Span> */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {props.el.feedTag.map((el, idx) => (
              <SelectedTag__Span key={idx}>#{el.tagName}</SelectedTag__Span>
            ))}
          </div>
          {/* </SelectedTag__Span> */}
          {/* {feedData?.feedTag?.map((el, idx) => (
            <SelectedTag__Span key={idx}>#{el.tagName}</SelectedTag__Span>
          ))} */}
          {/* <NoSelectedTag__Span>#스트릿</NoSelectedTag__Span> */}
        </BottomTop__Div>

        <BottomBottom__Div>
          <ClothInfo__Div>
            <ClothIcon__Div></ClothIcon__Div>
            {/* {props.el.detail.map((el, idx) => (
              <ClothName__Span key={idx}>{el}</ClothName__Span>
            ))} */}
            {props.el.detail}
          </ClothInfo__Div>
        </BottomBottom__Div>
      </FeedBottom__Div>
    </>
    // </FeedWrapper__Div>
  );
};

export default OotdFeed;
