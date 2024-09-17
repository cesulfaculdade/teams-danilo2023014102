import styled from "styled-components/native";


export const Container = styled.View`
    margin-top: 8px;
`;

export const Tittle = styled.Text`
text-align: center;
font-family: ${( props ) => props.theme.FONT_FAMILY.BOLD};
font-size: ${( props ) => props.theme.FONT_SIZE.XL}px;
color: ${( props ) => props.theme.COLORS.GRAY_100};
`;

export const Subtittle = styled.Text`text-align: center;
font-family: ${( props ) => props.theme.FONT_FAMILY.REGULAR};
font-size: ${( props ) => props.theme.FONT_SIZE.MD}px;
color: ${( props ) => props.theme.COLORS.GRAY_100};
`;
