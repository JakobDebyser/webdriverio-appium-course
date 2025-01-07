import AddNoteScreen from "../../screenobjects/android/add-note.screen";

describe('Add Notes', () => {
    it('Skip tutorial', async() => {
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    });
    it('Add a note, save changes & verify note',async () => {
        await AddNoteScreen.addNoteTxt.click()
        await AddNoteScreen.textOption.click()
        await expect(AddNoteScreen.textEditing).toBeDisplayed()

        await AddNoteScreen.noteHeading.setValue('Fav Anime List')

        await AddNoteScreen.noteBody.setValue('Naruto\nOne Piece\nAOT')

        await AddNoteScreen.saveNote()
        //assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed()
        await expect(AddNoteScreen.viewNote).toHaveText('Naruto\nOne Piece\nAOT')
        
    });
});