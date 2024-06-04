const { expect } = require('@wdio/globals')
describe('Android Native Feature Tests', () => {
    it('Access an Activity directly', async () => {
        // access activity
        await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.alertDialogSamples")

        // pause 3s
        await driver.pause(3000)

        // assertion
        await expect($('//*[text="App/Alert Dialogs"]')).toExist()
    })
    it('Working with a date picker', async () => {
        // access the date picker
        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.DateWidgets1"
        )

        // get current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText()

        // click on change the date button
        await $('~change the date').click()

        // scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')

        // select the 10ht date
        await $('//*[@text="10"]').click()

        // click on ok button
        await $('//*[@resource-id=android:id/button1]').click()

        // verify the updated date
        await expect(date.getText()).not.toEqual(currentDate)
    })
});