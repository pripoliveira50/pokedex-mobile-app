import styled, { css } from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import metrics from '../../global/metrics/index';
import LottieView from 'lottie-react-native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background};
  `}
`;

export const Bottom = styled.View`
  padding: ${metrics.triplePixel}px;
`;

export const Content = styled.View`
  height: ${RFPercentage(60)}px;
  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.View`
  margin-top: ${metrics.sevenFoldPixel + 10}px;
  margin-left: ${metrics.fourFoldPixel}px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.light_text};
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(16)}px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(40)}px;
    font-family: ${theme.fonts.bold};
  `}
`;
export const Image = styled.ImageBackground`
  width: ${RFValue(220)}px;
  height: ${RFValue(180)}px;
  opacity: 0.8;
  transform: rotate(10deg);
`;