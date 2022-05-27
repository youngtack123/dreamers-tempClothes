import { useState } from "react";
import Onboarding1UI from "./onboarding1.presenter";

export default function Onboarding1() {
  const [isSelected, setIsSelected] = useState<String>("");

  const onClickSelect = (e) => {
    setIsSelected(e.target.value);
  };

  return <Onboarding1UI onClickSelect={onClickSelect} isSelected={isSelected} />;
}
