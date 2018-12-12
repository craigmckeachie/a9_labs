import { HomePage } from './home.po';

describe('Home (default)', () => {
  const expectedHeader = 'Home';
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
    page.navigateTo();
  });

  it('should display header', () => {
    expect(page.getHeaderText()).toEqual(expectedHeader);
  });
});
