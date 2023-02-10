import styled, { css } from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { StyleSheet } from 'react-native';
import metrics from '@global/metrics';
import { TypeStyleProps } from '@screens/PokemonDetails/types';

export const PokemonCard = styled.TouchableOpacity<TypeStyleProps>`
  ${({ theme, type }) => css`
    justify-content: center;
    align-items: center;
    background: ${theme.colors.backgroundCard[type]
      ? theme.colors.backgroundCard[type]
      : theme.colors.light_text};
    border-radius: ${metrics.triplePixel}px;
    margin-right: ${metrics.triplePixel}px;
    height: ${RFValue(170)}px;
    width: ${RFPercentage(25)}px;
    margin-bottom: ${metrics.sevenFoldPixel}px;
  `}
`;

export const ContainerPokemonText = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ContainerPokemonType = styled.View`
  left: ${metrics.pixel + 2}px;
  flex-direction: row;
  position: relative;
  justify-content: center;
`;

export const ImageCardFrame = styled.Image`
  position: absolute;
  width: ${RFValue(74)}px;
  height: ${RFValue(32)}px;
  left: ${RFValue(70)}px;
  top: ${RFValue(-60)}px;
  z-index: -1;
`;

export const PokemonId = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(10)}px;
    padding: 5px;
    color: ${theme.colors.light_text};
  `}
`;

export const PokemonName = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    text-transform: capitalize;
    color: ${theme.colors.background};
  `}
`;

export const PokemonType = styled.View`
  ${({ theme }) => css`
    width: ${RFValue(58)}px;
    height: ${RFValue(30)}px;
    border-radius: ${metrics.fiveFoldPixel}px;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    margin-top: 4px;
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

export const PokemonImage = styled.Image`
  justify-content: center;
  align-items: center;
  margin-top: -85px;
  width: ${RFValue(130)}px;
  height: ${RFValue(130)}px;
`;

export const PokeballDetail = styled.Image`
  position: absolute;
  right: ${-metrics.pixel + 2}px;
`;

export const styles = StyleSheet.create({
  shadowCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
