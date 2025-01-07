import DeleteNoteScreen from "../../screenobjects/android/delete-note.screen";

describe('Delete notes', () => {
    before(async() => {
        await DeleteNoteScreen.skipTutorial()
        await DeleteNoteScreen.addAndSaveNote("Fav Anime List", "Naruto\nOne Piece\nAOT")
        await driver.back()
    });
    

    it('Delete a note and check the note in trash can', async() => {
        
        const note = await DeleteNoteScreen.noteTitle.getText()
        await DeleteNoteScreen.noteTitle.click()
        await DeleteNoteScreen.moreBtn.click()
        await DeleteNoteScreen.textDelete.click()
        await driver.acceptAlert()

        await DeleteNoteScreen.navIcon.click()
        await DeleteNoteScreen.textTrashCan.click()

        const trashCanItem = await DeleteNoteScreen.trashCanItem

        await expect(trashCanItem).toHaveText(note)
    });
});