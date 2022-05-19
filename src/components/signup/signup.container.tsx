import { gql, useMutation, useQuery } from "@apollo/client";
import Router from "next/router";
import { useEffect, useState } from "react";
import SignupUI from "./signup.presenter";
import { useRouter } from "next/router";
import { CREATE_USER, CONFIRM_OVERLAP_ID, CONFIRM_OVERLAP_NIC } from "./signup.quries";
export default function Signup() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    id: " ",
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
  const [m_overLapId] = useMutation(CONFIRM_OVERLAP_ID);
  const [m_overLapNic] = useMutation(CONFIRM_OVERLAP_NIC);

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
            userId: inputs.id,
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
      const overLapIdResult = await m_overLapId({
        variables: {
          userId: inputs.id,
        },
      });
      console.log("중복 ID 결과값:", overLapIdResult);
      alert("사용가능한 ID 입니다!");
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
