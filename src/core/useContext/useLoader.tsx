import React, { useState, createContext } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface contextUse {
  isloader: boolean;
  setIsLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UseContextLoader = createContext({} as contextUse);

export const LoaderContextProvider = ({ children }: ContextProviderProps) => {
  const [isloader, setIsLoader] = useState<boolean>(false);

  return (
    <UseContextLoader.Provider
      value={{
        isloader,
        setIsLoader,
      }}
    >
      {children}
    </UseContextLoader.Provider>
  );
}

export default UseContextLoader;
