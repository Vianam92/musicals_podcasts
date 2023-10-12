import React, { useState, createContext } from "react";
import ls from "../../common/local-storage.ts/localStorage";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface contextUse {
  timeStampList: number;
  setTimesTampList: React.Dispatch<React.SetStateAction<number>>;
  timeStampDetail: number;
  setTimesTampDetail: React.Dispatch<React.SetStateAction<number>>;
  isTime: boolean;
  setIsTime: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UseContextTime = createContext({} as contextUse);

export const TimeContextProvider = ({ children }: ContextProviderProps) => {
  const [timeStampList, setTimesTampList] = useState<number>(
    ls.get("podcast", 0).time
  );
  const [timeStampDetail, setTimesTampDetail] = useState<number>(
    ls.get("detail", 0).time
  );
  const [isTime, setIsTime] = useState<boolean>(false);
    
  return (
    <UseContextTime.Provider
      value={{
        timeStampList,
        setTimesTampList,
        timeStampDetail,
        setTimesTampDetail,
        isTime,
        setIsTime,
      }}
    >
      {children}
    </UseContextTime.Provider>
  );
}

export default UseContextTime;
