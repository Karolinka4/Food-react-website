import styled from "styled-components";
import { COLOR } from '../../components/color';
const { black } = COLOR;

const mobileBreakpoint = '768px';

export const Box = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  position: relative;
`;

export const AddToCartButton = styled.div`
  background-color: #efa200;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 10px;
  border-radius: 20px;
  color: ${black};
  &:hover {
    background-color: #fdb743;
  }
`;

export const CategoryButton = styled.button`
  background-color: transparent;
  color: ${black};
  text-decoration: underline ${({ $isactive }) => ($isactive ? "#fdb743" : '${black}' )};
  font-size: 30px;
  border-radius: 50%;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 20px;
  position: relative;
  left: 39%;


  

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 18px;
    padding: 10px;
    left: 0;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const ItemCard = styled.div`
  background-color: #dcd9d9;
  border-radius: 10px;
  box-shadow: 0 15px 17px rgba(17, 17, 17, 0.1);
  text-align: center;
  max-width: 300px;
  padding: 19px;
  margin: 10px;

  @media (max-width: ${mobileBreakpoint}) {
    max-width: 100%;
    
  }
`;

export const NavigationContainer = styled.div`
  position: relative;
  margin-left: 48%;
  background-color: transparent;
  width: 12%;

  @media (max-width: ${mobileBreakpoint}) {
    margin-left: 0;
    width: auto;
  }
`;

export const NavigationButton = styled.button`
  padding: 4px 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({ disabled }) => disabled && 'opacity: 0.5; cursor: not-allowed;'}

  @media (max-width: ${mobileBreakpoint}) {
    padding: 4px;
  }
`;

export const ItemPrice = styled.p`
  font-size: 20px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 16px;
  }
`;

export const ItemImage = styled.img`
  border-radius: 8px;
  max-width: 100%;

  @media (max-width: ${mobileBreakpoint}) {
    max-width: 100%;
    height: auto;
  }
`;

export const ItemDescription = styled.p`
  color: #595757;
  font-size: 14px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 12px;
  }
`;

export const ItemName = styled.p`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 16px;
  }
`;

export const MobileOnly = styled.div`
  display: none;

  @media (max-width: ${mobileBreakpoint}) {
    display: block;
  }
`;

export const DesktopOnly = styled.div`
  display: block;

  @media (max-width: ${mobileBreakpoint}) {
    display: none;
  }
`;
