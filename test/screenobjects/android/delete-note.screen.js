import AddNoteScreen from "./add-note.screen";
class DeleteNoteScreen {
  async skipTutorial() {
    await AddNoteScreen.skipBtn.click();
    await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
  }
  async addAndSaveNote(title, body) {
    await AddNoteScreen.addNoteTxt.click();
    await AddNoteScreen.textOption.click();
    await expect(AddNoteScreen.textEditing).toBeDisplayed();

    await AddNoteScreen.noteHeading.setValue(title);

    await AddNoteScreen.noteBody.setValue(body);

    await AddNoteScreen.saveNote();
    //assertion
    await expect(AddNoteScreen.editBtn).toBeDisplayed();
    await expect(AddNoteScreen.viewNote).toHaveText(body);
  }

  get noteTitle(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
  }
  get moreBtn(){
    return $('~More')
  }
  get textDelete(){
    return $('//*[@text="Delete"]')
  }
  get navIcon(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
  }
  get textTrashCan(){
    return $('//*[@text="Trash Can"]')
  }
  get trashCanItem(){
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
  }
}
export default new DeleteNoteScreen();
