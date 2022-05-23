import React, { useState } from "react";
import * as Detail from "./feedDetail.styles";
import LikeIcon from "../../../../public/images/emptyheart.svg";
import DMIcon from "../../../../public/images/dm.svg";
import MoreIcon from "../../../../public/images/more.svg";

function FeedDetailUI(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <Detail.Wrapper__Div>
      <Detail.Wrapper_Left__Div>
        <Detail.ImageBox__Div>
          <Detail.ImageDetail__Img />
        </Detail.ImageBox__Div>

        <Detail.ImageThum__Div></Detail.ImageThum__Div>

        <Detail.ClothesBox__Div>
          <Detail.ClothesInfo__Div>
            <Detail.ClothesDetail__Span>
              <Detail.OuterIcon__SVG></Detail.OuterIcon__SVG>
              {props.data?.fetchFeed.outer}
            </Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>

          <Detail.ClothesInfo__Div>
            <Detail.ClothesDetail__Span>
              <Detail.OuterIcon__SVG></Detail.OuterIcon__SVG>
              {props.data?.fetchFeed.top}
            </Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>

          <Detail.ClothesInfo__Div>
            <Detail.ClothesDetail__Span>
              <Detail.OuterIcon__SVG></Detail.OuterIcon__SVG>
              {props.data?.fetchFeed.bottom}
            </Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>

          <Detail.ClothesInfo__Div>
            <Detail.ClothesDetail__Span>
              <Detail.OuterIcon__SVG></Detail.OuterIcon__SVG>
              {props.data?.fetchFeed.top}
            </Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>
        </Detail.ClothesBox__Div>
      </Detail.Wrapper_Left__Div>

      <Detail.Wrapper_Right__Div>
        <Detail.FeedDetailBox__Div>
          <Detail.FeedDetail_Top__Div>
            <Detail.UserIconImg__Div></Detail.UserIconImg__Div>
            <Detail.UserId__Div>{props.data?.fetchFeed.user.nickname}</Detail.UserId__Div>
            <Detail.IconBox__Div>
              <DMIcon width="18" height="15" fill="#bebebe" />
              <LikeIcon width="18" height="16" stroke="#bebebe" />
            </Detail.IconBox__Div>
          </Detail.FeedDetail_Top__Div>

          <Detail.Content__Div>
            <Detail.ContentDetail__P>{props.data?.fetchFeed.detail}</Detail.ContentDetail__P>
          </Detail.Content__Div>

          <Detail.FeedDetail_Bottom__Div>
            <Detail.Tag__Div>
              <Detail.TagUnit__Span>#청바지</Detail.TagUnit__Span>
            </Detail.Tag__Div>
            <MoreIcon onClick={() => toggleMenu()} />
            {isOpen ? (
              <Detail.SettingBox__Div>
                <Detail.Edit__Span>수정</Detail.Edit__Span>
                <Detail.Delete__Span>삭제</Detail.Delete__Span>
              </Detail.SettingBox__Div>
            ) : (
              ""
            )}
          </Detail.FeedDetail_Bottom__Div>
        </Detail.FeedDetailBox__Div>

        <Detail.CommentBox__Div>
          <Detail.CommentDetail__Div></Detail.CommentDetail__Div>

          <Detail.CommentCreate__Div>
            <Detail.CommentInput__Input placeholder="댓글을 작성을 기다리고 있어요!" />
            <Detail.CommentSubmitBtn__Button>등록</Detail.CommentSubmitBtn__Button>
          </Detail.CommentCreate__Div>
        </Detail.CommentBox__Div>
      </Detail.Wrapper_Right__Div>
    </Detail.Wrapper__Div>
  );
}

export default FeedDetailUI;
