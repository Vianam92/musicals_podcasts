import React, { useState, createContext} from 'react';

type ContextProviderProps = {
    children: React.ReactNode;
}

interface contextLoader {
    isloader: boolean,
    setIsLoader: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoaderContext = createContext({} as contextLoader);

export function LoaderContextProvider({ children }: ContextProviderProps) {
  const [isloader, setIsLoader] = useState<boolean>(false);

  return (
    <LoaderContext.Provider
      value={{ isloader, setIsLoader}}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export default LoaderContextProvider;