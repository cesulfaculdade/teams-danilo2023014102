import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    align-items: center;
    justify-content: center;
  `;

  export const Tittle = styled.Text`
    font-size: 40;
  `;