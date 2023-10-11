import React, { useState, createContext, useEffect, useContext } from "react";
import { List } from "../../common/model/list.vm";
import ls from "../../common/local-storage.ts/localStorage";
import { Data } from "../../common/model/detail.vm";
import { ListRepository } from "../../pods/list/list.repository";
import { datefinally, hoursUtil } from "../../common/utils/utils";
import UseContextLoader from "./useLoader";
import UseContextTime from "./useTime";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface contextUse {
  podcast: List[];
  setPodcast: React.Dispatch<React.SetStateAction<List[]>>;
  detail: Data[];
  episodes: Data[];
  setEpisodes: React.Dispatch<React.SetStateAction<Data[]>>;
  setDetail: React.Dispatch<React.SetStateAction<Data[]>>;
}

export const UseContextGeneral = createContext({} as contextUse);

export const GeneralContextProvider = ({ children }: ContextProviderProps) => {
  const [podcast, setPodcast] = useState<List[]>(ls.get("podcast", []));
  const [episodes, setEpisodes] = useState<Data[]>(ls.get("episodes", []));
  const [detail, setDetail] = useState<Data[]>(ls.get("detail", []));
  const {setIsLoader} = useContext(UseContextLoader);
  const {timeStamp, setTimesTamp,isTime, setIsTime} = useContext(UseContextTime)
  
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
    ls.set("timestamp-podcast", timeStamp);
  }, [isTime]);

  return (
    <UseContextGeneral.Provider
      value={{
        podcast,
        setPodcast,
        detail,
        setDetail,
        episodes,
        setEpisodes,
      }}
    >
      {children}
    </UseContextGeneral.Provider>
  );
}

export default UseContextGeneral;
