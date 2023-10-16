import { renderHook, act } from "@testing-library/react";
import { useList } from "./list.hook";
import * as listRep from "./list.repository";

describe("useList", () => {
  it("should return podcastList", async () => {
    const podcastData: any = [
      {
        id: "1",
        artist: "The Joe",
        summary: "",
        title: "The joe",
        image: "",
      },
    ];

    const podcastStub = jest
      .spyOn(listRep, "listRepository")
      .mockResolvedValue(podcastData);

    const { result } = renderHook(() => useList());

    act(() => {
      result.current.loadList();
    });

    expect(podcastStub).toHaveBeenCalled();
  });
});
