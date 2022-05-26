import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { timerState } from "../common/store";

const TimerP = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #b7e576;
`;
const Timer = () => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const [, setSendAuthNumber] = useRecoilState(timerState);

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
        alert("다시 한번 재인증해 주세요!");
        setSendAuthNumber(false);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div>
      <div>
        <TimerP>{`(${minutes}:${seconds < 10 ? `0${seconds}` : seconds})`}</TimerP>
      </div>
    </div>
  );
};

export default Timer;
