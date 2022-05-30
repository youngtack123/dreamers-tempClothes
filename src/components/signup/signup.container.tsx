import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
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
  const [clickGender, setClickGender] = useState("");
  const [clickStyle, setClickStyle] = useState("");
  const [clickRegionTop, setClickRegionTop] = useState("");
  const [clickRegionBottom, setRegionBottom] = useState("");
  const handleSignUpInputs = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const signUpFunc = async () => {
    if (authOk) {
      try {
        await m_createUser({
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
        toast.success("회원 가입 성공!", {
          icon: "😊",
        });
        router.push("/login");
      } catch (error) {
        toast.error(error.message, {
          icon: "🤔",
        });
      }
    } else if (!authOk) {
      toast.error("인증 절차를 진행해 주세요!", {
        icon: "🤔",
      });
    }
  };

  const updateUserFunc = async () => {
    try {
      await m_updateUser({
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
      await m_overLapEmail({
        variables: {
          email: inputs.email,
        },
      });
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
      await m_overLapNic({
        variables: {
          nickname: inputs.nickname,
        },
      });
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
      await m_phoneAuth({
        variables: {
          phone: inputs.phone,
        },
      });

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
    if (inputs.authNumber.length !== 6) {
      alert("인증번호 형식이 올바르지 않습니다!");
      return;
    }
    const authNumberResult = await m_authNumber({
      variables: {
        authNumber: inputs.authNumber,
      },
    });

    if (authNumberResult?.data.confirmAuthNumber === "인증번호를 다시 확인해 주세요.") {
      toast.error("인증번호를 다시 확인해 주세요.", {
        icon: "🤔",
      });
    } else {
      toast.success("인증 완료!", {
        icon: "😊",
      });
      setSendAuthNumber(false);
      setAuthFalse(true);
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

  const onClickTagGender = (id) => {
    setClickGender(id);
  };

  const onClickTagStyle = (id) => {
    setClickStyle(id);
  };

  const onClickRegionTop = (id) => {
    setClickRegionTop(id);
  };

  const onClickRegionBottom = (id) => {
    setRegionBottom(id);
  };

  const noAuthSignUp = () => {
    toast.error("인증이 완료되지 않았습니다!", {
      icon: "🤔",
    });
  };
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
      onClickTagGender={onClickTagGender}
      onClickTagStyle={onClickTagStyle}
      clickGender={clickGender}
      clickStyle={clickStyle}
      onClickRegionTop={onClickRegionTop}
      clickRegionTop={clickRegionTop}
      onClickRegionBottom={onClickRegionBottom}
      clickRegionBottom={clickRegionBottom}
    />
  );
}
