describe('Web browser Access', () => {
    before(async() => {
        
    });
    it('Access external link and verify content in the browser',async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
        await $('//*[@text="Like us on Facebook"]').click()
    });
});