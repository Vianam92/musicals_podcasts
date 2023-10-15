import { renderHook, act } from "@testing-library/react";
import * as DetailRep from "./detail.repository";
import { useDetail } from "./detail.hook";

describe("useList", () => {
  it("should return podcastList", async () => {
    const podcastDetail: any = [
      {
        id: "1",
        artist: "The Joe",
        artwork: "",
        trackName:"",
        summary: "",
        idTrack: 1254,
        date: "15/2/2004",
      },
    ];

    const podcastId = '1'

    const podcastStub = jest
      .spyOn(DetailRep, "detailRepository")
      .mockResolvedValue(podcastDetail);

    const { result } = renderHook(() => useDetail({podcastId}));

    act(() => {
      result.current.loadDetail();
    });

    expect(podcastStub).toHaveBeenCalled();
  });
});
