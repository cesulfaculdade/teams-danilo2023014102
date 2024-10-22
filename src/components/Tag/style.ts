import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_200};
        border-radius: 999px;
        padding: 2px 8px;
    `}
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_400};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;