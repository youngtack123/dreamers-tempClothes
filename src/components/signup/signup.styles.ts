import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
    width: 75rem;
    margin: 0 auto;
    padding: 30px 50px;
    text-align: center;
    border: 2px solid #E5E5E5;
`
export const TitleH1 = styled.h1`
    font-weight: 400;
    font-size: 36px;
    margin-bottom: 75px;
    margin-top: 76px;
`
// ========================================
//                 인풋값 부분
// ========================================
export const InputWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 101px;
`
export const ItemInputDiv = styled.div`
    width: 580px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`
export const ItemNameDiv = styled.div`
    font-size: 22px;
`
export const ItemInput = styled.input`
    width: 21.875rem;
    height: 3.75rem;
    border: none;
    border-radius: 10px;
    box-shadow: 4px 4px 8px -1px rgba(0, 0, 0, 0.08);
`
export const SendVerifiButton = styled.button`
    width: 101px;
    height: 44px;
    font-size: 14px;
    background-color: #EEEEEE;
    border: none;
    border-radius: 50px;
`
export const VerifyButton = styled.button`
    width: 87px;
    height: 44px;
    font-size: 14px;
    background-color: #EEEEEE;
    border: none;
    border-radius: 50px;
`

// ========================================
//                 태그 부분
// ========================================
export const TagsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 104px;
`
export const TagWrapperDiv = styled.div`
    width: 359px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
// 여기!!!
export const TagBottomLineDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`
export const GenderDiv = styled.div`
    font-size: 22px;
`
export const TagItemDiv = styled.div`
    width: 71px;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border-radius: 50px;
    background-color: #EEEEEE;
    margin-right: 20px;
`
// ========================================
//        회원가입 버튼, 이미 회원인가요 부분
// ========================================
export const RestDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 118px;
`
export const SignupButton = styled.button`
    width: 136px;
    height: 54px;
    background-color: #EEEEEE;
    font-size: 22px;
    color: #bdbdbd;
    border: none;
    border-radius: 5px;
    margin-bottom: 106px;
`
export const AlreadyUserDiv = styled.div`
    display: flex;
    flex-direction: row;
`
export const AreYouUserDiv = styled.div`
    font-size: 18px;
    color: #7E7272;
    margin-right: 50px;
`
export const GoToLoginDiv = styled.div`
    font-size: 18px;
    text-decoration: underline;
`