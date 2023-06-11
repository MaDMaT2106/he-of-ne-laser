import { createContext, useState } from 'react';

const DistanceContext = createContext();

export const DistanceProvider = ({ children }) => {
  const [distance, setDistance] = useState(0);

  return (
    <DistanceContext.Provider value={{ distance, setDistance }}>
      {children}
    </DistanceContext.Provider>
  );
};

export default DistanceContext;
