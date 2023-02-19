import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import metrics from '@global/metrics';
import { Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { height } = Dimensions.get('window');

export const Container = styled.View`
  ${({ theme }) => css`
    height: ${height}px;
    background: ${theme.colors.background};
    justify-content: center;
    align-items: center;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(28)}px;
    color: ${theme.colors.text};
    margin-top: ${metrics.triplePixel}px;
    margin-left: ${metrics.triplePixel}px;
  `}
`;

export const IconContent = styled(TouchableOpacity)`
  width: ${RFValue(150)}px;
  height: ${RFValue(250)}px;
`;
