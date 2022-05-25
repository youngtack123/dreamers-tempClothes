import LoginUI from "./login.presenter";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./login.quries";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, socialSignUpState } from "../common/store/index";
import useUpdateEffect from "../common/customHook/useUpdateEffect";

export default function Login() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [socialSignUp] = useRecoilState(socialSignUpState);
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });

  const [loginUser] = useMutation(LOGIN);

  const handleLoginInputs = (e: any) => {
    const { name, value } = e.target;
    setLoginInputs({
      ...loginInputs,
      [name]: value,
    });
  };

  const login = async () => {
    try {
      const loginResult = await loginUser({
        variables: {
          email: loginInputs.email,
          password: loginInputs.password,
        },
      });
      setAccessToken(loginResult?.data?.login);
      console.log(loginResult?.data?.login);
      alert("로그인이 성공!");
      router.push("/tempClothes");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return <LoginUI handleLoginInputs={handleLoginInputs} login={login} loginInputs={loginInputs} />;
}
