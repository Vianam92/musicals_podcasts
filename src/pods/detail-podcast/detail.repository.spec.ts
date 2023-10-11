import { detailRepository } from "./detail.repository";
import * as detailApiModule from "./detail.api"; // Import the entire module for mocking
import * as detailMapperModule from "./detail.mapper";

describe("List Repository", () => {
  beforeEach(() => {
    jest.spyOn(detailApiModule, "detailService").mockResolvedValue([
      {
        id: "25458",
        artwork: "",
        trackName: "the joe",
        artist: "the joe",
        date: "12-2-2023",
        url: "",
        description: "Lorem ipsum",
        idTrack: '25458',
      },
    ]);
    jest.spyOn(detailMapperModule, "default").mockReturnValue([
      {
        id: "25458",
        artwork: "",
        trackName: "the joe",
        artist: "the joe",
        date: "12-2-2023",
        url: "",
        description: "Lorem ipsum",
        idTrack: '25458',
      },
    ]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("ListRepository should call the API service and data mapping", async () => {
    const podcastId = "25458";
    const result = await detailRepository({podcastId});
    const detail = [
      {
        id: "25458",
        artwork: "",
        trackName: "the joe",
        artist: "the joe",
        date: "12-2-2023",
        url: "",
        description: "Lorem ipsum",
        idTrack: '25458',
      },
    ];

    expect(detailApiModule.detailService).toHaveBeenCalled();
    expect(detailMapperModule.default).toHaveBeenCalled();
    expect(result).toEqual(detail);
  });
});
