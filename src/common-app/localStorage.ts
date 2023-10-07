import { List } from "../model/list.vm";
import lsd from "./localstorageDate";
import { datefinally } from "../common/utils";

const get = (key: string, defaultData: List[]) => {
  const data = localStorage.getItem(key);
  const getTime = lsd.get("timestamp", 0);
  if (data === null || datefinally(getTime)) {
    return defaultData;
  } else {
    return JSON.parse(data);
  }
};

const set = (key: string, value: List[]) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const objToExport = {
  get: get,
  set: set,
};

export default objToExport;
