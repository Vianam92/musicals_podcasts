import React, { useState, createContext, useEffect } from "react";
import { List } from "../../common/model/list.vm";
import ls from "../../common/local-storage.ts/localStorage";
import { Data } from "../../common/model/detail.vm";
import { ListRepository } from "../../pods/list/list.repository";
import { datefinally, hoursUtil } from "../../common/utils/utils";

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

export const GeneralContextProvider = ({ children }: ContextProviderProps) => {
  const [isloader, setIsLoader] = useState<boolean>(false);
  const [podcast, setPodcast] = useState<List[]>(ls.get("podcast", []));
  const [episodes, setEpisodes] = useState<Data[]>([]);
  const [detail, setDetail] = useState<Data[]>(ls.get("detail", []));
  const [timeStamp, setTimesTamp] = useState<number>(
    ls.get("timestamp-list", 0)
  );
  const [isTime, setIsTime] = useState<boolean>(false);

  useEffect(() => {
    const repository = new ListRepository();
    setIsLoader(true);
    repository.execute().then((data: List[]) => {
      setPodcast(data);
      setTimesTamp(hoursUtil());
      setIsTime(datefinally(timeStamp));
      setIsLoader(false);
    });
  }, []);

  useEffect(() => {
    ls.set("podcast", podcast);
    ls.set("timestamp-list", timeStamp);
  }, [isTime]);

  return (
    <UseContextGeneral.Provider
      value={{
        isloader,
        setIsLoader,
        podcast,
        setPodcast,
        detail,
        setDetail,
        timeStamp,
        setTimesTamp,
        isTime,
        setIsTime,
        episodes,
        setEpisodes,
      }}
    >
      {children}
    </UseContextGeneral.Provider>
  );
}

export default UseContextGeneral;
