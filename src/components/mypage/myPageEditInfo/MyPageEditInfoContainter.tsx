import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import MyPageEditInfoPresenter from "./MyPageEditInfoPresenter";
import { CONFIRM_AUTH_NUMBER, CREATE_PHONE_AUTH, UPDATE_USER } from "./MyPageEditInfoQuries";
import { useRecoilState } from "recoil";
import { timerState } from "../../common/store";
import { useRouter } from "next/router";
import { CONFIRM_OVERLAP_EMAIL, CONFIRM_OVERLAP_NIC } from "../../signup/signup.quries";

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
      alert("정상적으로 회원 정보가 수정되었습니다!");
      router.push("/mypage");
    } catch (error) {
      alert(error.message);
    }
  };

  const createPhoneAuth = async () => {
    try {
      const createPhoneAuthResult = await m_phoneAuth({
        variables: {
          phone: inputs.phone,
        },
      });
      alert("인증 번호가 발송 되었습니다!");
    } catch (error) {
      alert(error.message);
    }
    setSendAuthNumber(true);
  };

  const confirmAuthNumber = async () => {
    try {
      const authNumberResult = await m_authNumber({
        variables: {
          authNumber: inputs.authNumber,
        },
      });
      console.log("authNumberResult", authNumberResult);
      alert("정상적으로 인증이 완료되었습니다!");
      setAuthFalse(true);
      setSendAuthNumber(false);
    } catch (error) {
      alert(error.message);
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
