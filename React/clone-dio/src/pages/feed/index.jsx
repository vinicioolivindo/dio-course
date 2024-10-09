import { Header } from "../../components/Header";
import profileImage from '../../assets/profile-pic.png'
import { Container, Column, Title, TitleHighLight } from './styles'

import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighLight># RANKING 5 TOP DA SEMANA</TitleHighLight>
                    <UserInfo percentual={55} nome="Jose Vinicio" image={profileImage} />
                    <UserInfo percentual={30} nome="Jose Vinicio" image={profileImage} />
                    <UserInfo percentual={90} nome="Jose Vinicio" image={profileImage} />
                    <UserInfo percentual={40} nome="Jose Vinicio" image={profileImage} />
                    <UserInfo percentual={10} nome="Jose Vinicio" image={profileImage} />
                </Column>
            </Container>
        </>
    )
}
export { Feed }