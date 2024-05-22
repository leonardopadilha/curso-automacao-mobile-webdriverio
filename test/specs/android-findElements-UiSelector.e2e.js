const { expect } = require('@wdio/globals')

describe('Android Element UiAutomator', () => {
    it('Find element by UiAutomator', async () => {
        const menuOption = await $('android=new UiSelector().className("android.widget.TextView").text("Text")')
        await menuOption.click()

        const assertOption = $('android=new UiSelector().className("android.widget.TextView").textContains("LogText")')
        expect(await assertOption.getText()).toEqual('LogTextBox')
    })
})