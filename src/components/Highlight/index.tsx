import { Container, Subtittle, Tittle } from "./style";

type Props = {
    title: string;
    subtitle: string;
}

export function Highlight ( {title, subtitle }: Props ) {
    return (
        <Container>
            <Tittle>
                {title}
            </Tittle>

            <Subtittle>
                {subtitle}
            </Subtittle>
        </Container>
    )
}