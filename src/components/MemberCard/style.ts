import { css, styled } from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: 44px;
    ${({ theme }) => css`
        background-color: ${theme.COLORS.GRAY_100};
        border-color: ${theme.COLORS.GRAY_200};
    `}
    
    align-items: center;
    flex-direction: row;
    border-width: 1px;
    border-radius: 8px;
    margin-bottom: 14px;
    padding-left: 12px;
`;

export const Name = styled.Text`
    flex: 1;
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_500};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;