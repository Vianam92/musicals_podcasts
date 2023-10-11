import { listRepository } from "./list.repository";
import * as listApiModule from "./list.api"; // Import the entire module for mocking
import * as listMapperModule from "./list.mapper";

describe("List Repository", () => {
  beforeEach(() => {
    jest
      .spyOn(listApiModule, "getlistApiService")
      .mockResolvedValue({ feed: [] });
    jest.spyOn(listMapperModule, "default").mockReturnValue([
      {
        id: "2545",
        artist: "The Joe",
        image: "",
        title: "The Joe",
        summary: "Lorem ipsum",
      },
    ]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("ListRepository should call the API service and data mapping", async () => {
    const result = await listRepository();
    const podcast = [
      {
        id: "2545",
        artist: "The Joe",
        image: "",
        title: "The Joe",
        summary: "Lorem ipsum",
      },
    ]

    expect(listApiModule.getlistApiService).toHaveBeenCalled();
    expect(listMapperModule.default).toHaveBeenCalled();
    expect(result).toEqual(podcast);
  });
});
