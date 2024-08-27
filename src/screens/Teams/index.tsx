import { View, Text, Image } from "react-native";
import Logo from "../../assets/logo.png";
import { Container, Tittle } from "./styles";



export function Teams() {
    return (
        <Container>
            <Image source={Logo}/>
            <Tittle>Equipes</Tittle>         
        </Container>
    );
}