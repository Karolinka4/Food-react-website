import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';

import {
    Container,
    SignUpContainer,
    SignInContainer,
    Form,
    Title,
    Input,
    Button,
    Anchor,
    OverlayContainer,
    Overlay,
    RightOverlayPanel,
    GhostButton,
    LeftOverlayPanel,
    Con,
    CloseButton,
    Img
} from './StyleComponentsLogin';

const registeredUsers = [
    { email: 'poprawny@example.com', haslo: 'poprawnehaslo' },
    { email: 'poprawny@wp.pl', haslo: 'poprawnehaslo22' },
    { email: 'poprawny@gmail.pl', haslo: '%Poprawnehaslo22' },
    { email: 'poprawny@interia.pl', haslo: '%#Popra77wnehaslo22' },
];

const Login = ({ onClose }) => {
    const [signIn, toggle] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        const user = registeredUsers.find(
            (user) => user.email === email && user.haslo === password
        );

        if (user) {
            setLoginError('');
            setLoggedIn(true);
            onClose();
        } else {
            setLoginError('Niepoprawny email lub hasło');
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const CloseButtonR = () => {
        onClose();
    };

    return (
        <Con onClick={handleOverlayClick}>
            <Container>
                {isLoggedIn ? (
                    <p>Witaj, jesteś zalogowany!</p>
                ) : (
                    <>
                        <SignUpContainer $signin={signIn}>
                            <Form>
                                <CloseButton onClick={onClose}>
                                    <MdClose style={{ fontSize: '30px', color: 'black' }} />
                                </CloseButton>
                                <Title>Zarejestruj się</Title>
                                <Input type='text' placeholder='Name' autoComplete='nickname' />
                                <Input type='email' placeholder='Email' autoComplete='email' />
                                <Input type='password' placeholder='Password' autoComplete='new-password' />
                                <Button onClick={handleLogin}>Zarejestruj się</Button>
                            </Form>
                        </SignUpContainer>

                        <SignInContainer $signin={signIn}>
                            <Form>
                                <CloseButton onClick={CloseButtonR}>
                                    <MdClose style={{ fontSize: '30px', color: 'black' }} />
                                </CloseButton>
                                <Title>Zaloguj się</Title>
                                <Input type='email' placeholder='Email' autoComplete='email' />
                                <Input type='password' placeholder='Password' autoComplete='new-password' />
                                <Anchor href='#'>Zapomniałeś hasła?</Anchor>
                                <Button onClick={handleLogin}>Zaloguj się</Button>
                            </Form>
                        </SignInContainer>

                        <OverlayContainer $signin={signIn}>
                            <Overlay $signin={signIn}>
                                <Img src="../img/20.jpg" alt="pizza" />
                                <img src="../img/20Mobile.jpg" alt="pizzaMobile" />
                                <LeftOverlayPanel $signin={signIn}>
                                    <GhostButton onClick={() => toggle(true)}>
                                        Zaloguj się
                                    </GhostButton>
                                </LeftOverlayPanel>
                                <RightOverlayPanel $signin={signIn}>
                                    <GhostButton onClick={() => toggle(false)}>
                                        Zarejestruj się
                                    </GhostButton>
                                </RightOverlayPanel>
                            </Overlay>
                        </OverlayContainer>
                    </>
                )}
            </Container>
        </Con>
    );
};

export default Login;
