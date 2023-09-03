import React, { useState } from 'react';
import Geocode from "react-geocode";
import Heder from '../../components/heder/Heder';
import Footer from '../../components/footer/Footer';
import Login from "../../components/login/Login";
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

    const [isLogModalVisable, setModalVisible] = useState(false);
    const contactLocation = {  lat:53.01071116256692,
        lng:18.608035021096104}; //są to współrzęcne restauracji.
    Geocode.setApiKey("AIzaSyBjqS9yK-ivKTvIrK-m9RUtYzJ0eLAbyRo");
    Geocode.setLanguage("pl");
    Geocode.setRegion("pl");
    const toggleLoginModal = () => {
        setModalVisible(!isLogModalVisable);
    };

    const [ulica, setUlica] = useState('');
    const [numer, setNumer] = useState('');
    const [miasto, setMiasto] = useState('');
    const [message, setMessage] = useState('');
    const [kodPocztowy, setKodPocztowy] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (ulica && numer && miasto && kodPocztowy) {
            // Geocode.fromAddress(kodPocztowy+ miasto + ulica + numer).then(
            //     (response) => {
            //         const { lat, lng } = response.results[0].geometry.location;
            //         console.log(lat, lng);
            //     },
            //     (error) => {
            //         console.error(error);
            //     }
            // );
            //liczymy odległość pomiędzy contactLocation(restauracjia) a zmiennymi lat,lng które symbolizują współrzędne użytkownika
            //przypisujemy tą odległość do zmiennej distanceFromContat, bo na raize jest ustawiona stała 10km
            //const distanceFromContact = 10;
            const distanceFromContact = calculateDistanceFromContact(miasto);

            if (distanceFromContact <= 15) {
                setMessage('Dziękujemy!');
            } else {
                setMessage('Niestety, nie dostarczamy, gdyż jest zbyt duża odległość.');
            }
        } else {
            setMessage('Proszę wypełnić wszystkie pola.');
        }
    };

    const calculateDistanceFromContact = (city) => {
        const contactLocation = {  lat:53.01071116256692,
            lng:18.608035021096104};
        const userLocation = getCoordinatesFromAddress(city);

        if (!userLocation) {
            return 1000;
        }

        const distance = calculateHaversineDistance(contactLocation, userLocation);
        return distance;
    };

    const getCoordinatesFromAddress = async (address) => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBjqS9yK-ivKTvIrK-m9RUtYzJ0eLAbyRo`);
            const data = await response.json();

            if (data.results.length > 0) {
                const location = data.results[0].geometry.location;
                console.log(location.lat, location.lng);
                return { lat: location.lat, lng: location.lng };
            } else {
                console.log('zledane');
                return null;
            }
        } catch (error) {
            console.error("Error getting coordinates:", error);
            return null;
        }
    };

    const calculateHaversineDistance = (point1, point2) => {
        const R = 6371;
        const dLat = toRadians(point2.lat - point1.lat);
        const dLng = toRadians(point2.lng - point1.lng);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRadians(point1.lat)) * Math.cos(toRadians(point2.lat)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        return distance;
    };

    const toRadians = (degrees) => {
        return degrees * (Math.PI / 180);
    };

    return (
        <Con>
            <Heder onLoginClick={toggleLoginModal}/>
            {isLogModalVisable && <Login onClose={toggleLoginModal}/> }

            <Container>
                <FormContainer>
                    <Header>SPRAWDŹ GDZIE DOWOZIMY!</Header>
                    <form onSubmit={handleFormSubmit}>
                        <FormLabel htmlFor="ulica">Ulica*</FormLabel>
                        <Input
                            type="text"
                            id="ulica"
                            name="ulica"
                            value={ulica}
                            onChange={(e) => setUlica(e.target.value)}
                            required
                        />

                        <FormLabel htmlFor="numer">Numer domu*</FormLabel>
                        <Input
                            type="text"
                            id="numer"
                            name="numer"
                            value={numer}
                            onChange={(e) => setNumer(e.target.value)}
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


                        <FormLabel htmlFor="miasto">Miasto*</FormLabel>
                        <Input
                            type="text"
                            id="miasto"
                            name="miasto"
                            value={miasto}
                            onChange={(e) => setMiasto(e.target.value)}
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