import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type Props = {
    type: "PRIMARY | SECONDARY "
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;
    min-height: 55px;
    max-height: 55px;
    background-color: ${({theme, type}) => type === `PRIMARY` ? theme.COLORS.GREEN_500 : Theme};
    border-radius: 8px;;

    align-items: center;
    justify-content: center;

    padding: 18px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;