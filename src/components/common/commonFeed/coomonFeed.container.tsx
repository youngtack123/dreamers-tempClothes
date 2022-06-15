import { useMutation, useQuery } from "@apollo/client";
import * as feed from "./commonFeed.styles";
import { useRouter } from "next/router";
import { useState } from "react";
import FeedDetail from "../../feeds/detail/feedDetail.container";
import Modal from "../commonModal";
import { toast } from "react-toastify";
import Chat from "../../../../pages/chat";
import LikeIcon from "../../../../public/images/emptyheart.svg";
import DMIcon from "../../../../public/images/talk.svg";
import Modal2 from "../commonModal2";
import "aos/dist/aos.css";
import { M_TOGGLE_LIKE_FEED, Q_FETCH_FEED_LIKE } from "../../feeds/detail/feedDetail.queries";
import { IMutation, IMutationToggleLikeFeedArgs, IQuery, IQueryFetchFeedLikeArgs } from "../../types/types";

const OotdFeed = (props) => {
  const router = useRouter();

  const [toggleLikeFeed] = useMutation<Pick<IMutation, "toggleLikeFeed">, IMutationToggleLikeFeedArgs>(M_TOGGLE_LIKE_FEED);
  const { data: feedLike } = useQuery<Pick<IQuery, "fetchFeedLike">, IQueryFetchFeedLikeArgs>(Q_FETCH_FEED_LIKE, {
    variables: { feedId: props.el.id },
  });

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [chatModalOpen, setChatModalOpen] = useState<boolean>(false);

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
  const onClickLike = async (e: any) => {
    try {
      await toggleLikeFeed({
        variables: {
          feedId: String(e.currentTarget.id),
        },
        refetchQueries: [
          {
            query: Q_FETCH_FEED_LIKE,
            variables: { feedId: e.currentTarget.id },
          },
        ],
      });
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

      <feed.FeedBody__Div>
        <feed.FeedImageBox__Div id={props.el.id} onClick={openModal}>
          <feed.FeedImage__Img src={`https://storage.googleapis.com/${props.el.feedImg[0]?.imgURL}` ? `https://storage.googleapis.com/${props.el.feedImg[0]?.imgURL}` : ""} />
        </feed.FeedImageBox__Div>

        <feed.HoverIcon__Div>
          {feedLike?.fetchFeedLike.isLike ? (
            <LikeIcon id={props.el.id} onClick={onClickLike} style={{ cursor: "pointer" }} width="18" height="16" fill="#F14848" stroke="#F14848" />
          ) : (
            <LikeIcon id={props.el.id} onClick={onClickLike} style={{ cursor: "pointer" }} width="18" height="16" stroke="#fff" />
          )}
          <DMIcon
            onClick={() => {
              openChatModal();
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
        <Chat closeChatModal={closeChatModal} another={props.el.user.nickname}></Chat>
      </Modal>
    </>
  );
};

export default OotdFeed;
