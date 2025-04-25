import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext'; 

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCart = async () => {
      if (isAuthenticated) {
        setLoading(true);
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('https://backend-final-g1-955g.onrender.com/api/carts/get', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setCartItems(response.data.cart.products);
        } catch (error) {
          console.error("Failed to fetch cart data", error);
          setError('Failed to fetch cart data.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchCart();
  }, [isAuthenticated]); 

  const addProductToCart = async (product) => {
    if (!isAuthenticated) return;

    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'https://backend-final-g1-955g.onrender.com/api/carts/product/set',
        product,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Optimistically update cart items
      setCartItems(prevItems => [...prevItems, product]);
      // Fetch updated cart data after adding a product
      const response = await axios.get('https://backend-final-g1-955g.onrender.com/api/carts/get', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCartItems(response.data.cart.products);
    } catch (error) {
      console.error("Failed to add product to cart", error);
      setError('Failed to add product to cart.');
    } finally {
      setLoading(false);
    }
  };

  const removeCartItem = async (id) => {
    if (!isAuthenticated) return;

    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await axios.delete(
        `https://backend-final-g1-955g.onrender.com/api/carts/product/delete/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Optimistically update cart items
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    } catch (error) {
      console.error("Failed to remove cart item", error);
      setError('Failed to remove cart item.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addProductToCart, removeCartItem, loading, error }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
