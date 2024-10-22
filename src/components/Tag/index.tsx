import { Container, Text } from "./style";

type Props = {
    text: string | number
}

export function Tag ({text}: Props){
    return (
        <Container>
            <Text>
                {text}
            </Text>
        </Container>
    )
}