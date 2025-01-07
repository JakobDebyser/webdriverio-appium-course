describe("Android Native Feature tests", () => {
  it("Access an Activity directly", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      ".app.AlertDialogSamples"
    );
    await driver.pause(3000);
    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });
  it("Working with Dialog boxes", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      ".app.AlertDialogSamples"
    );
    await $("~OK Cancel dialog with a message").click();

    //accept alert
    //await driver.acceptAlert();

    //dismiss alert
    //await driver.dismissAlert()

    //click on OK button
    await $('//*[@resource-id="android:id/button1"]').click();
    //get alert text
    console.log("ALERT TEXT -->", await driver.getAlertText());
    // assertion - alert box is no longer visible
    await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
  });
  it("Vertical scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();
    // scroll to the end(not stable if element moved)
    //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

    // scrollTextIntoView
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();

    //await $('~Secure Surfaces').click()
    await expect($("~Secure Dialog")).toExist();
  });
  it("Horizontal scrolling", async () => {
    await driver.startActivity("io.appium.android.apis", ".view.Gallery1");
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    );
    await driver.pause(3000);
  });
  it.only("Scrolling exercise", async () => {
    //access the date picker
    await driver.startActivity("io.appium.android.apis", ".view.DateWidgets1");

    //get current date
    const date = await $(
      '//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'
    );
    const currentDate = await date.getText();

    //click on change date button
    await $("~change the date").click();

    //scroll right to next month
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    );

    // select 10th date
    await $('//*[@text="10"]').click();

    // click OK button
    await $('//*[@resource-id="android:id/button1"]').click();

    // verify the updated date
    await expect(await date.getText()).not.toEqual(currentDate);
  });
});
