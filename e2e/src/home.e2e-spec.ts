import { browser, by, element } from 'protractor';

describe('Home (default)', () => {
  const expectedHeader = 'Home';

  beforeEach(() => {
    browser.get('');
  });

  it('should display header', () => {
    expect(element(by.css('h1')).getText())
    .toEqual(expectedHeader);
  });
});
