import { describe, expect, it } from "@jest/globals";
import * as util from "../src/utils/utils"
describe('GlobalTest', () => {
    it('globals', () => {
        expect(util.__fileName).toBe("utils.js");
        console.log(process.argv.indexOf("--user")+1)
    });
});


