import metrics from "@global/metrics";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(50)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${metrics.eightFoldPixel}px;
    background: ${theme.colors.text};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(16)}px;
  `}
`;
