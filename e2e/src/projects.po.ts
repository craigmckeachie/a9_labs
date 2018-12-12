import {
  ElementArrayFinder,
  by,
  element,
  browser,
  ElementFinder
} from 'protractor';

export class ProjectsPage {
  projectNameHeaders: ElementArrayFinder = element.all(by.css('h5.strong'));
  editButton: ElementFinder = element(by.buttonText('Edit'));
  saveButton: ElementFinder = element(by.buttonText('Save'));
  projectForm: ElementFinder = element(by.tagName('form'));
  projectNameInput: ElementFinder = element(by.name('name'));
  firstProjectHeader: ElementFinder = this.projectNameHeaders.first();

  navigateTo() {
    return browser.get('/projects');
  }

  updateName(name: string) {
    const input = this.projectNameInput;
    input.clear().then(() => {
      input.sendKeys(name);
    });
  }
}
