import { View, Text } from "react-native";

type Props = {
    message: string;
}

export function ListEmpty({message}: Props) {
    return(
        <View>
            <Text>{message}</Text>
        </View>

    )
}