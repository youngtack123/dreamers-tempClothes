import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import MyPageEditInfoPresenter from "./MyPageEditInfoPresenter";
import { CONFIRM_AUTH_NUMBER, CREATE_PHONE_AUTH, UPDATE_USER } from "./MyPageEditInfoQuries";
import { useRecoilState } from "recoil";
import { timerState } from "../../common/store";
import { useRouter } from "next/router";
import { CONFIRM_OVERLAP_EMAIL, CONFIRM_OVERLAP_NIC } from "../../signup/signup.quries";
import { toast } from "react-toastify";

const MyPageEditInfoContainter = () => {
  const [inputs, setInputs] = useState({
    nickname: "",
    email: "",
    phone: "",
    authNumber: "",
    region: "",
    style: "",
  });
  const router = useRouter();
  const [m_updateUser] = useMutation(UPDATE_USER);
  const [m_authNumber] = useMutation(CONFIRM_AUTH_NUMBER);
  const [m_overLapEmail] = useMutation(CONFIRM_OVERLAP_EMAIL);
  const [m_overLapNic] = useMutation(CONFIRM_OVERLAP_NIC);
  const [m_phoneAuth] = useMutation(CREATE_PHONE_AUTH);
  const [authOk, setAuthFalse] = useState(false);
  const [, setSendAuthNumber] = useRecoilState(timerState);

  useEffect(() => {
    console.log(inputs);
  }, [inputs]);
  const handleInfo = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickEventTag = (e: any) => {
    if (e.target.id === "style") {
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

  const updateUserEditInfo = async () => {
    try {
      const updateUserResult = await m_updateUser({
        variables: {
          updateUserInput: {
            email: inputs.email,
            phone: inputs.phone,
            style: inputs.style,
            nickname: inputs.nickname,
            regionId: inputs.region,
          },
        },
      });
      console.log("updateUserResult", updateUserResult);
      toast.success("회원정보 수정 완료!", {
        icon: "😊",
      });
      router.push("/mypage");
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
      alert("인증번호를 다시 입력해 주세요!");
      return;
    }
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
      setAuthFalse(true);
      setSendAuthNumber(false);
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

  return (
    <MyPageEditInfoPresenter
      handleInfo={handleInfo}
      onClickEventTag={onClickEventTag}
      updateUserEditInfo={updateUserEditInfo}
      createPhoneAuth={createPhoneAuth}
      confirmAuthNumber={confirmAuthNumber}
      overLapId={overLapId}
      overLapNic={overLapNic}
      authOk={authOk}
      inputs={inputs}
    ></MyPageEditInfoPresenter>
  );
};

export default MyPageEditInfoContainter;
