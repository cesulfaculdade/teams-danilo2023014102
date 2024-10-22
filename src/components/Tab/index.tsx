import { TouchableOpacityProps } from "react-native";
import { Conteiner, TabStyleProps, Title } from "./style";

type Props = TouchableOpacityProps & TabStyleProps & {
    title: string;
}

export function Tab({title, isActive = false, ...rest }: Props){
    return (
        <Conteiner isActive={isActive}{...rest}>
            <Title>
                {title}
            </Title>
        </Conteiner>
    )
}