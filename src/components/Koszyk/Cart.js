import React, { useState } from 'react';
import {
    CartContainer,
    CartButton,
    CartItem,
    CartItemInfo,
    CartItemName,
    CartItemPrice,
    CartItemCount,
    CartTotal
} from './StyleCart';

const Cart = ({ cartItems, removeFromCart }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleCart = () => {
        setIsOpen(!isOpen);
    };

    const getTotalPrice = () => {
        const totalPrice = cartItems.reduce(
            (total, item) => total + parseFloat(item.price) * item.quantity,
            0
        );

        return totalPrice.toFixed(2); 
    };


    return (
        <CartContainer isOpen={isOpen}>
            <CartButton onClick={toggleCart}>
                Koszyk ({cartItems.length})
            </CartButton>
            {isOpen && (
                <>
                    {cartItems.map((item) => (
                        <CartItem key={`${item.itemId}-${item.categoryId}`}>
                            <CartItemInfo>
                                <CartItemName>{item.name}</CartItemName>
                                <CartItemPrice>Cena: {item.price} zł</CartItemPrice>
                            </CartItemInfo>
                            <CartItemCount>
                                Ilość: {item.quantity}
                                <button onClick={() => removeFromCart(item.itemId, item.categoryId)}>Usuń</button>
                            </CartItemCount>
                        </CartItem>
                    ))}

                    <CartTotal>Suma: {getTotalPrice()} zł</CartTotal>
                </>
            )}
        </CartContainer>
    );
};

export default Cart;
