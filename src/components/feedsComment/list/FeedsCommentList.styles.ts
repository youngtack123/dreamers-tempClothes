import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  width: 455px;
  height: 306px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
export const CommentListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
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
export const DeleteSpan = styled.span`
  font-size: 4px;
  margin-left: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
