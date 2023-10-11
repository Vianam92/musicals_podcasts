import React, { useState, createContext } from "react";
import ls from "../../common/local-storage.ts/localStorage";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface contextUse {
  timeStamp: number;
  setTimesTamp: React.Dispatch<React.SetStateAction<number>>;
  isTime: boolean;
  setIsTime: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UseContextTime = createContext({} as contextUse);

export const TimeContextProvider = ({ children }: ContextProviderProps) => {
  const [timeStamp, setTimesTamp] = useState<number>(
    ls.get("timestamp-list", 0)
  );
  const [isTime, setIsTime] = useState<boolean>(false);
    
  return (
    <UseContextTime.Provider
      value={{
        timeStamp,
        setTimesTamp,
        isTime,
        setIsTime,
      }}
    >
      {children}
    </UseContextTime.Provider>
  );
}

export default UseContextTime;
