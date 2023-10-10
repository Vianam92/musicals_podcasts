import React, { useState, createContext } from "react";
import { List } from "../../model/list.vm";
import ls from "../../common-app/localStorage";
import { Data } from "../../model/detail.vm";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface contextUse {
  isloader: boolean;
  setIsLoader: React.Dispatch<React.SetStateAction<boolean>>;
  podcast: List[];
  setPodcast: React.Dispatch<React.SetStateAction<List[]>>;
  detail: Data[];
  episodes: Data[];
  setEpisodes: React.Dispatch<React.SetStateAction<Data[]>>;
  setDetail: React.Dispatch<React.SetStateAction<Data[]>>;
  timeStamp: number;
  setTimesTamp: React.Dispatch<React.SetStateAction<number>>;
  isTime: boolean;
  setIsTime: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UseContextGeneral = createContext({} as contextUse);

export function GeneralContextProvider({ children }: ContextProviderProps) {
  const [isloader, setIsLoader] = useState<boolean>(false);
  const [podcast, setPodcast] = useState<List[]>(ls.get("podcast", []));
  const [episodes, setEpisodes] = useState<Data[]>([]);
  const [detail, setDetail] = useState<Data[]>(ls.get("detail", []));
  const [timeStamp, setTimesTamp] = useState<number>(
    ls.get("timestamp-list", 0)
  );
  const [isTime, setIsTime] = useState<boolean>(false);

  return (
    <UseContextGeneral.Provider
      value={{
        isloader,
        setIsLoader,
        podcast,
        setPodcast,
        detail, setDetail,
        timeStamp,
        setTimesTamp,
        isTime,
        setIsTime,
        episodes, setEpisodes
      }}
    >
      {children}
    </UseContextGeneral.Provider>
  );
}

export default UseContextGeneral;
