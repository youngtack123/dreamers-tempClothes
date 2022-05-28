import React, { useState } from "react";
import * as Detail from "./feedDetail.styles";
import LikeIcon from "../../../../public/images/emptyheart.svg";
import DMIcon from "../../../../public/images/talk.svg";
import MoreIcon from "../../../../public/images/more.svg";
import { useMutation, useQuery } from "@apollo/client";
import { M_DELETE_FEED } from "./feedDetail.queries";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import Modal from "../../common/commonModal";
import FeedsWrite from "../write/feedsWrite.container";
import FeedsCommentList from "../../feedsComment/list/FeedsCommentList.container";
import FeedsCommentWrite from "../../feedsComment/write/FeedsCommentWrite.container";
import { useRecoilState } from "recoil";

function FeedDetailUI(props) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  // const [modalOpen, setModalOpen] = useState(false);
  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  const selectNickname = (nickname: string) => {
    localStorage.setItem("nickname", nickname);
    router.push("/otherUser");
  };

  const [deleteFeed] = useMutation(M_DELETE_FEED);

  const onClickDeleteFeed = async (e) => {
    try {
      await deleteFeed({
        variables: { feedId: String(e.target.id) },
      });
      alert("게시물이 삭제되었습니다");
      router.push("/ootd");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToEdit = () => {
    router.push(`/feeds/${props.data?.fetchFeed.id}/edit`);
  };

  const showMaxCnt = 4;
  const arr = Array.from(new Array(3));

  const settings = {
    dots: false,
    infinite: arr.length > showMaxCnt,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Detail.Wrapper__Div>
      <Detail.Wrapper_Left__Div>
        {props.showPhoto ? (
          <Detail.PhotoBoxDiv>
            <Detail.ShowImg src={`https://storage.googleapis.com/${props.showPhoto}`} />
          </Detail.PhotoBoxDiv>
        ) : (
          <Detail.PhotoBoxDiv>
            <Detail.ShowImg src={`https://storage.googleapis.com/${props.data?.fetchFeed.feedImg[0].imgURL}`} />
          </Detail.PhotoBoxDiv>
        )}

        <Detail.ImageBox__Div>
          <Detail.Slick {...settings}>
            {props.data?.fetchFeed.feedImg.map((el) => (
              <Detail.MomDiv key={uuidv4()}>
                <Detail.ImageDetail__Img src={`https://storage.googleapis.com/${el.imgURL}`} onClick={() => props.onClickPhoto(el.imgURL)} />
              </Detail.MomDiv>
            ))}
          </Detail.Slick>
          {/* <Detail.ImageDetail__Img src={`https://storage.googleapis.com/${props.data?.fetchFeed.feedImg[0]?.imgURL}` || ""} /> */}
        </Detail.ImageBox__Div>

        <Detail.ClothesBox__Div>
          <Detail.ClothesInfo__Div>
            <Detail.OuterIcon__SVG></Detail.OuterIcon__SVG>
            <Detail.ClothesDetail__Span>{props.data?.fetchFeed.outer}</Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>

          <Detail.ClothesInfo__Div>
            <Detail.TopIcon__SVG></Detail.TopIcon__SVG>
            <Detail.ClothesDetail__Span>{props.data?.fetchFeed.top}</Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>

          <Detail.ClothesInfo__Div>
            <Detail.BottomIcon__SVG></Detail.BottomIcon__SVG>
            <Detail.ClothesDetail__Span>{props.data?.fetchFeed.bottom}</Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>

          <Detail.ClothesInfo__Div>
            <Detail.ETCIcon__SVG></Detail.ETCIcon__SVG>
            <Detail.ClothesDetail__Span>{props.data?.fetchFeed.etc}</Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>
        </Detail.ClothesBox__Div>
      </Detail.Wrapper_Left__Div>

      <Detail.Wrapper_Right__Div>
        <Detail.FeedDetailBox__Div>
          <Detail.FeedDetail_Top__Div>
            <Detail.UserIconImg__Div></Detail.UserIconImg__Div>
            <Detail.UserId__Div
              onClick={() => {
                selectNickname(props.data?.fetchFeed.user.nickname);
              }}
            >
              {props.data?.fetchFeed.user.nickname}
            </Detail.UserId__Div>
            <Detail.IconBox__Div>
              <DMIcon width="18" height="17.5" stroke="#bebebe" />
              {props.isLike ? (
                <LikeIcon id={props.data?.fetchFeed.id} onClick={props.onClickLike} width="18" height="16" fill="#F14848" stroke="#F14848" />
              ) : (
                <LikeIcon id={props.data?.fetchFeed.id} onClick={props.onClickLike} width="18" height="16" stroke="#bebebe" />
              )}
            </Detail.IconBox__Div>
          </Detail.FeedDetail_Top__Div>

          <Detail.Content__Div>
            <Detail.ContentDetail__P>{props.data?.fetchFeed.detail}</Detail.ContentDetail__P>
          </Detail.Content__Div>

          <Detail.FeedDetail_Bottom__Div>
            <Detail.Tag__Div>
              <Detail.TagUnit__Span>#{props.data?.fetchFeed.region.id}</Detail.TagUnit__Span>
              {props.data?.fetchFeed.feedTag.map((el, idx) => (
                <Detail.TagUnit__Span key={idx}>#{el.tagName}</Detail.TagUnit__Span>
              ))}
            </Detail.Tag__Div>
            <MoreIcon onClick={() => toggleMenu()} style={{ cursor: "pointer", paddingTop: "10px" }} />
            {isOpen ? (
              <Detail.SettingBox__Div>
                <Detail.Edit__Span id={props.data?.fetchFeed.id} onClick={onClickMoveToEdit}>
                  수정
                </Detail.Edit__Span>
                <Detail.Delete__Span id={props.data?.fetchFeed.id} onClick={onClickDeleteFeed}>
                  삭제
                </Detail.Delete__Span>
              </Detail.SettingBox__Div>
            ) : (
              ""
            )}
          </Detail.FeedDetail_Bottom__Div>
        </Detail.FeedDetailBox__Div>

        <Detail.CommentBox__Div>
          <Detail.CommentDetail__Div>
            <FeedsCommentList IDforFetch={props.IDforFetch} />
          </Detail.CommentDetail__Div>

          <Detail.CommentCreate__Div>
            <FeedsCommentWrite IDforFetch={props.IDforFetch} />
          </Detail.CommentCreate__Div>
        </Detail.CommentBox__Div>
      </Detail.Wrapper_Right__Div>
    </Detail.Wrapper__Div>
  );
}

export default FeedDetailUI;
