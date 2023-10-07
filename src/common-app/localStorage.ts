import { List } from "../model/list.vm";
import { datefinally } from "../common/utils";
import { DetailData } from '../model/detail.vm';
import lsd from "./localstorageDate";

//TODO
const get = (key: string, defaultData: List[] | DetailData[]) => {
  const data = localStorage.getItem(key);
  const timestamp: number = lsd.get("timestamp-list", 0);
  if (data === null || datefinally(timestamp)) {
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
