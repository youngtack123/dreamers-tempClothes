import React, { useEffect, useState } from "react";
import MyPageChangePassWordPresenter from "./MyPageChangePassWordPresenter";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "./MyPageChangePassWordQuries";

const MyPageChangePassWordContainer = () => {
  const [inputs, setInputs] = useState({
    originPassword: "",
    changePassword: "",
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
        alert("정상적으로 비밀번호가 변경되었습니다!");
        setInputs({
          originPassword: "",
          changePassword: "",
          passwordOk: "",
        });
      } catch (error) {
        alert(error.message);
      }
    } else if (inputs.passwordOk !== inputs.changePassword) {
      alert("비밀번호가 동일하지 않습니다!");
    }
  };

  return <MyPageChangePassWordPresenter changePasswordFunc={changePasswordFunc} handlePassword={handlePassword} inputs={inputs}></MyPageChangePassWordPresenter>;
};

export default MyPageChangePassWordContainer;
