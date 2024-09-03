import { Highlight } from "@components/Highlight";
import { Container, Content, HeaderContainer } from "./styles";
import { Header } from "@components/Header";
import { TeamCard } from "@components/TeamCard";



export function Teams() {
    return (
        <Container>
            <HeaderContainer>
                <Header />

                <Highlight 
                    title="Equipes"
                    subtitle="Preparem suas equipes"
                />
            </HeaderContainer>

            <Content>
                <TeamCard title="Equipe 1" />
            </Content>
        </Container>
    )
}