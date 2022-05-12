import * as s from "./signup.styles"

export default function SignupUI() {
    return(
        <s.WrapperDiv>

            <s.TitleH1>회원가입</s.TitleH1>

            {/* 인풋값 부분 */}
            <s.InputWrapperDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>아이디</s.ItemNameDiv>
                    <s.ItemInput />
                </s.ItemInputDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>이메일</s.ItemNameDiv>
                    <s.ItemInput />
                </s.ItemInputDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>비밀번호</s.ItemNameDiv>
                    <s.ItemInput />
                </s.ItemInputDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>비밀번호 확인</s.ItemNameDiv>
                    <s.ItemInput />
                </s.ItemInputDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>휴대폰</s.ItemNameDiv>
                    <s.ItemInput />
                    <s.SendVerifiButton>인증번호 전송</s.SendVerifiButton>
                </s.ItemInputDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>인증번호</s.ItemNameDiv>
                    <s.ItemInput />
                    <s.VerifyButton>인증하기</s.VerifyButton>
                </s.ItemInputDiv>
            </s.InputWrapperDiv>

            {/* 태그 부분 */}
            <s.TagsDiv>
                <s.TagWrapperDiv>
                    <s.GenderDiv>성별</s.GenderDiv>
                    <s.TagItemDiv>#남성</s.TagItemDiv>
                    <s.TagItemDiv>#여성</s.TagItemDiv>
                </s.TagWrapperDiv>
                <s.TagWrapperDiv>
                    <s.GenderDiv>스타일</s.GenderDiv>
                    <s.TagItemDiv>#캐주얼</s.TagItemDiv>
                    <s.TagItemDiv>#스트릿</s.TagItemDiv>
                    <s.TagItemDiv>#트레이닝</s.TagItemDiv>
                </s.TagWrapperDiv>
                <s.TagBottomLineDiv>
                    <s.TagItemDiv>#세미포멀</s.TagItemDiv>
                    <s.TagItemDiv>#포멀</s.TagItemDiv>
                </s.TagBottomLineDiv>
                <s.TagWrapperDiv>
                    <s.GenderDiv>거주지역</s.GenderDiv>
                    <s.TagItemDiv>#서울</s.TagItemDiv>
                    <s.TagItemDiv>#강원</s.TagItemDiv>
                    <s.TagItemDiv>#전라</s.TagItemDiv>
                    <s.TagItemDiv>#제주</s.TagItemDiv>
                </s.TagWrapperDiv>
                <s.TagBottomLineDiv>
                    <s.TagItemDiv>#경기</s.TagItemDiv>
                    <s.TagItemDiv>#충청</s.TagItemDiv>
                    <s.TagItemDiv>#경상</s.TagItemDiv>
                </s.TagBottomLineDiv>
            </s.TagsDiv>

            {/* 회원가입 버튼, 이미 회원인가요 부분 */}
            <s.RestDiv>
                <s.SignupButton>회원가입</s.SignupButton>
                <s.AlreadyUserDiv>
                    <s.AreYouUserDiv>이미 회원이신가요?</s.AreYouUserDiv>
                    <s.GoToLoginDiv>로그인 하러가기</s.GoToLoginDiv>
                </s.AlreadyUserDiv>
            </s.RestDiv>

        </s.WrapperDiv>
    )
}