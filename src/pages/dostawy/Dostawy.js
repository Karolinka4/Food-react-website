import React, { useState } from 'react';
import Heder from '../../components/heder/Heder';
import Footer from '../../components/footer/Footer';
import Login from '../../components/login/Login';
import {
    Container,
    Header,
    FormContainer,
    Input,
    FormLabel,
    SubmitButton,
    Con
} from './StyleDostawy';

const Dostawy = () => {
    const [isLogModalVisible, setModalVisible] = useState(false);
    const [adres, setAdres] = useState('');
    const [miasto, setMiasto] = useState('');
    const [kodPocztowy, setKodPocztowy] = useState('');
    const [message, setMessage] = useState('');

    const toggleLoginModal = () => {
        setModalVisible(!isLogModalVisible);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (adres && miasto && kodPocztowy) {

            if (miasto.toLowerCase() === 'toruń' && /^[8-9][7-9]|100$/.test(kodPocztowy)) {
                setMessage('Dziękujemy! Dostawa jest dostępna w Toruniu.');
            } else {
                setMessage('Niestety, dowozimy tylko na terenie Torunia.');
            }
        } else {
            setMessage('Proszę wypełnić wszystkie pola.');
        }
    };

    return (
        <Con>
            <Heder onLoginClick={toggleLoginModal} />
            {isLogModalVisible && <Login onClose={toggleLoginModal} />}

            <Container>
                <FormContainer>
                    <Header>SPRAWDŹ GDZIE DOWOZIMY!</Header>
                    <form onSubmit={handleFormSubmit}>
                        <FormLabel htmlFor="adres">Adres*</FormLabel>
                        <Input
                            type="text"
                            id="adres"
                            name="adres"
                            value={adres}
                            onChange={(e) => setAdres(e.target.value)}
                            required
                        />

                        <FormLabel htmlFor="miasto">Miasto*</FormLabel>
                        <Input
                            type="text"
                            id="miasto"
                            name="miasto"
                            value={miasto}
                            onChange={(e) => setMiasto(e.target.value)}
                            required
                        />

                        <FormLabel htmlFor="kodPocztowy">Kod pocztowy*</FormLabel>
                        <Input
                            type="text"
                            id="kodPocztowy"
                            name="kodPocztowy"
                            value={kodPocztowy}
                            onChange={(e) => setKodPocztowy(e.target.value)}
                            required
                        />

                        <SubmitButton type="submit" value="SPRAWDŹ" />
                    </form>
                    {message && <div>{message}</div>}
                </FormContainer>
            </Container>
            <Footer />
        </Con>
    );
};

export default Dostawy;
