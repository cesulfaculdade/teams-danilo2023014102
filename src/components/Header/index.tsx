import { BackButton, BackIcon, Container, Logo } from "./styles"
import logo from "../../assets/logo.png";


export function Header() {
    return (
        <Container>
            <BackButton>
                <BackIcon name="arrow-back-ios"/>
            </BackButton>

            <Logo source={logo}/>
        </Container>
   )
}