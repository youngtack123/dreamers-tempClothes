import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  /* width: 75rem; */
  margin: 0 auto;
  padding: 30px 50px;
  text-align: center;
  border: 2px solid #bebebe;
`;
export const TitleH1 = styled.h1`
  font-weight: 400;
  font-size: 36px;
  margin-bottom: 78px;
`;
// ========================================
//                 인풋값 부분
// ========================================
export const InputWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 111px;
`;
export const ItemInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 426px;
  margin-bottom: 55px;
`;
export const ItemNameDiv = styled.div`
  font-size: 22px;
`;
export const ItemInput = styled.input`
  width: 336px;
  height: 55px;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.08);
  padding: 10px;
  font-size: 14px;
  outline: none;
`;
// ========================================
//        로그인 버튼, 소셜 로그인 부분
// ========================================
export const RestDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
export const LoginButton = styled.button`
  width: 136px;
  height: 54px;
  background-color: #eeeeee;
  font-size: 22px;
  color: #bdbdbd;
  border: none;
  border-radius: 10px;
  margin-bottom: 60px;
`;
export const DivideLineDiv = styled.div`
  width: 580px;
  height: 1px;
  border: 1px solid #eeeeee;
  margin-bottom: 91px;
`;
export const SocialLoginDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 330px;
`;
export const NaverImg = styled.img`
  width: 70px;
  height: 70px;
`;
export const KakaoImg = styled.img`
  width: 70px;
  height: 70px;
`;
export const GoogleImg = styled.img`
  width: 60px;
  height: 60px;
`;
