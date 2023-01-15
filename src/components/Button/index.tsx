import { ButtonProps } from "react-native";
import * as S from "./styles";

export const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};
