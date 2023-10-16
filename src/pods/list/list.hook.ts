import { useContext } from "react";
import UseContextGeneral from "../../core/useContext/useContext";
import UseContextLoader from "../../core/useContext/useLoader";
import UseContextTime from "../../core/useContext/useTime";
import { listRepository } from "./list.repository";
import { datefinally, hoursUtil } from "../../common/utils/utils";
import ls from "../../common/local-storage.ts/localStorage";

export const useList = () => {
  const { setPodcast } = useContext(UseContextGeneral);
  const { setIsLoader } = useContext(UseContextLoader);
  const { isTime, setIsTime, timeStampList, setTimesTampList } =
    useContext(UseContextTime);

  const loadList = async () => {
    try {
      const response = await listRepository();
      const timeService = hoursUtil();
      if (response || isTime) {
        setTimesTampList(timeService);
        setIsTime(datefinally(timeStampList));
        ls.set("podcast", {
          value: response,
          time: timeStampList ? timeStampList : timeService,
        });
        setPodcast(response);
        setIsLoader(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {loadList};
};
