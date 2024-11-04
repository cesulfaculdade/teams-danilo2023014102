import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./styles"
import logo from "@assets/logo.png";

type Props = {
    showBackButton?: boolean;
}

export function Header( {showBackButton = false} : Props ) {
    
    const navegation = useNavigation();

    function handleGoBack () {
        navegation.navigate("teams");
    }

    return (
        <Container>
            {
            showBackButton &&
            <BackButton onPress={handleGoBack}>
                <BackIcon name="arrow-back-ios"/>
            </BackButton>
            }

            <Logo source={logo}/>
        </Container>
   )
}