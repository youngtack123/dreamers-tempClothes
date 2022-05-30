import React, { useEffect, useState } from "react";
import MyPageChangePassWordPresenter from "./MyPageChangePassWordPresenter";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "./MyPageChangePassWordQuries";
import { toast } from "react-toastify";

const MyPageChangePassWordContainer = () => {
  const [inputs, setInputs] = useState({
    originPassword: "",
    changePassword: " ",
    passwordOk: "",
  });
  const [m_changePassword] = useMutation(UPDATE_PASSWORD);

  const handlePassword = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const changePasswordFunc = async () => {
    if (inputs.passwordOk === inputs.changePassword) {
      try {
        await m_changePassword({
          variables: {
            originPassword: String(inputs.originPassword),
            updatePassword: String(inputs.changePassword),
          },
        });
        toast.success("비밀번호 변경 완료!", {
          icon: "😊",
        });
        setInputs({
          originPassword: "",
          changePassword: "",
          passwordOk: "",
        });
      } catch (error) {
        toast.error(error.message, {
          icon: "🤔",
        });
      }
    } else if (inputs.passwordOk !== inputs.changePassword) {
      toast.warning("비밀번호를 다시 확인해주세요", {
        icon: "🥺",
      });
    }
  };

  return <MyPageChangePassWordPresenter changePasswordFunc={changePasswordFunc} handlePassword={handlePassword} inputs={inputs}></MyPageChangePassWordPresenter>;
};

export default MyPageChangePassWordContainer;
