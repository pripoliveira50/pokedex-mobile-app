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
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(16)}px;
    margin-left: ${metrics.fourFoldPixel}px;
  `}
`;

export const ContentFav = styled.View`
  jusify-content: center;
  align-items: center;
  margin-bottom: ${metrics.triplePixel}px;
  top: ${-metrics.fiveFoldPixel}px;
`;

export const TextFavorite = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.light_text};
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(15)}px;
    padding: ${metrics.pixel}px;
    margin-bottom: ${metrics.pixel}px;
  `}
`;

export const NavigationContainer = styled.TouchableOpacity``;

export const Image = styled.ImageBackground`
  width: ${RFValue(180)}px;
  height: ${RFValue(140)}px;
  opacity: 0.8;
  transform: rotate(10deg);
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
