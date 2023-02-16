import os from "os";
import {ItermPreferences} from "./iterm-preferences";
import App from "@mac-applications/core";

export class Iterm extends App<ItermPreferences> {
    constructor() {
        super(`${os.homedir()}/Library/Preferences/com.googlecode.iterm2.plist`);
    }
}
const iterm = new Iterm();

export {ItermPreferences}
export default iterm;
