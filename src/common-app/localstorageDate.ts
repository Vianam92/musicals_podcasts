const get = (key: string, date: number) => {
    const data = localStorage.getItem(key);
    if (data === null) {
      return date;
    } else {
      return JSON.parse(data);
    }
  };
  
  const set = (key: string, value: number) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  const objToExport = {
    get: get,
    set: set,
  };
  
  export default objToExport;