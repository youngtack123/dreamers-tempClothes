import { MouseEvent, useState } from "react";
import Onboarding1UI from "./onboarding1.presenter";

export default function Onboarding1() {
  const [isSelected, setIsSelected] = useState<string>("");

  const onClickSelect = (e: MouseEvent<HTMLButtonElement>) => {
    setIsSelected((e.target as HTMLButtonElement).value);
  };

  return <Onboarding1UI onClickSelect={onClickSelect} isSelected={isSelected} />;
}
