import React, { useState, useRef, useEffect } from 'react';
import Heder from '../../components/heder/Heder';
import Footer from '../../components/footer/Footer';
import Login from "../../components/login/Login";
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

import {
    Container,
    Text,
    Text2,
    KolaContainer,
    Circle,
    TextContainer,
    Umiesc,
    MapContainer
} from './StyleKontakt';

const Kontakt = () => {

    const[isLogModalVisable, setModalVisable]=useState(false);
    const mapRef = useRef(null);
    const toggleLoginModal=()=> {
        setModalVisable(!isLogModalVisable);
    };

    const restartMap = () => {
        if (mapRef.current && mapRef.current.google) {
            // Niszczy poprzednią mapę
            mapRef.current.google.maps.event.clearInstanceListeners(mapRef.current);
            mapRef.current.google = null;
        }
    };

    const mapStyles = {
        height: "400px",
        width: "100%"
    };

    const defaultCenter = {
        lat:53.01071116256692,
        lng:18.608035021096104
    };

    useEffect(() => {
        restartMap(); // Uruchamia funkcję restartującą mapę przy każdym wejściu na stronę
    }, []);

    const openingHours = [
        { day: "poniedziałek", hours: "12:00-22:00" },
        { day: "wtorek", hours: "12:00-22:00" },
        { day: "środa", hours: "12:00-22:00" },
        { day: "czwartek", hours: "12:00-22:00" },
        { day: "piątek", hours: "12:00-22:00" },
        { day: "sobota", hours: "12:00-23:00" },
        { day: "niedziela", hours: "12:00-23:00" }
    ];
    const deliveryHours = [
        { dayRange: "poniedziałek-piątek", hours: "12:00-21:30" },
        { dayRange: "sobota-niedziela", hours: "12:00-22:30" }
    ];
    return (
        <>


            <Container>
                <Heder onLoginClick={toggleLoginModal}/>
                {isLogModalVisable && <Login onClose={toggleLoginModal}/> }

                <Text>SKONTAKTUJ SIĘ Z NAMI</Text>
                <Text2>Napisz lub zadzwoń do nas!</Text2>

                <KolaContainer>
                    <Umiesc>
                        <Circle>
                            <img src="img/16.png" alt="Obrazek 1" />
                        </Circle>
                        <TextContainer>
                            <h1>DANE ADRESOWE</h1>
                            <h2>Margo Pizza</h2>
                            <p>ul. Szeroka 8, 87-100 Toruń</p>
                        </TextContainer>
                    </Umiesc>

                    <Umiesc>
                        <Circle>
                            <img src="img/14.png" alt="Obrazek 2" />
                        </Circle>
                        <TextContainer>
                            <h1>DANE KONTAKTOWE</h1>
                            <h2>e-mail: restauracja.margo@wp.pl</h2>
                            <p>tel: 333 654 332</p>
                        </TextContainer>
                    </Umiesc>

                    <Umiesc>
                        <Circle>
                            <img src="img/17.png" alt="Obrazek 3" />
                        </Circle>
                        <TextContainer>
                            <h1>GODZINY OTWARCIA</h1>
                            <div>
                                {openingHours.map(item => (
                                    <p key={item.day}>
                                        <span style={{ display: 'inline-block', width: '135px', textAlign: 'left', fontSize:'18px' }}>{item.day}:</span>
                                        <span style={{ display: 'inline-block', width: '135px', textAlign: 'right',fontSize:'18px'}}>{item.hours}</span>
                                    </p>
                                ))}
                            </div>
                        </TextContainer>
                    </Umiesc>

                    <Umiesc>
                        <Circle>
                            <img src="img/15.png" alt="Obrazek 4" />
                        </Circle>
                        <TextContainer>
                            <h1>GODZINY DOSTAWY</h1>
                            <div>
                                {deliveryHours.map(item => (
                                    <p key={item.dayRange}>
                                        <span style={{ display: 'inline-block', width: '180px', textAlign: 'left', fontSize:'18px' }}>{item.dayRange}:</span>
                                        <span style={{ display: 'inline-block', width: '100px', textAlign: 'right', fontSize:'18px' }}>{item.hours}</span>
                                    </p>
                                ))}
                            </div>
                        </TextContainer>
                    </Umiesc>
                </KolaContainer>
                <MapContainer >
                <LoadScript googleMapsApiKey="AIzaSyCs4WLlXu5dzHRvvIsWp7VRQ2A2ZLrPJpo">
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={15}
                        center={defaultCenter}
                        ref={mapRef}
                    >
                        <Marker position={{ lat:53.01071116256692, lng:18.608035021096104 }} />
                    </GoogleMap>
                </LoadScript>
            </MapContainer>
                <Footer/>
            </Container>
        </>
    );
};

export default Kontakt;
