import { convertDateFormat } from "./change.format";

describe("testing change format date", () => {
    it("convertDateFormat", () => {
        const date: string = "2023-05-15";
        const result = convertDateFormat(date);
        expect(result).toBe("15/05/2023");
    })
})