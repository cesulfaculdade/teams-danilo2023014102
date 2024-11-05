import { Highlight } from "@components/Highlight";
import { Container, Content, HeaderContainer } from "./styles";
import { Header } from "@components/Header";
import { TeamCard } from "@components/TeamCard";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "src/ListEmpty";
import { Button } from "@components/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fetchAllTeams } from "src/storage/team/fetchAllTeams";
import ComponentStyle from "styled-components/dist/models/ComponentStyle";


export function Teams() {
    const [teams, setTeams] = useState<string[]>([]);

    const navegation = useNavigation();

    const insets = useSafeAreaInsets();

    function handleNewTeam() {
        navegation.navigate("newTeam");
    }

    async function handleFetchAllTeams(){
        try {
            const data = await fetchAllTeams();
            setTeams(data)
        } catch (error) {
            throw console.log(error)
        }
    }

    useFocusEffect(useCallback(() => {
        handleFetchAllTeams();
    }, []));

    return (
        <Container style={{ paddingBottom: insets.bottom }}>
            <HeaderContainer style={{ paddingTop: insets.top }}>
                <Header />

                <Highlight 
                    title="Equipes"
                    subtitle="Preparem suas equipes"
                />
            </HeaderContainer>

            <Content>
                <FlatList 
                    data={teams}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => (
                        <TeamCard title={item} /> 
                    )}

                    ListEmptyComponent={() => (
                        <ListEmpty message="Começe criando uma equipe"/>
                    )}
                    contentContainerStyle={teams.length === 0 && {flex: 1}}
                />

                <Button 
                title="Criar uma equipe" 
                onPress={handleNewTeam}
                />
            
            </Content>
        </Container>
    )
}