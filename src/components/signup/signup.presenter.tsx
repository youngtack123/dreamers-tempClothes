import { useRouter } from "next/router"
import * as s from "./signup.styles"

export default function SignupUI() {

    const router = useRouter()

    const onMoveToLogin = () => {
        router.push("/login")
    }

    return(
        <s.WrapperDiv>

            <s.TitleH1>회원가입</s.TitleH1>

            {/* 인풋값 부분 */}
            <s.InputWrapperDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>아이디</s.ItemNameDiv>
                    <s.ItemInput />
                    <s.SendVerifiButton>중복확인</s.SendVerifiButton>
                </s.ItemInputDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>닉네임</s.ItemNameDiv>
                    <s.ItemInput />
                    <s.SendVerifiButton>중복확인</s.SendVerifiButton>
                </s.ItemInputDiv>
                <s.EmailItemInputDiv>
                    <s.ItemNameDiv>이메일</s.ItemNameDiv>
                    <s.ItemLongInput />
                </s.EmailItemInputDiv>
                <s.PasswordInputDiv>
                    <s.ItemNameDiv>비밀번호</s.ItemNameDiv>
                    <s.ItemLongInput />
                </s.PasswordInputDiv>
                <s.PasswordCheckInputDiv>
                    <s.ItemNameDiv>비밀번호 확인</s.ItemNameDiv>
                    <s.ItemLongInput />
                </s.PasswordCheckInputDiv>
                <s.ItemInputDiv>
                    <s.ItemNameDiv>휴대폰</s.ItemNameDiv>
                    <s.ItemInput />
                    <s.VerifyButton>인증번호 전송</s.VerifyButton>
                </s.ItemInputDiv>
                <s.VerifyDiv>
                    <s.ItemNameDiv>인증번호</s.ItemNameDiv>
                    <s.ItemInput />
                    <s.SendVerifiButton>인증하기</s.SendVerifiButton>
                </s.VerifyDiv>
            </s.InputWrapperDiv>

            {/* 태그 부분 */}
            <s.TagsDiv>
                <s.GenderTagWrapperDiv>
                    <s.GenderDiv>성별</s.GenderDiv>
                    <s.TagItemDiv>#남성</s.TagItemDiv>
                    <s.TagItemDiv>#여성</s.TagItemDiv>
                </s.GenderTagWrapperDiv>
                <s.StyleTagWrapperDiv>
                    <s.GenderDiv>스타일</s.GenderDiv>
                    <s.TagItemDiv>#캐주얼</s.TagItemDiv>
                    <s.TagItemDiv>#스트릿</s.TagItemDiv>
                    <s.TagItemDiv>#트레이닝</s.TagItemDiv>
                </s.StyleTagWrapperDiv>
                <s.TagBottomLineDiv>
                    <s.TagItemDiv>#세미포멀</s.TagItemDiv>
                    <s.TagItemDiv>#포멀</s.TagItemDiv>
                </s.TagBottomLineDiv>
                <s.RegionTagWrapperDiv>
                    <s.GenderDiv>거주지역</s.GenderDiv>
                    <s.TagItemDiv>#서울</s.TagItemDiv>
                    <s.TagItemDiv>#경기도</s.TagItemDiv>
                    <s.TagItemDiv>#강원도</s.TagItemDiv>
                    <s.TagItemDiv>#충청도</s.TagItemDiv>
                </s.RegionTagWrapperDiv>
                <s.RegionTagBottomLineDiv>
                    <s.TagItemDiv>#경상도</s.TagItemDiv>
                    <s.TagItemDiv>#전라도</s.TagItemDiv>
                    <s.TagItemDiv>#제주도</s.TagItemDiv>
                </s.RegionTagBottomLineDiv>
            </s.TagsDiv>

            {/* 회원가입 버튼, 이미 회원인가요 부분 */}
            <s.RestDiv>
                <s.SignupButton>회원가입</s.SignupButton>
                <s.AlreadyUserDiv>
                    <s.AreYouUserDiv>이미 회원이신가요?</s.AreYouUserDiv>
                    <s.GoToLoginDiv onClick={onMoveToLogin}>로그인 하러가기</s.GoToLoginDiv>
                </s.AlreadyUserDiv>
            </s.RestDiv>

        </s.WrapperDiv>
    )
}