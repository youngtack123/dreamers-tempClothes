import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  width: 455px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid bisque;
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
  color: #bebebe;
  padding: 15px;
  :focus {
    outline: none;
  }
`;
export const CommentImg = styled.img`
  width: 14px;
  height: 20px;
`;
