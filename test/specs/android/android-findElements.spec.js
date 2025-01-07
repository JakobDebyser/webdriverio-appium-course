import {$, $$, expect, driver} from '@wdio/globals'

describe("Android Elements Tests", () => {
  it("Find element by accessibility id", async () => {
    //find element accessibility id
    const appOption = $("~App");
    //click on element
    await appOption.click();
    //assertion
    const actionBar = $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Find element by class name", async () => {
    //find element by class name
    const className = $("android.widget.TextView");
    console.log(await className.getText());
    await expect(className).toHaveText("API Demos");
  });

  it("Find element by Xpath", async () => {
    // xpath - (//tagname[@attribute=value])
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    // find by resourceId
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();
    //find by text
    await $('//android.widget.TextView[@text="Command two"]').click();
    //find by class - assertion
    const textAssertion = $("//android.widget.TextView");
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });

  it("Find elements by UIautomator", async () => {
    await $('android=new UiSelector().textContains("Alert")').click();
  });
  it("Find multiple elements", async () => {
    const expectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];
    const actualList = [];
    const textList = $$("android.widget.TextView");
    for (const element of textList) {
      actualList.push(await element.getText());
    }
    await expect(actualList).toEqual(expectedList);
  });
  it.only("Find text input", async () => {
    await $("~Views").click();
    await $("~Auto Complete").click();
    await $("~1. Screen Top").click();

    const textField = $("//android.widget.AutoCompleteTextView")
    await textField.addValue('Belgium')
    await expect(textField).toHaveText("Belgium");
  });
});
