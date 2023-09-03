import React, { useState, useEffect } from 'react';
import categoriesData from '../../components/data';
import Heder from '../../components/heder/Heder';
import Login from "../../components/login/Login";
import Footer from '../../components/footer/Footer';
import Cart from '../../components/Koszyk/Cart';
import { AiFillRightCircle, AiFillLeftCircle } from 'react-icons/ai';
import {
    Container,
    CategoryButton,
    ItemsContainer,
    ItemCard,
    NavigationContainer,
    NavigationButton,
    AddToCartButton,
    ItemPrice,
    ItemImage,
    ItemDescription,
    ItemName,
    Box
} from './StyleHome';


const Home = () => {

    const[isLogModalVisable, setModalVisable]=useState(false);

    const toggleLoginModal=()=> {
        setModalVisable(!isLogModalVisable);
    };


    const [activeCategory, setActiveCategory] = useState(null);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        //  kategorię "PIZZA"
        const pizzaCategory = categoriesData.find(category => category.title === 'PIZZA');

        if (pizzaCategory) {
            setActiveCategory(pizzaCategory.id);
            setCurrentItemIndex(0);
        }
    }, []);

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        setCurrentItemIndex(0); // Reset item index when category changes
    };

    const selectedCategory = categoriesData.find((category) => category.id === activeCategory);
    const itemsInSelectedCategory = selectedCategory ? selectedCategory.items : [];

    const handleNextItem = () => {
        if (currentItemIndex < itemsInSelectedCategory.length - 1) {
            setCurrentItemIndex(currentItemIndex + 1);
        }
    };

    const handlePreviousItem = () => {
        if (currentItemIndex > 0) {
            setCurrentItemIndex(currentItemIndex - 1);
        }
    };

    const addToCart = (item) => {
        const existingItem = cartItems.find(
            (cartItem) => cartItem.itemId === item.id && cartItem.categoryId === activeCategory
        );

        if (existingItem) {
            const updatedCartItems = cartItems.map((cartItem) =>
                cartItem.itemId === item.id && cartItem.categoryId === activeCategory
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
            setCartItems(updatedCartItems);
        } else {
            setCartItems([
                ...cartItems,
                { ...item, quantity: 1, itemId: item.id, categoryId: activeCategory }
            ]);
        }
    };


    const removeFromCart = (itemId, categoryId) => {
        const updatedCartItems = cartItems.filter((cartItem) => (
            cartItem.itemId !== itemId || cartItem.categoryId !== categoryId
        ));
        setCartItems(updatedCartItems);
    };


    return (<Box>
            <Heder onLoginClick={toggleLoginModal}/>
            {isLogModalVisable && <Login onClose={toggleLoginModal}/> }

            <Container>
                {categoriesData.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isactive={category.id === activeCategory}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        {category.title}
                    </CategoryButton>
                ))}
                {selectedCategory && (
                    <>
                        <ItemsContainer>
                            {itemsInSelectedCategory
                                .slice(currentItemIndex, currentItemIndex + 5)
                                .map((item) => (
                                    <ItemCard key={item.id}>
                                        <ItemImage src={item.image} alt={item.name} />
                                        <ItemName>{item.name}</ItemName>
                                        <ItemDescription>{item.description}</ItemDescription>
                                        <ItemPrice>{item.price}</ItemPrice>
                                        <AddToCartButton onClick={() => addToCart(item)}>Dodaj do koszyka</AddToCartButton>
                                    </ItemCard>
                                ))}
                        </ItemsContainer>
                        <NavigationContainer>
                            <NavigationButton
                                onClick={handlePreviousItem}
                                disabled={currentItemIndex === 0}
                            >
                                <AiFillLeftCircle style={{ fontSize: '40px' }} />
                            </NavigationButton>
                            <NavigationButton
                                onClick={handleNextItem}
                                disabled={currentItemIndex >= itemsInSelectedCategory.length - 5}
                            >
                                <AiFillRightCircle style={{ fontSize: '40px' }} />
                            </NavigationButton>
                        </NavigationContainer>
                    </>
                )}
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </Container>
            <Footer/>
        </Box>
    );
};

export default Home;
