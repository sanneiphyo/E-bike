import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Rating {
  averageRating: number;
  numberOfReviews: number;
}

interface Item {
  id: string;
  name: string;
  desc: string;
  price: string;
  image: string;
  rating: Rating;
}

interface ItemContextType {
  selectedItem: Item | null;
  setSelectedItem: (item: Item) => void;
  cartItems: Item[];
  addToCart: (item: Item) => void;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export const ItemProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ItemContext.Provider value={{ selectedItem, setSelectedItem, cartItems, addToCart }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = (): ItemContextType => {
  const context = useContext(ItemContext);
  if (context === undefined) {
    throw new Error('useItem must be used within an ItemProvider');
  }
  return context;
};
