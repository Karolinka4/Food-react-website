import React, { useState, useEffect } from 'react';
import {AiFillCaretRight } from 'react-icons/ai';
import {
    Container,
    Logo,
    NameInfo,
    InfoContainer,
    Section,
    Title,
    StyledFooter,
    Container2,
    Details,
    Summary
} from './StyleComponentsFooter';
import {FaBars, FaTimes} from "react-icons/fa";

const Footer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 900);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const initialStates = {
        telefon: false,
        email: false,
        adres: false,
        godziny: false,
        dostawy: false,
        kuchnia: false
    };

    const [expanded, setExpanded] = useState(initialStates);

    const toggleExpansion = (section) => {
        setExpanded((prevState) => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <Container>
            <Container2>
                <Logo>
                    <img src="img/1.png" alt="Logo" />
                </Logo>
                <NameInfo>
                    {isMobile ? (
                        <Details>
                            <Summary>Informacje</Summary>
                            <InfoContainer>
                                <Section>
                                    <Title onClick={() => toggleExpansion('telefon')}>
                                       <AiFillCaretRight/> Numer telefonu:
                                    </Title>
                                    {expanded.telefon && <p>333 654 332</p>}
                                </Section>
                                <Section>
                                    <Title onClick={() => toggleExpansion('email')}>
                                        <AiFillCaretRight/>    Adres email:
                                    </Title>
                                    {expanded.email && <p>restauracja.margo@wp.pl</p>}
                                </Section>
                                <Section>
                                    <Title onClick={() => toggleExpansion('adres')}>
                                        <AiFillCaretRight/>   Adres:
                                    </Title>
                                    {expanded.adres && (
                                        <p>
                                            87-100 Toruń<br />
                                            Kaszczorek
                                        </p>
                                    )}
                                </Section>
                                <Section>
                                    <Title onClick={() => toggleExpansion('godziny')}>
                                        <AiFillCaretRight/>   Godziny otwarcia:
                                    </Title>
                                    {expanded.godziny && (
                                        <p>
                                            poniedziałek 12:00-22:00<br />
                                            wtorek 12:00-22:00<br />
                                            środa 12:00-22:00<br />
                                            czwartek 12:00-22:00<br />
                                            piątek 12:00-22:00<br />
                                            sobota 12:00-23:00<br />
                                            niedziela 12:00-23:00
                                        </p>
                                    )}
                                </Section>
                                <Section>
                                    <Title onClick={() => toggleExpansion('dostawy')}>
                                        <AiFillCaretRight/>   Godziny dostawy
                                    </Title>
                                    {expanded.dostawy && (
                                        <p>
                                            poniedziałek-piątek 12:00-21:30<br />
                                            sobota-niedziela 12:00-22:30
                                        </p>
                                    )}
                                </Section>
                            </InfoContainer>
                        </Details>
                    ) : (
                        <InfoContainer>
                            <Section>
                                  <Title>Numer telefonu:</Title>
                                <p>333 654 332</p>
                            </Section>
                            <Section>
                                <Title>Adres email:</Title>
                                <p>restauracja.margo@wp.pl</p>
                            </Section>
                            <Section>
                                <Title>Adres:</Title>
                                <p>
                                    87-100 Toruń<br />
                                    Szeroka 8
                                </p>
                            </Section>
                            <Section>
                                <Title>Godziny otwarcia:</Title>
                                <p>
                                    poniedziałek 12:00-22:00<br />
                                    wtorek 12:00-22:00<br />
                                    środa 12:00-22:00<br />
                                    czwartek 12:00-22:00<br />
                                    piątek 12:00-22:00<br />
                                    sobota 12:00-23:00<br />
                                    niedziela 12:00-23:00
                                </p>
                            </Section>
                            <Section>
                                <Title>Godziny dostawy</Title>
                                <p>
                                    poniedziałek-piątek 12:00-21:30<br />
                                    sobota-niedziela 12:00-22:30
                                </p>
                            </Section>
                            <Section>
                                <Title>Oferowana kuchnia</Title>
                                <p>
                                   Pizza, Saładki, Napoje
                                </p>
                            </Section>
                        </InfoContainer>
                    )}
                </NameInfo>
            </Container2>
            <StyledFooter>
                <p>&copy; 2023 Wszelkie prawa do tej strony są zastrzeżone.</p>
            </StyledFooter>
        </Container>
    );
};

export default Footer;
