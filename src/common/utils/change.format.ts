export const convertDateFormat = (string: string) => {
    var info = string.split("-").reverse().join("/");
    return info;
  }