import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  phoneNumber: string;
  username: string;
  setPhoneNumber: (phone: string) => void;
  setUsername: (username: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  return (
    <UserContext.Provider value={{ phoneNumber, username, setPhoneNumber, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
