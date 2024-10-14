import React, { createContext, useState, useContext, ReactNode } from 'react';

interface OrderContextType {
  orderId: string | null;
  setOrderId: (id: string | null) => void;
  progress: number;
  setProgress: (progress: number) => void;
}

// Create context
const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orderId, setOrderId] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(100);

  return (
    <OrderContext.Provider value={{ orderId, setOrderId, progress, setProgress }}>
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
