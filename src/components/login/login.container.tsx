import LoginUI from "./login.presenter";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "./login.quries";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../common/store/index";
import { toast } from "react-toastify";
import { IMutation, IMutationLoginArgs } from "../types/types";

export default function Login() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState<string>(accessTokenState);

  type InputItems = { email: string; password: string };
  const [loginInputs, setLoginInputs] = useState<InputItems>({
    email: "",
    password: "",
  });

  const [loginUser] = useMutation<Pick<IMutation, "login">, IMutationLoginArgs>(LOGIN);

  const handleLoginInputs = (e: ChangeEvent<HTMLInputElement>) => {
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
