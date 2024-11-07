import React, { createContext, useState, useContext, ReactNode } from 'react';

interface OrderContextType {
  orderIds: string[]; // Store multiple order IDs
  addOrderId: (id: string) => void; // Append a new order ID
  progress: number;
  setProgress: (progress: number) => void;
  isComplete: boolean;
  setIsComplete: (isComplete: boolean) => void;
}

// Create context
const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orderIds, setOrderIds] = useState<string[]>([]); // Initialize as an empty array
  const [progress, setProgress] = useState<number>(100);
  const [isComplete, setIsComplete] = useState(false);

  // Function to add a new order ID
  const addOrderId = (id: string) => {
    setOrderIds((prevOrderIds) => [...prevOrderIds, id]);
  };

  return (
    <OrderContext.Provider value={{ orderIds, addOrderId, progress, setProgress, isComplete, setIsComplete }}>
      {children}
    </OrderContext.Provider>
  );
};

// Custom hook to use order context
export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
