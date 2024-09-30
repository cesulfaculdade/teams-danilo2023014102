import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { TextInput } from "react-native";

export function NewTeam(){
    return (
        <Container>
        <HeaderContainer>
            <Header />

            <Highlight
                title="Nova Equipe"
                subtitle="Crie uma equipe e adicione membros"
            />
        </HeaderContainer>

        <Content>
            <TextInput placeholderTextColor="#000"
            placeholder="Chpaeu" 
            />

            <Button title="Criar equipe" />
        </Content>
    </Container>
    )
}