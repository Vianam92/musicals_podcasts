import { List } from "../model/list.vm";
import { Data } from '../model/detail.vm';

//TODO arreglar type

interface Props {
  value: List[] | Data[];
  time: number;
  episodes?: Data[]
}

const get = (key: string, defaultData: List[] | Data[] | number) => {
  const data = localStorage.getItem(key);
  if (data === null) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

const set = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const objToExport = {
  get: get,
  set: set,
};

export default objToExport;
