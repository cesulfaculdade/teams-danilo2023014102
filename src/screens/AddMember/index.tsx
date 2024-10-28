import { Header } from "@components/Header";
import { Container, Content, HeaderContainer, InputContainer, Tabs } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Tab } from "@components/Tab";
import { FlatList } from "react-native";
import { useState } from "react";
import { Tag } from "@components/Tag";
import { MemberCard } from "@components/MemberCard";
import { ListEmpty } from "src/ListEmpty";


export function AddMember() {
    const [tab, setTab] = useState<string>("Titular");
    const [members, setMembers] = useState<string[]>(["Sapao"]);

    return (
        <Container>
        <HeaderContainer>
            <Header showBackButton/>

            <Highlight
                title="Equipe 1"
                subtitle="Adicione os titulares e reservas"
            />
        </HeaderContainer>

        <Content>
            <InputContainer>
                <Input 
                style= {{ borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRightWidth: 0}}
                placeholder="Adicione um membro"/>
                <ButtonIcon  
                style= {{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
                icon="add-circle-outline"/>
            </InputContainer>

            <Tabs>
                <FlatList
                    data={['Titular','Reserva']}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Tab
                            title={item}
                            isActive={item === tab}
                            onPress={() => setTab(item)}
                        />
                    )}
                    horizontal={true}
                />
                <Tag text={0} />
            </ Tabs>

            <FlatList
                data={members}
                keyExtractor={item => item}
                renderItem={({item}) => (
                <MemberCard 
                    name={item} 
                    onRemove={() => console.log("remove")} 
                    />
                )}
                ListEmptyComponent={<ListEmpty message="Não há membros adicionados."/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: 100}, members.length === 0 && {flex: 1}]}
            />

            <Button title="Deletar Equipe" type="SECONDARY" />
        </Content>
    </Container>
    )
}