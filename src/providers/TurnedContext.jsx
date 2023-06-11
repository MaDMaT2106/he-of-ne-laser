import { createContext, useState } from 'react';

const TurnedContext = createContext();

export const TurnedProvider = ({ children }) => {
  const [isTurned, setTurned] = useState(false);
  const [isStarted, setStarted] = useState(false);

  return (
    <TurnedContext.Provider
      value={{ isTurned, setTurned, isStarted, setStarted }}
    >
      {children}
    </TurnedContext.Provider>
  );
};

export default TurnedContext;
