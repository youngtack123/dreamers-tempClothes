import { gql, useMutation, useQuery } from "@apollo/client";
import Router from "next/router";
import { useEffect, useState } from "react";
import SignupUI from "./signup.presenter";
import { useRouter } from "next/router";
import { CREATE_USER, CONFIRM_OVERLAP_EMAIL, CONFIRM_OVERLAP_NIC, CONFIRM_AUTH_NUMBER, CREATE_PHONE_AUTH, UPDATE_USER } from "./signup.quries";
import { useRecoilState } from "recoil";
import { authState, timerState } from "../common/store";
import { toast } from "react-toastify";

const FETCH_USER = gql`
  query {
    fetchUser {
      id
      email
      phone
      gender
      style
      nickname
      userImgURL
      button
      region {
        id
        lat
        lon
      }
      deletedAt
    }
  }
`;

export default function Signup() {
  const router = useRouter();
  const [m_createUser] = useMutation(CREATE_USER);
  const [m_overLapEmail] = useMutation(CONFIRM_OVERLAP_EMAIL);
  const [m_overLapNic] = useMutation(CONFIRM_OVERLAP_NIC);
  const [m_authNumber] = useMutation(CONFIRM_AUTH_NUMBER);
  const [m_phoneAuth] = useMutation(CREATE_PHONE_AUTH);
  const [m_updateUser] = useMutation(UPDATE_USER);
  const [authOk, setAuthFalse] = useRecoilState(authState);
  const [, setSendAuthNumber] = useRecoilState(timerState);
  const { data: socialLoginData } = useQuery(FETCH_USER);

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
      toast.success("회원 가입 성공!", {
        icon: "😊",
      });
      router.push("/login");
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
      console.log(error.message);
    }
  };

  const updateUserFunc = async () => {
    try {
      const updateUserFuncResult = await m_updateUser({
        variables: {
          updateUserInput: {
            regionId: inputs.region,
            phone: inputs.phone,
            gender: inputs.gender,
            style: inputs.style,
            nickname: inputs.nickname,
          },
        },
      });
      toast.success("회원 가입 성공!", {
        icon: "😊",
      });
      router.push("/login");
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
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
      toast.success("사용 가능한 이메일이에요!", {
        icon: "😊",
      });
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
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
      toast.success("사용 가능한 닉네임이에요!", {
        icon: "😊",
      });
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  const createPhoneAuth = async () => {
    try {
      const createPhoneAuthResult = await m_phoneAuth({
        variables: {
          phone: inputs.phone,
        },
      });

      console.log(createPhoneAuthResult);
      toast.success("인증번호 발송 완료!", {
        icon: "😊",
      });
      setSendAuthNumber(true);
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  const confirmAuthNumber = async () => {
    try {
      const authNumberResult = await m_authNumber({
        variables: {
          authNumber: inputs.authNumber,
        },
      });
      console.log("authNumberResult", authNumberResult);
      toast.success("인증 완료!", {
        icon: "😊",
      });
      setSendAuthNumber(false);
      setAuthFalse(true);
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
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

  const noAuthSignUp = () => {
    toast.error("인증이 완료되지 않았습니다!", {
      icon: "🤔",
    });
  };

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  return (
    <SignupUI
      handleSignUpInputs={handleSignUpInputs}
      signUpFunc={signUpFunc}
      onClickEventTag={onClickEventTag}
      overLapId={overLapId}
      overLapNic={overLapNic}
      inputs={inputs}
      createPhoneAuth={createPhoneAuth}
      confirmAuthNumber={confirmAuthNumber}
      noAuthSignUp={noAuthSignUp}
      socialLoginData={socialLoginData}
      updateUserFunc={updateUserFunc}
    />
  );
}
