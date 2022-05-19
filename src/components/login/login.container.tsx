import LoginUI from "./login.presenter";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./login.quries";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../common/store/index";

export default function Login() {
  const router = useRouter();
  const [, setAccessTokenState] = useRecoilState(accessTokenState);
  const [loginInputs, setLoginInputs] = useState({
    userId: "",
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
          userId: loginInputs.userId,
          password: loginInputs.password,
        },
      });
      setAccessTokenState(loginResult?.data?.login);
      console.log(loginResult?.data?.login);
      alert("로그인이 성공!");
      router.push("/tempClothes");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return <LoginUI handleLoginInputs={handleLoginInputs} login={login} />;
}
