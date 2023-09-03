import styled from 'styled-components';
import { COLOR } from '../../components/color';
const { white, yellow, grey,grey2,janyellow, black} = COLOR;

export const Con = styled.div`
  position:absolute;
  min-width: 100%;
  background-color: ${grey2};
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: ${grey2}; 
 
`;

export const FormContainer = styled.div`
  background-color: ${white};
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(12, 12, 12, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;

`;

export const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 55px;
  text-align: center;
  color:${black};
 
`;

export const FormLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color:${black};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
  background-color: ${white};
  border: none;
  box-shadow: 0 5px 25px #c2c1c1;
  transition: border-color 0.3s;

  &:focus {
    border: 2px solid ${janyellow};
    outline: none;
  }
`;

export const SubmitButton = styled.input`
  background-color:${yellow} ;

  color: ${black};
  font-weight: bold;
  font-size: 16px;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 70%;
  transition: background-color 0.3s;
  margin-left: 60px;
  margin-top: 40px;

  &:hover {
    background-color: ${janyellow};
  }
`;