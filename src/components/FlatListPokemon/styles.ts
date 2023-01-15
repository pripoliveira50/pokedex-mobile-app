import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const ListPokemon = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,

  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingTop: 80,
  },
})``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${RFValue(32)}px;
    font-family: ${theme.fonts.bold};
    flex-wrap: wrap;
    text-align: center;
  `}
`;
