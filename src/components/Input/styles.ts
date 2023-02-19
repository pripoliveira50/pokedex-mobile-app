import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import metrics from '@global/metrics';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  align-content: center;
`;

export const Content = styled.View`
  width: 80%;
  padding: ${metrics.pixel + 3}px;
  border-radius: ${metrics.pixel - 3}px;
  border: 2px solid ${({ theme }) => theme.colors.text};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#5e6993',
  autoCapitalize: 'none',
})`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  width: 90%;
`;

export const Icon = styled(FontAwesome).attrs({
  size: RFValue(20),
  color: '#fff',
})``;

export const SearchButton = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
  width: ${RFValue(50)}px;
  height: ${RFValue(65)}px;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: ${metrics.pixel - 3}px;
`;
