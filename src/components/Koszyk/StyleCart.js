import styled from 'styled-components';
import { COLOR } from '../color';
const { black, white } = COLOR;

export const CartContainer = styled.div`
  position: fixed;
  top: 19%;
  
  right: 10px;
  background-color: ${white};
  border: none ;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
`;

export const CartButton = styled.button`
  background-color: #55b21d;
  color: ${white};
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${black};
`;

export const CartItemInfo = styled.div`
  flex: 1;
`;

export const CartItemName = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export const CartItemPrice = styled.p`
  font-size: 12px;
  color: ${black};
`;

export const CartItemCount = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    color: ${black};
    font-size: 12px;
    cursor: pointer;
  }
`;

export const CartTotal = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;

