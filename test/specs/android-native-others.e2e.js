//const { expect } = require('@wdio/globals')

describe('Android Native Feature Tests', () => {
    it('Working with Dialog Boxes - Accept Alert', async () => {
        const appOption = await $('//*[@text="App"]').click()
        const alertDialogs = await $('android=new UiSelector().text("Alert Dialogs")').click()
        const dialog = await $('android=new UiSelector().text("OK CANCEL DIALOG WITH A MESSAGE")').click()
        const popUp = await $('//*[@resource-id="android:id/alertTitle"]')

        await expect(popUp).toExist()
        await driver.acceptAlert()
        await expect(popUp).not.toExist()

    })

    it('Working with Dialog Boxes - Dismiss Alert', async () => {
        const appOption = await $('//*[@text="App"]').click()
        const alertDialogs = await $('android=new UiSelector().text("Alert Dialogs")').click()
        const dialog = await $('android=new UiSelector().text("OK CANCEL DIALOG WITH A MESSAGE")').click()
        const popUp = await $('//*[@resource-id="android:id/alertTitle"]')

        await expect(popUp).toExist()
        await driver.dismissAlert()
        await expect(popUp).not.toExist()

    })

    it('Working with Dialog Boxes - Click on the OK button', async () => {
        const appOption = await $('//*[@text="App"]').click()
        const alertDialogs = await $('android=new UiSelector().text("Alert Dialogs")').click()
        const dialog = await $('android=new UiSelector().text("OK CANCEL DIALOG WITH A MESSAGE")').click()
        const popUp = await $('//*[@resource-id="android:id/alertTitle"]')

        console.log('ALERT TEXT ----> ', await driver.getAlertText())

        await expect(popUp).toExist()
        await $('//*[@resource-id="android:id/button1"]').click()
        await expect(popUp).not.toExist()
    })
    it('Vertical Scrolling', async () => {
        await $('~App').click()
        await $('~Activity').click()

        // scroll to the end (not stable if element gets moved)
        //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

        // scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()

        //await $('~Secure Surfaces').click()

        // assertion
        await expect($('~Secure Dialog')).toExist()
    })
    it('orizontal Scrolling', async () => {
        // NFC -> Views -> Gallery -> Photos

        await driver.startActivity(
            "io.appium.android.apis",
            "io.appium.android.apis.view.Gallery1"
        )

        // Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')

        await driver.pause(3000)
    })
});