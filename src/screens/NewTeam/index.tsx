import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { TextInput } from "react-native";
import { Input } from "@components/Input";

export function NewTeam(){
    return (
        <Container>
        <HeaderContainer>
            <Header showBackButton/>

            <Highlight
                title="Nova Equipe"
                subtitle="Crie uma equipe e adicione membros"
            />
        </HeaderContainer>

        <Content>
            <Input />
        

            <Button title="Criar equipe" />
        </Content>
    </Container>
    )
}