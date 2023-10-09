import React, { useState, createContext} from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
}

interface contextUse {
    isloader: boolean,
    setIsLoader: React.Dispatch<React.SetStateAction<boolean>>
}

export const UseContextGeneral = createContext({} as contextUse);

export function GeneralContextProvider({ children }: ContextProviderProps) {
  const [isloader, setIsLoader] = useState<boolean>(false);

  return (
    <UseContextGeneral.Provider
      value={{ isloader, setIsLoader}}
    >
      {children}
    </UseContextGeneral.Provider>
  );
}

export default UseContextGeneral;