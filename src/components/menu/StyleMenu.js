import styled from "styled-components";
import { COLOR } from '../color';
const { white,black} = COLOR;
export const Container = styled.div`
  
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  position:relative;
  
  
`;
export const AddToCartButton = styled.div`
  background-color: #efa200;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px;
  border-radius: 20px;
  color: ${black};
  &:hover {
    background-color: #fdb743;
  }

`;
export const CategoryButton = styled.button`

  background-color: ${({isActive}) => (isActive ? 'transparent' : 'transparent')};
  color: ${black};
  font-size: 30px;
  border-radius: 50%;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 20px;
  position: relative;
  left: 25%;

  &:hover {
    color: #f3c806;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
   width: 100%;
`;

export const ItemCard = styled.div`
  background-color: #dcd9d9;
  border-radius: 10px;
  box-shadow: 0 15px 17px rgba(17, 17, 17, 0.1);
  text-align: center;
  max-width: 300px;
  padding: 20px;
  
 
`;

export const NavigationContainer = styled.div`
  position: relative;
  margin-left: 66%;
  background-color: transparent;
  width: 12%;
 
`;

export const NavigationButton = styled.button`
  padding: 4px 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ${({ disabled }) => disabled && 'opacity: 0.5; cursor: not-allowed;'}
`;
export const ItemPrice = styled.p`
    font-size: 20px;
    
`;

export const ItemImage = styled.img`
  
  border-radius: 8px;
 
`;

export const ItemDescription = styled.p`
  color: #595757;
  font-size: 14px;
 
`;

export const ItemName = styled.p`
    font-size: 18px;
    font-weight: bold;
    
`;