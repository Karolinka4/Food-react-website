import React, { useState } from 'react';
import Login from '../../components/login/Login';
import Heder from '../../components/heder/Heder';
import Footer from '../../components/footer/Footer';
import {
    Container,
    FlexContainer,
    Image,
    Img,
    FormContainer,
    Text,
    Heading,
    Headingg,
    Form,
    Label,
    Input,
    SubmitButton,
} from './StyleRezerwacje';

const Rezerwacje = () => {
    const [isLogModalVisible, setLogModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        data: '',
        ilosc: '',
        telefon: '',
        email: '',
    });
    const [message, setMessage] = useState('');

    const toggleLoginModal = () => {
        setLogModalVisible(!isLogModalVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { data, ilosc, telefon } = formData;

        if (data && ilosc && telefon) {
            setMessage('Dziękujemy! Odezwiemy się niebawem');
        } else {
            setMessage('Proszę wypełnić wszystkie pola.');
        }
    };

    return (
        <Container>
            <Heder onLoginClick={toggleLoginModal} />
            {isLogModalVisible && <Login onClose={toggleLoginModal} />}

            <FlexContainer>
                <Image>
                    <Img src="img/4.jpg" alt="Zdjęcie" />
                </Image>
                <FormContainer>
                    <Text>
                        <Headingg>ZAREZERWUJ STOLIK JUŻ TERAZ!</Headingg>
                        <Heading>Wyślij do nas swoją rezerwację, potwierdzimy ją w ciągu 24h</Heading>
                        <Heading>Potrzebujesz stolik na dzisiaj?</Heading>
                        <Heading>Zadzwoń: 333 654 332</Heading>
                    </Text>
                    <Form onSubmit={handleSubmit}>
                        <Label htmlFor="data">Data (yyyy-mm-dd)</Label>
                        <Input
                            type="text"
                            id="data"
                            name="data"
                            value={formData.data}
                            onChange={handleChange}
                            required
                        />

                        <Label htmlFor="ilosc">Liczba osób (2-10)</Label>
                        <Input
                            type="number"
                            id="ilosc"
                            name="ilosc"
                            value={formData.ilosc}
                            onChange={handleChange}
                            min={2}
                            max={10}
                            required
                        />

                        <Label htmlFor="telefon">Telefon (+48 xxx xxx xxx)</Label>
                        <Input
                            type="tel"
                            id="telefon"
                            name="telefon"
                            value={formData.telefon}
                            onChange={handleChange}
                            required
                        />

                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <SubmitButton type="submit" value="Wyślij" />
                        {message && (
                        <div className="message">
                            <p>{message}</p>
                        </div>
                    )}
                    </Form>
                </FormContainer>
            </FlexContainer>

            <Footer />
        </Container>
    );
};

export default Rezerwacje;
