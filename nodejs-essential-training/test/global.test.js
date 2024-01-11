import { describe, expect, it } from "@jest/globals";
import { __fileName } from "../src/utils/utils"
describe('GlobalTest', () => {
    it('globals', () => {
        expect(__fileName).toBe("utils.js");
    });
});


