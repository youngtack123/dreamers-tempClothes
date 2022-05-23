import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const TitleH1 = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  margin-top: 12.4rem;
  margin-bottom: 6.6rem;
`;
// ========================================
//                 인풋값 부분
// ========================================
export const InputWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6.5rem;
`;
export const ItemInputDiv = styled.div`
  width: 33.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5.5rem;
`;
export const PasswordInputDiv = styled.div`
  width: 35.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5.5rem;
  margin-right: 2rem;
`;
export const ItemNameDiv = styled.div`
  font-size: 1.8rem;
`;
export const ItemInput = styled.input`
  width: 25rem;
  height: 4.6rem;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #bebebe;
  border-radius: 10px;
  padding: 10px;
  :focus {
    outline: 1px solid #b7e576;
  }
`;
// ========================================
//        로그인 버튼, 소셜 로그인 부분
// ========================================
export const RestDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10.2rem;
`;
export const LoginButton = styled.button`
  width: 10rem;
  height: 4rem;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  color: #bdbdbd;
  border: none;
  border-radius: 10px;
  margin-bottom: 4.7rem;
`;

export const LoginButtonOk = styled.button`
  width: 10rem;
  height: 4rem;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.8rem;
  text-align: center;
  color: #bdbdbd;
  background-color: yellow;
  border: none;
  border-radius: 10px;
  margin-bottom: 4.7rem;
`;
export const AlreadyUserDiv = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 9.6rem;
`;
export const AreYouUserDiv = styled.div`
  font-size: 1.4rem;
  color: #bebebe;
`;
export const GoToLoginDiv = styled.div`
  font-size: 1.4rem;
  text-decoration: underline;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
export const DivideLineDiv = styled.div`
  width: 58rem;
  height: 1px;
  border: 1px solid #eeeeee;
  margin-bottom: 5.4rem;
`;
export const SocialLoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33rem;
`;
export const SocialDiv = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 5.1rem;
`;
export const SocialItemDiv = styled.div`
  width: 25rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #bebebe;
  border-radius: 10px;
  margin-bottom: 2.2rem;
  cursor: pointer;
`;
export const NaverImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
export const KakaoImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
export const GoogleImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;
export const EachItemDiv = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  margin-left: 0.4rem;
`;
