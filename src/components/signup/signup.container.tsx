import { gql, useMutation, useQuery } from "@apollo/client";
import Router from "next/router";
import { useEffect, useState } from "react";
import SignupUI from "./signup.presenter";
import { useRouter } from "next/router";
import { CREATE_USER, CONFIRM_OVERLAP_EMAIL, CONFIRM_OVERLAP_NIC, CONFIRM_AUTH_NUMBER, CREATE_PHONE_AUTH } from "./signup.quries";
export default function Signup() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    nickname: " ",
    email: " ",
    password: " ",
    passwordOk: " ",
    phone: " ",
    authNumber: " ",
    gender: " ",
    style: " ",
    region: " ",
  });
  const [m_createUser] = useMutation(CREATE_USER);
  const [m_overLapEmail] = useMutation(CONFIRM_OVERLAP_EMAIL);
  const [m_overLapNic] = useMutation(CONFIRM_OVERLAP_NIC);
  const [m_authNumber] = useMutation(CONFIRM_AUTH_NUMBER);

  const handleSignUpInputs = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const signUpFunc = async () => {
    try {
      const signUpResult = await m_createUser({
        variables: {
          createUserInput: {
            regionId: inputs.region,
            email: inputs.email,
            password: inputs.password,
            phone: inputs.phone,
            gender: inputs.gender,
            style: inputs.style,
            nickname: inputs.nickname,
          },
        },
      });
      console.log("회원가입 결과", signUpResult);
      alert("회원가입이 완료 되었습니다!");
      router.push("/login");
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  const overLapId = async () => {
    try {
      const overLapIdResult = await m_overLapEmail({
        variables: {
          email: inputs.email,
        },
      });
      console.log("중복 ID 결과값:", overLapIdResult);
      alert("사용가능한 Email 입니다!");
    } catch (error) {
      alert(error.message);
    }
  };

  const overLapNic = async () => {
    try {
      const overLapNicResult = await m_overLapNic({
        variables: {
          nickname: inputs.nickname,
        },
      });
      console.log("중복 닉네임 결과값:", overLapNicResult);
      alert("사용 가능한 닉네임 입니다!");
    } catch (error) {
      alert(error.message);
    }
  };

  const confirmAuthNumber = async () => {
    try {
      const authNumberResult = await m_authNumber({
        variables: {},
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickEventTag = (e: any) => {
    if (e.target.id === "style") {
      setInputs({
        ...inputs,
        [e.target.id]: e.target.innerText,
      });
    }

    if (e.target.id === "gender") {
      setInputs({
        ...inputs,
        [e.target.id]: e.target.innerText,
      });
    }

    if (e.target.id === "region") {
      setInputs({
        ...inputs,
        [e.target.id]: e.target.innerText,
      });
    }
  };

  return <SignupUI handleSignUpInputs={handleSignUpInputs} signUpFunc={signUpFunc} onClickEventTag={onClickEventTag} overLapId={overLapId} overLapNic={overLapNic} inputs={inputs} />;
}
