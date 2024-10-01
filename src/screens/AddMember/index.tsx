import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./style";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function AddMember() {
    return (
        <Container>
        <HeaderContainer>
            <Header showBackButton/>

            <Highlight
                title="Nova Equipe"
                subtitle="Adicione os titulares e reservas"
            />
        </HeaderContainer>

        <Content>
            <Input placeholder="Adicione o membro"/>
        

            <Button title="Deletar Equipe" type="SECONDARY" />
        </Content>
    </Container>
    )
}