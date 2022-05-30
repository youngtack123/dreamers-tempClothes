import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid #c4c4c4; */
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const CommentListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  padding-bottom: 2px;
  padding-top: 0px;
  margin-left: 30px;
`;
export const UserImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;
export const UserNameDiv = styled.div`
  font-weight: 600;
  font-size: 12px;
  margin-left: 5px;
`;
export const CommentDiv = styled.div`
  font-size: 11px;
  margin-left: 5px;
`;
// export const BottomDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   margin-left: 75px;
//   margin-bottom: 20px;
// `;
export const DeleteCommentDiv = styled.div`
  font-size: 10px;
  color: #bebebe;
  cursor: pointer;
  :hover {
    color: #333333;
  }
  margin-left: 10px;
`;
