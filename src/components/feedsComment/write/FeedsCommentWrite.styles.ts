import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  width: 455px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  border-left: 1px solid #c4c4c4;
  border-right: 1px solid #c4c4c4;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const DetailWrapperDiv = styled.div`
  width: 455px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const DetailInput = styled.input`
  width: 359px;
  height: 37px;
  line-height: 37px;
  background: #eeeeee;
  border-radius: 30px;
  border: none;
  font-size: 12px;
  padding: 15px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #bebebe;
  }
`;
export const WriteCommentButton = styled.button`
  width: 14px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const CommentImg = styled.img`
  width: 14px;
  height: 20px;
`;
