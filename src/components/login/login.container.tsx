import LoginUI from "./login.presenter";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./login.quries";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../common/store/index";
import useUpdateEffect from "../common/customHook/useUpdateEffect";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
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
      toast.success("로그인 성공!", {
        icon: "😊",
      });
      router.push("/tempClothes");
    } catch (error) {
      toast.error(error.message, {
        icon: "🤔",
      });
    }
  };

  return <LoginUI handleLoginInputs={handleLoginInputs} login={login} loginInputs={loginInputs} />;
}
