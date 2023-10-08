import {datefinally, hoursUtil} from "../../common/utils";

describe("testing utils", () => {
    it("datefinally return false", () => {
        const timeStamp: number = hoursUtil();
        const result = datefinally(timeStamp);
        expect(result).toBe(false);
    })
    it("datefinally return true", () => {
        const timeStamp: number = 86400001;
        const result = datefinally(timeStamp);
        expect(result).toBe(true);
    })
})