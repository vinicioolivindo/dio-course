import React from 'react'
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
} from './styles'
import { Button } from '../Button'
import profileImage from '../../assets/profile-pic.png'
import logo from '../../assets/logo-dio.png'

const Header = ({ autenticado }) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da dio" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}

                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src={profileImage} />
                    ) : (
                        <>
                            <MenuRight href='#'>Home</MenuRight>
                            <Button title="Entrar" />
                            <Button title="Cadastrar" />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }