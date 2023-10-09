
import { ListService } from "./list.api";
import { ListRepository } from "./list.repository";

jest.mock("./list.api", () => {
  const ListService = jest.fn(() => ({
    getlistApiService: jest.fn().mockReturnValue([
      {
        id: "1",
        artist: "The Joe",
        image: "",
        title: "The Joe",
        summary: "The Joe artist",
      },
    ]),
  }));
  return { ListService };
});

describe("List Repository", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should return one item with values when passing one item with values", async () => {
    //const response = new ListRepository();
    //const listRepositoryResponse = await response.execute();

    expect(ListService).toHaveBeenCalled();
  });
});
