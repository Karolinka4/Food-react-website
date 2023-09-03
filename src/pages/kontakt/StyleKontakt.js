import styled from 'styled-components';
import { COLOR } from '../../components/color';
const { white, yellow, grey,black} = COLOR;
export const Container = styled.div`
    width: 100%;
  min-width: 400px;
`;

export const Text = styled.div`
    margin-top: 7vh;
    text-align: center;
    color: ${black};
    font-size: 30px;
    font-weight: bold;
    @media (max-width: 768px) {
        margin-top: 5vh;
        font-size: 6vw;
    }
`;

export const Text2 = styled.div`
    text-align: center;
    color: ${black};
    font-size: 20px;
  font-weight: bold;
    margin-top: 2vh;

    @media (max-width: 768px) {
        font-size: 4vw;
    }
`;

export const KolaContainer = styled.div`
    display: flex;
    justify-content: center;
    color:${black} ;
    margin-top: 60px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-top: 2vh;
    }
`;

export const Circle = styled.div`
    width: 30vw;
    height: 30vw;
    max-width: 130px;
    max-height: 130px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #FFA800;
    text-align: center;
    border: 5px solid #FFA800;
    margin: 0 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
  box-shadow: 0 5px 25px #252525;

    img {
        max-width: 60%;
        max-height: 60%;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        width: 50vw;
        height: 50vw;
        margin: 3vh auto;

        img {
            margin-top: 0px;
          
        }
    }
`;

export const TextContainer = styled.div`
    margin-top: 3vh;

    h1 {
        font-size: 21px;
        margin-bottom: 20px;
      text-align: center;
    
    }

    h2, p {
        font-size: 18px;
        margin: 0;
    }

    @media (max-width: 768px) {
        margin-top: 1vh;
    }
`;

export const Umiesc = styled.div`
    padding: 2vh 1vw;
    margin-bottom: 10vh;

    @media (max-width: 768px) {
        margin-bottom: 4vh;
    }
`;

export const MapContainer = styled.div`
  
    margin-bottom: 10vh;
  `;
