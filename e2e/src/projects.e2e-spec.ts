import { ProjectsPage } from './projects.po';

describe('Projects', () => {
  let page: ProjectsPage;

  beforeEach(() => {
    page = new ProjectsPage();
  });

  it('should have projects', () => {
    page.navigateTo();
    expect(page.projectNameHeaders.count()).toEqual(99);
  });
});
