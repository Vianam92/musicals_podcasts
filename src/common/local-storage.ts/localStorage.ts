import { DetailData } from "../model/detail.vm";
import { List } from "../model/list.vm";

const get = (key: string, defaultData: List[] | DetailData[] | number) => {
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
