// import { createContext, useContext, useState } from "react";

// // 1. Create the context
// const CartContext = createContext();

// // 2. Create a provider component
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (item) => {
//     setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // 3. Custom hook to use cart
// export const useCart = () => {
//   return useContext(CartContext);
// };



import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useState([]);

  // Add to cart with quantity
  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If item already exists, increase quantity
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If not, add new item with quantity 1
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove from cart (decrease quantity or delete)
  const removeFromCart = (item) => {
    setCartItems((prev) =>
      prev
        .map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0) // remove if quantity 0
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
