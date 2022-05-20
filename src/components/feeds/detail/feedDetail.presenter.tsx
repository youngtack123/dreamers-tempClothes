import React from "react";
import * as Detail from "./feedDetail.styles";

function FeedDetailUI() {
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
              어쩌구저쩌구
            </Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>

          <Detail.ClothesInfo__Div>
            <Detail.ClothesDetail__Span>
              <Detail.OuterIcon__SVG></Detail.OuterIcon__SVG>
              어쩌구저쩌구
            </Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>

          <Detail.ClothesInfo__Div>
            <Detail.ClothesDetail__Span>
              <Detail.OuterIcon__SVG></Detail.OuterIcon__SVG>
              어쩌구저쩌구
            </Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>

          <Detail.ClothesInfo__Div>
            <Detail.ClothesDetail__Span>
              <Detail.OuterIcon__SVG></Detail.OuterIcon__SVG>
              어쩌구저쩌구
            </Detail.ClothesDetail__Span>
          </Detail.ClothesInfo__Div>
        </Detail.ClothesBox__Div>
      </Detail.Wrapper_Left__Div>

      <Detail.Wrapper_Right__Div>
        <Detail.FeedDetailBox__Div>
          <Detail.FeedDetail_Top__Div>
            <Detail.UserIconImg__Div></Detail.UserIconImg__Div>
            <Detail.UserId__Div>fdjlks</Detail.UserId__Div>
            <Detail.IconBox__Div>
              <Detail.DMIcon__SVG />
              <Detail.LikeIcon__SVG />
            </Detail.IconBox__Div>
          </Detail.FeedDetail_Top__Div>

          <Detail.Content__Div>
            <Detail.ContentDetail__P>하하</Detail.ContentDetail__P>
          </Detail.Content__Div>
          <Detail.Tag__Div>#청바지</Detail.Tag__Div>
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
