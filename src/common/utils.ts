export const datefinally = (timestamp: number) => {
    const hours: number = 86400 * 1000;
    //TODO 
    const day: any = Date.now;
    const timespend = day - timestamp;
    return timespend > hours;
}

export const hoursUtil = (): number => {
   return new Date().getTime()
}