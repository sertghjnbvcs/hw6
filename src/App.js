import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './features/cartSlice';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
    const products = useSelector(state => state.products.items);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="App">
            <Navbar />
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product">
                        img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price} руб.</p>
                        <button onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;