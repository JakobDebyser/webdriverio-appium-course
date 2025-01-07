import { config } from "./wdio.conf.js";
import 'dotenv/config';
//
// ===================
// Browserstack Config
// ===================
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
//
// ===================
// Specs
// ===================
config.specs = ["../test/specs/android/add-note*.js"];
//
// ===================
// Capabilities
// ===================
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "15.0",
    "appium:deviceName": "Google Pixel 9 Pro XL",
    "appium:app": "bs://c93d4b9dcfec58b528067aeea678337f562e776d",
    "appium:automationName": "UiAutomator2",
    "appium:autoGrantPermissions": true,
  },
];
//
// ===================
// Services
// ===================
config.services = ["browserstack"];

export { config };
