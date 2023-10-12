import React, { useState, createContext, useEffect, useContext } from "react";
import { List } from "../../common/model/list.vm";
import ls from "../../common/local-storage.ts/localStorage";
import { Data } from "../../common/model/detail.vm";
import { listRepository } from "../../pods/list/list.repository";
import { datefinally, hoursUtil } from "../../common/utils/utils";
import UseContextLoader from "./useLoader";
import UseContextTime from "./useTime";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface Props {
  detail: Data[];
  episodes: Data[];
}

interface contextUse {
  podcast: List[];
  setPodcast: React.Dispatch<React.SetStateAction<List[]>>;
  detail: any;
  setDetail: React.Dispatch<React.SetStateAction<any>>;
}

export const UseContextGeneral = createContext({} as contextUse);

export const GeneralContextProvider = ({ children }: ContextProviderProps) => {
  const [podcast, setPodcast] = useState<List[]>(ls.get("podcast", []).value);
  const [detail, setDetail] = useState<any>(ls.get("detail", []).value);
  const { setIsLoader } = useContext(UseContextLoader);
  const { timeStampList, setTimesTampList, isTime, setIsTime } =
    useContext(UseContextTime);

  useEffect(() => {
    setIsLoader(true);
    listRepository().then((data: List[]) => {
      if (data || isTime) {
        ls.set("podcast", { value: data, time: hoursUtil() });
        setPodcast(data);
        setTimesTampList(hoursUtil());
        setIsTime(datefinally(timeStampList));
        setIsLoader(false);
      }
    });
  }, []);

  return (
    <UseContextGeneral.Provider
      value={{
        podcast,
        setPodcast,
        detail,
        setDetail
      }}
    >
      {children}
    </UseContextGeneral.Provider>
  );
};

export default UseContextGeneral;
