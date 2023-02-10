import metrics from '@global/metrics';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ListMenu = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
  showVerticalScrollIndicator: false,

  contentContainerStyle: {
    paddingLeft: 10,
  },
})``;

export const Container = styled.TouchableOpacity`
  margin: 5px;
  padding: ${metrics.pixel + 2}px;
  border-radius: ${metrics.pixel * 2}px;
  background-color: ${({ theme }) => theme.colors.detail};
`;

export const Text = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;
