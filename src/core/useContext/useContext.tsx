import React, { useState, createContext } from "react";
import { List } from "../../common/model/list.vm";
import ls from "../../common/local-storage.ts/localStorage";
import { DetailModel } from "../../common/model/detail.vm";

type ContextProviderProps = {
  children: React.ReactNode;
};

interface contextUse {
  podcast: List[];
  setPodcast: React.Dispatch<React.SetStateAction<List[]>>;
  detail: DetailModel;
  setDetail: React.Dispatch<React.SetStateAction<any>>;
}

export const UseContextGeneral = createContext({} as contextUse);

export const GeneralContextProvider = ({ children }: ContextProviderProps) => {
  const [podcast, setPodcast] = useState<List[]>(ls.get("podcast", []).value);
  const [detail, setDetail] = useState<DetailModel>(ls.get("detail", []).value);

  return (
    <UseContextGeneral.Provider
      value={{
        podcast,
        setPodcast,
        detail,
        setDetail,
      }}
    >
      {children}
    </UseContextGeneral.Provider>
  );
};

export default UseContextGeneral;
