import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { authState, timerState } from "../common/store";

const TimerSpan = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #e57676;
`;
const Timer = () => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [, setSendAuthNumber] = useRecoilState(timerState);
  const [, setAuthState] = useRecoilState(authState);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      if (minutes === 0 && seconds === 0) {
        toast.error("인증을 다시 해주세요!", {
          icon: "🤔",
        });
        setSendAuthNumber(false);
        setAuthState(false);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return <TimerSpan>{`(${minutes}:${seconds < 10 ? `0${seconds}` : seconds})`}</TimerSpan>;
};

export default Timer;
