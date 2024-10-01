import { Touchable, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";
import { ButtonTypeStyleProps } from "@components/Button/styles";
import { MaterialIcons } from "@expo/vector-icons/"

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    type?: ButtonTypeStyleProps
}

export function ButtonIcon({ type = "PRIMARY", ... rest }: Props ) {
    return(
        <Container type={type} {... rest}>
            <Icon 
            name="add-circle-outline"/>
        </Container>
    )
}