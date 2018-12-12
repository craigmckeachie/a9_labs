import { ElementArrayFinder, by, element, browser } from 'protractor';

export class ProjectsPage {
  projectNameHeaders: ElementArrayFinder = element.all(by.css('h5.strong'));
  navigateTo() {
    return browser.get('/projects');
  }
}
