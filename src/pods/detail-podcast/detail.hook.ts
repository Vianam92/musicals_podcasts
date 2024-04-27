import { useContext } from "react";
import { newDataFilter } from "../../common/helpers/filter.helper";
import { datefinally, hoursUtil } from "../../common/utils/utils";
import { detailRepository } from "./detail.repository";
import UseContextGeneral from "../../core/useContext/useContext";
import UseContextTime from "../../core/useContext/useTime";
import ls from "../../common/local-storage.ts/localStorage";
import { IdRequest } from "../../common/model/detail.vm";
import UseContextLoader from "../../core/useContext/useLoader";

export const useDetail = ({ podcastId }: IdRequest) => {
  const { podcast, setDetail } = useContext(UseContextGeneral);
  const { timeStampDetail, setTimesTampDetail, isTime, setIsTime } =
    useContext(UseContextTime);
  const { setIsLoader } = useContext(UseContextLoader);

  const loadDetail = async () => {
    try {
      const response = await detailRepository({ podcastId });
      const timeService = hoursUtil();
      if (response || isTime) {
        setTimesTampDetail(hoursUtil());
        setIsTime(datefinally(timeStampDetail));
        setDetail({
          detail: newDataFilter(podcast, response).summary,
          episodes: newDataFilter(podcast, response).episodes,
        });
        ls.set("detail", {
          value: {
            detail: newDataFilter(podcast, response).summary,
            episodes: newDataFilter(podcast, response).episodes,
          },
          time: timeStampDetail ? timeStampDetail : timeService,
        });
        setIsLoader(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { loadDetail };
};
