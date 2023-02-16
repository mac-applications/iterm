
// const arr: string[] = ["cat", "dog", "bat"];

import iterm from "../src";

describe("Test The Method Of Iterm", () => {
    test("getPreferencesSync", () => {
        try {
            let preferences = iterm.getPreferencesSync();
            expect(preferences.DimInactiveSplitPanes).toBeTruthy();
        } catch (e: any) {
            expect(e.message).toContain('no such file or directory');
        }
    });
    test("getPreferences", async () => {
        try {
            let preferences = await iterm.getPreferences();
            expect(preferences.DimInactiveSplitPanes).toBeTruthy();
        } catch (e: any) {
            expect(e.message).toContain('no such file or directory');
        }
    });
});