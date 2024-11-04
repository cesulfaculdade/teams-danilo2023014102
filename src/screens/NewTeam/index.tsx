import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function NewTeam(){
    const [team, setTeam] = useState<string>("");

    const navegation = useNavigation();

    const insets = useSafeAreaInsets();

    function handleAddMembers(){
        navegation.navigate('addMember', {team: team})
    }

    return (
        <Container style={{ paddingBottom: insets.bottom }}>
        <HeaderContainer style={{ paddingTop: insets.top }}>
            <Header showBackButton/>

            <Highlight
                title="Nova Equipe"
                subtitle="Crie uma equipe e adicione membros"
            />
        </HeaderContainer>

        <Content>
            <Input 
                placeholder="Nome da Equipe"
                onChangeText={setTeam}
                />
        

            <Button 
                title="Criar equipe" 
                onPress={handleAddMembers}
                />
                
        </Content>
    </Container>
    )
}