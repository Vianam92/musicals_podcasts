import ls from "./localStorage";

describe("test local storage", () => {
    const data =[{
        id: "25458",
        artist: "The Joe",
        image: "",
        title:"The Joe music",
        summary: "Lorem ipsum"
    }]
    it("should set data", () => {
        const getData = ls.get("data", data);
        expect(getData).toBe(data)
       
    })
})