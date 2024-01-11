import { describe, expect, it } from "@jest/globals";

describe('GlobalTest', () => {
    it('globals', () => {
        expect("hello world".length).toBe(11);
    });
});


