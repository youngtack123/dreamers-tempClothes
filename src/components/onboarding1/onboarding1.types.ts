import { MouseEvent } from "react";

export interface IOnboarding1UIProps {
  onClickSelect: (e: MouseEvent<HTMLButtonElement>) => void;
  isSelected: string;
}
