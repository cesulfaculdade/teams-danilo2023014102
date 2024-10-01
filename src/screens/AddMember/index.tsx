import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./style";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/BurttonIcon";

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
            <ButtonIcon  icon="add-circle-outline"/>
        

            <Button title="Deletar Equipe" type="SECONDARY" />
        </Content>
    </Container>
    )
}