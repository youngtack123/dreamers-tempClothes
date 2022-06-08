import React, { useEffect, useState } from "react";
import MypageMobileEditInfoUI from "./mypageMobileEditInfo.presenter";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CONFIRM_AUTH_NUMBER, CREATE_PHONE_AUTH, UPDATE_USER } from "../../myPageEditInfo/MyPageEditInfoQuries";
import { CONFIRM_OVERLAP_EMAIL, CONFIRM_OVERLAP_NIC } from "../../../signup/signup.quries";
import { useRecoilState } from "recoil";
import { timerState } from "../../../common/store";

const MypageMobileEditInfo = () => {
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
      await m_updateUser({
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
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
    setSendAuthNumber(true);
  };

  const confirmAuthNumber = async () => {
    try {
      await m_authNumber({
        variables: {
          authNumber: inputs.authNumber,
        },
      });
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

  return (
    <MypageMobileEditInfoUI
      handleInfo={handleInfo}
      onClickEventTag={onClickEventTag}
      updateUserEditInfo={updateUserEditInfo}
      createPhoneAuth={createPhoneAuth}
      confirmAuthNumber={confirmAuthNumber}
      overLapId={overLapId}
      overLapNic={overLapNic}
      authOk={authOk}
      inputs={inputs}
    />
  );
};

export default MypageMobileEditInfo;
