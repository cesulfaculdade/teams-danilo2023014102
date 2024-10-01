import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 54px;
  max-height: 54px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};;
  padding: 16px;
`