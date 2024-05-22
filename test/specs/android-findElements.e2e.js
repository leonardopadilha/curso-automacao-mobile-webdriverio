const { expect } = require('@wdio/globals')

describe('Android Element', () => {
    it('Find element by accessibility id', async () => {
        const appOption = $('~App') //AccessbilityId
        const actionBar = $('android=new UiSelector().text("Action Bar")')
        await appOption.click()

        const menu = await actionBar.getText()
        expect(menu).toBeExisting()
        expect(menu).toEqual('Action Bar')
    })
    it('Find element by class name', async () => {
        const className = await $('android.widget.TextView')
        expect(await className.getText()).toEqual('API Demos')
    })
    it('Find elements by Xpath', async () => {
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()

        // find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click()

        // find by text
        await $('//android.widget.TextView[@text="Command two"]').click()

        // find by class - assertion
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two")
    })
})