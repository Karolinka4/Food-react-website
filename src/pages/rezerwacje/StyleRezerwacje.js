import styled from 'styled-components';
import { COLOR } from '../../components/color';
const { white,black} = COLOR;

export const Container = styled.div`

  min-width: 400px;
  
`;

export const FlexContainer = styled.div`
  display: flex;
  margin: 30px auto;
  max-width: 1200px; 
  justify-content: center;
  background-color:${white};
  padding: 20px;
 
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding:0;
    margin:0;
    background-color:transparent;
  }
`;

export const Image = styled.div`
  flex: 1;
  text-align: center;
  max-width: 100%;
  padding: 0 10px;
  @media (max-width: 900px) {
    filter: brightness(0.2);
    padding: 0px;
    max-width: 100%;
    max-width: 100%;
  }

`;

export const FormContainer = styled.div`
  flex: 1;
  position: relative;
  max-width: 100%;
  padding: 0 10px;
  box-shadow: 0 20px 30px #252525;
  left: 15px;
  @media (max-width: 900px) {
    margin-top: 20px;  
    position:absolute;
    padding: 0;
    box-shadow: none;
  }
`;

export const Text = styled.div`
  color: ${black};
  margin-bottom: 70px;
  text-align: center;
  
  @media (max-width: 900px) {
    margin-bottom: 50px;
   
  }
`;

export const Heading = styled.h2`
  
    font-size: 15px;
    font-weight: bold;
  @media (max-width: 900px) {
    font-size: 11px;
    color:${white};
    font-weight: normal;
  }
`;

export const Headingg = styled.h1`
  
  margin-top: 150px;
    font-size: 27px;
  @media (max-width: 900px) {
    font-size: 20px;
    color:${white};
  }
  
`;

export const Img = styled.img`
  max-width: 100%;
  box-shadow: 0 20px 30px #252525;
    margin-left: 0;
  @media (max-width: 900px) {
    box-shadow: transparent;
  }
`;


export const Form = styled.form`
  width: 100%;
  margin-left: 109px;
  
  @media (max-width: 900px) {
    margin-left: 25px;
    margin-bottom: 160px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${black};
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 900px) {
    color:${white};
    font-size: 12px;
    font-weight: normal;
    margin-left: 15px;
  }
 
`;

export const Input = styled.input`
  display: flex;
  width: 60%;
  padding: 10px;
  border: 1px solid ${props => (props.isValid ? 'gray' : 'red')};
  border-radius: 5px;
  color: ${black};
  background-color:${white};
  margin-bottom: 10px;
  &:focus {
    border-color: black;
  }

  &:not(:focus) {
    border-color: ${props => (props.value === '' || props.isValid ? 'gray' : 'red')};
  }

  @media (max-width: 900px) {
    width: 70%;
    padding: 6px;
    margin-left: 11px;
  }
`;

export const SubmitButton = styled.input`
  background-color: #FFA800;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 30px;
  margin-left:168px;
  color: #070707;
  font-weight: bold;
  font-size: 18px;
  width: 35%;


  &:hover {
    background-color: #FFA800;
  }


  
  @media (max-width: 900px) {
    width: 30%;
    padding: 6px;
    margin-left:163px;
    margin-top: 16px;
  }
`;

