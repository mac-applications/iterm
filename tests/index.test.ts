
// const arr: string[] = ["cat", "dog", "bat"];

import {Iterm} from "../src";

describe("Test The Method Of Iterm", () => {
    test("getPreferencesSync", () => {
        let iterm = new Iterm();
        try {
            let preferences = iterm.getPreferencesSync();
            expect(preferences.DimInactiveSplitPanes).toBeTruthy();
        } catch (e: any) {
            expect(e.message).toContain('no such file or directory');
        }
    });
    test("getPreferences", async () => {
        let iterm = new Iterm();
        try {
            let preferences = await iterm.getPreferences();
            expect(preferences.DimInactiveSplitPanes).toBeTruthy();
        } catch (e: any) {
            expect(e.message).toContain('no such file or directory');
        }
    });
});