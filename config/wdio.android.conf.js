import { config } from "./wdio.conf.js";
import path from "path";
config.port = 4723;
config.specs = ["../test/specs/android/add-note*.js"];
config.capabilities = [
  {
    platformName: "Android",
    'appium:platformVersion': "15.0",
    'appium:deviceName': "Google Pixel 9 Pro XL",
    'appium:app': path.join(process.cwd(), "./app/android/ColorNote Notepad.apk"),
    'appium:automationName': "UiAutomator2",
    "appium:autoGrantPermissions": true,
  },
];
config.services= ['appium'];
export { config };
