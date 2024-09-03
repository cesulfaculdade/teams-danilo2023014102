import { Text, Image } from "react-native";
import Logo from "../../assets/logo.png";
import { Container, Tittle, HeaderContainer } from "./styles";



export function Teams() {
    return (
        <Container>
            {/* <Image source={Logo}/> */}
            {/* <Tittle>Equipes</Tittle> */}

            <HeaderContainer>
                <Image source={Logo}/>
            </HeaderContainer>
        </Container>
    )
}