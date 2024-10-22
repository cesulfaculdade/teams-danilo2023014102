import { TouchableOpacityProps } from "react-native";
import { Container, Icon, ButtonIconTypeStyleProps, ButtonIconSizeStyleProps, ButtonIconBorderRadiusStyleProps } from "./styles";
import { MaterialIcons } from "@expo/vector-icons/"

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleProps;
    size?: ButtonIconSizeStyleProps;
    borderRadius?: ButtonIconBorderRadiusStyleProps;
}

export function ButtonIcon({ icon, type = "PRIMARY", size = "MD", borderRadius = "FULL", ... rest }: Props ) {
    return(
        <Container type={type} size={size} borderRadius={borderRadius} {... rest}>
            <Icon 
            name={icon}
            />
        </Container>
    )
}