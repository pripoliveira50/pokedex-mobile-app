import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import metrics from '@global/metrics';

export const Container = styled.ScrollView`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    margin-top: ${metrics.sixFoldPixel}px;
    height: ${RFValue(50)}px;
    padding-left: ${metrics.triplePixel}px;
    margin-bottom: ${metrics.doublePixel}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(32)}px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.light_text};
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(16)}px;
    margin-left: ${metrics.doublePixel}px;
  `}
`;

export const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: ${metrics.pixel}px;
  padding: ${metrics.doublePixel}px;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Load = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#F7B916',
})``;
