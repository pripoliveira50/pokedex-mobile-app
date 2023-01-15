import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import metrics from '@global/metrics';
import { FontAwesome } from '@expo/vector-icons';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background};
    justify-content: center;
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    margin-top: ${metrics.sixFoldPixel}px;
    height: ${RFValue(50)}px;
    flex-direction: row;
    padding-left: ${metrics.doublePixel}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(32)}px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const BackButton = styled.TouchableOpacity`
  top: ${RFValue(12)}px;
  margin-right: ${metrics.doublePixel}px;
`;

export const Icon = styled(FontAwesome).attrs({
  size: RFValue(24),
  color: '#fff',
})``;
