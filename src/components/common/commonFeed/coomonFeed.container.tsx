import { gql, useMutation, useQuery } from "@apollo/client";
import * as feed from "./commonFeed.styles";
import { useRouter } from "next/router";
import { useState } from "react";
// import Modal from "../common/commonModal";
import FeedDetail from "../../feeds/detail/feedDetail.container";
import Link from "next/link";
import Modal from "../commonModal";
import { useRecoilState } from "recoil";
import { toast } from "react-toastify";
import Chat from "../../../../pages/chat";
import LikeIcon from "../../../../public/images/emptyheart.svg";
import DMIcon from "../../../../public/images/talk.svg";
import Modal2 from "../commonModal2";

const M_TOGGLE_LIKE_FEED = gql`
  mutation toggleLikeFeed($feedId: String!) {
    toggleLikeFeed(feedId: $feedId)
  }
`;

const CREATE_ROOM = gql`
  mutation createRoom($guestNickname: String!) {
    createRoom(guestNickname: $guestNickname)
  }
`;

const OotdFeed = (props) => {
  const router = useRouter();

  const [toggleLikeFeed] = useMutation(M_TOGGLE_LIKE_FEED);
  const [isLike, setIsLike] = useState(false);
  const [createRoom] = useMutation(CREATE_ROOM);

  const [modalOpen, setModalOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);
  const [createRoomId, setCreateRoomId] = useState<any>("");
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const openChatModal = () => {
    setChatModalOpen(true);
  };
  const closeChatModal = () => {
    setChatModalOpen(false);
  };
  const onClickLike = (e) => {
    try {
      toggleLikeFeed({
        variables: {
          feedId: String(e.currentTarget.id),
        },
      });
      setIsLike(!isLike);
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  const selectNickname = (nickname: string) => {
    localStorage.setItem("nickname", nickname);
    router.push("/otherUser");
  };

  const createRoomFunc = async () => {
    try {
      const createRoomResult = await createRoom({
        variables: {
          guestNickname: props.el.user.nickname,
        },
      });
      setCreateRoomId(createRoomResult);
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  return (
    <>
      <feed.FeedTop__Div>
        <feed.UserIcon__Img src="/images/user.png" />
        <feed.UserName__Span
          onClick={() => {
            selectNickname(props.el.user.nickname);
          }}
        >
          {props.el.user.nickname}
        </feed.UserName__Span>
      </feed.FeedTop__Div>

      {/* /feeds/[feedId]?feedId=${props.el.id} */}
      <feed.FeedBody__Div>
        <feed.FeedImageBox__Div id={props.el.id} onClick={openModal}>
          <feed.FeedImage__Img src={`https://storage.googleapis.com/${props.el.feedImg[0]?.imgURL}` ? `https://storage.googleapis.com/${props.el.feedImg[0]?.imgURL}` : ""} />
        </feed.FeedImageBox__Div>

        <feed.HoverIcon__Div>
          {isLike ? (
            <LikeIcon id={props.el.id} onClick={onClickLike} style={{ cursor: "pointer" }} width="18" height="16" fill="#F14848" stroke="#F14848" />
          ) : (
            <LikeIcon id={props.el.id} onClick={onClickLike} style={{ cursor: "pointer" }} width="18" height="16" stroke="#fff" />
          )}
          <DMIcon
            onClick={() => {
              openChatModal(), createRoomFunc();
            }}
            style={{ cursor: "pointer" }}
            width="18"
            height="17.5"
            stroke="#fff"
          />
        </feed.HoverIcon__Div>
      </feed.FeedBody__Div>

      <feed.FeedBottom__Div>
        <feed.BottomTop__Div>
          <feed.SelectedRegion__Span myRegion={props.myRegion}>#{props.myRegion}</feed.SelectedRegion__Span>
          {props.el.feedTag.map((el, idx) => (
            <feed.SelectedTag__Span key={idx} tagSelected={props.tagSelected.includes(el.tagName)}>
              #{el.tagName}
            </feed.SelectedTag__Span>
          ))}
        </feed.BottomTop__Div>

        <feed.BottomBottom__Div>
          {props.el.outer ? (
            <feed.ClothInfo__Div>
              <feed.OuterIcon__SVG></feed.OuterIcon__SVG>
              <feed.ClothName__Span>{props.el?.outer}</feed.ClothName__Span>
            </feed.ClothInfo__Div>
          ) : (
            ""
          )}

          {props.el.top ? (
            <feed.ClothInfo__Div>
              <feed.TopIcon__SVG></feed.TopIcon__SVG>
              <feed.ClothName__Span>{props.el?.top}</feed.ClothName__Span>
            </feed.ClothInfo__Div>
          ) : (
            ""
          )}

          {props.el.bottom ? (
            <feed.ClothInfo__Div>
              <feed.BottomIcon__SVG></feed.BottomIcon__SVG>
              <feed.ClothName__Span>{props.el?.bottom}</feed.ClothName__Span>
            </feed.ClothInfo__Div>
          ) : (
            ""
          )}

          {props.el.etc ? (
            <feed.ClothInfo__Div>
              <feed.ETCIcon__SVG></feed.ETCIcon__SVG>
              <feed.ClothName__Span>{props.el?.etc}</feed.ClothName__Span>
            </feed.ClothInfo__Div>
          ) : (
            ""
          )}
        </feed.BottomBottom__Div>
      </feed.FeedBottom__Div>

      <Modal2 open={modalOpen} close={closeModal} header="피드 디테일">
        <FeedDetail ootdFeedId={props.el.id} />
      </Modal2>

      <Modal open={chatModalOpen} close={closeChatModal} header="채팅하기">
        <Chat closeChatModal={closeChatModal} another={props.el.user.nickname} createRoomId={createRoomId}></Chat>
      </Modal>
    </>
  );
};

export default OotdFeed;
