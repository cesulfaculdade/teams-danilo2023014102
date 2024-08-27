import { Container, LoadingIndicator } from "./styles";
import { AccessibilityInfo, View } from "react-native";

export function Loading(){
    return (
        <Container>
            <LoadingIndicator/>
        </Container>
    )
}