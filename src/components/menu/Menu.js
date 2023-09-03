import React, { useState, useEffect } from 'react';
import categoriesData from '../data';
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
    ItemName
} from './StyleMenu';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    useEffect(() => {
        // kategorię "PIZZA"
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

    return (
        <Container>

            {categoriesData.map((category) => (
                <CategoryButton
                    key={category.id}
                    isActive={category.id === activeCategory}
                    onClick={() => handleCategoryClick(category.id)}
                >
                    {category.title}
                </CategoryButton>
            ))}
            {selectedCategory && (
                <>
                    <ItemsContainer>
                        {itemsInSelectedCategory
                            .slice(currentItemIndex, currentItemIndex + 4)
                            .map((item) => (
                                <ItemCard key={item.id}>
                                    <ItemImage src={item.image} alt={item.name} />
                                    <ItemName>{item.name}</ItemName>
                                    <ItemDescription>{item.description}</ItemDescription>
                                    <ItemPrice>{item.price}</ItemPrice>
                                    <AddToCartButton>Dodaj do koszyka</AddToCartButton>
                                </ItemCard>
                            ))}
                    </ItemsContainer>
                    <NavigationContainer>
                        <NavigationButton
                            onClick={handlePreviousItem}
                            disabled={currentItemIndex === 0}
                        >
                            <AiFillLeftCircle style={{ fontSize: '40px' }}/>
                        </NavigationButton>
                        <NavigationButton
                            onClick={handleNextItem}
                            disabled={currentItemIndex >= itemsInSelectedCategory.length - 5}
                        >
                            <AiFillRightCircle style={{ fontSize: '40px' }}/>
                        </NavigationButton>
                    </NavigationContainer>
                </>
            )}
        </Container>
    );
};

export default Menu;
