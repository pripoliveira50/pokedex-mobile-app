import styled, { css } from 'styled-components/native';

import * as Progress from 'react-native-progress';
import { TypeStyleProps } from './types';
import metrics from '@global/metrics';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

export const Click = styled.TouchableOpacity`
  top: ${RFValue(10)}px;
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
`;

export const Header = styled.View<TypeStyleProps>`
  ${({ theme, type }) => css`
    flex-direction: row;
    align-items: center;
    position: relative;
    background: ${theme.colors.backgroundCard[type]};
    height: ${RFValue(340)}px;
    padding: ${metrics.triplePixel}px;
  `}
`;

export const ContentImage = styled.View`
  position: relative;
`;

export const CircleImage = styled.Image`
  position: absolute;
  width: ${RFValue(125)}px;
  height: ${RFValue(125)}px;
`;

export const PokemonImage = styled.Image`
  width: ${RFValue(125)}px;
  height: ${RFValue(125)}px;
`;

export const Content = styled.View`
  margin-left: ${metrics.fourFoldPixel}px;
`;

export const DotsImage = styled.Image`
  width: ${RFValue(85)}px;
  position: absolute;
  right: ${-metrics.triplePixel}px;
  top: ${RFValue(220)}px;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(26)}px;
    line-height: ${metrics.fourFoldPixel}px;
    color: ${theme.colors.background};
  `}
`;

export const PokemonTypeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PokemonType = styled.View<TypeStyleProps>`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    width: ${RFValue(60)}px;
    height: ${RFValue(30)}px;
    border-radius: ${metrics.fiveFoldPixel}px;
    padding: 0 ${metrics.pixel}px;
    margin: ${metrics.pixel + 2}px;
    border: 1px solid ${theme.colors.background};
  `}
`;

export const PokemonTypeText = styled.Text`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.background};
  `}
`;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: ${metrics.triplePixel}px;
    background: ${theme.colors.background};
    border-top-left-radius: ${metrics.fiveFoldPixel}px;
    border-top-right-radius: ${metrics.fiveFoldPixel}px;
    margin-top: ${-metrics.eightFoldPixel}px;
  `}
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(16)}px;
    padding: ${metrics.doublePixel}px;
    color: ${theme.colors.light_text};
  `}
`;

export const StatusBar = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${metrics.pixel + 2}px ${metrics.triplePixel}px;
`;

export const Attributes = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(12)}px;
    width: ${RFValue(150)}px;
    text-transform: capitalize;
    color: ${theme.colors.text};
  `}
`;
export const AttributesNumber = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(16)}px;
    line-height: ${metrics.doublePixel + 3}px;
    text-align: right;
    color: ${theme.colors.detail};
    margin-left: ${metrics.triplePixel}px;
  `}
`;

export const ContentBar = styled.View`
  margin-left: ${metrics.triplePixel}px;
`;

export const Ability = styled.Text<TypeStyleProps>`
  ${({ theme, type }) => css`
    text-transform: capitalize;
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(12)}px;
    padding: 0 ${metrics.triplePixel}px;
    color: ${theme.colors.backgroundCard[type]};
  `}
`;

export const ProgressBar = styled(Progress.Bar).attrs({})<TypeStyleProps>``;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${RFValue(70)}px;
  left: ${RFValue(40)}px;
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
`;

export const ContainerPokemonText = styled.View`
  flex-direction: row;
`;

export const ContainerAbilities = styled.View`
  margin-bottom: ${metrics.triplePixel}px;
`;

export const Icon = styled(FontAwesome).attrs({
  size: RFValue(24),
  color: '#fff',
})``;
