import React from 'react';
import { useSelector } from 'react-redux';

export const Navbar = () => {
    const itemsCount = useSelector(state => {
        return state.cart.items.reduce((count, item) => {
            return count + item.quantity;
        }, 0);
    });

    return (
        <nav className="navbar">
            <h1>Магазин</h1>
            <div className="cart">
                <p>Корзина ({itemsCount})</p>
            </div>
        </nav>
    );
};