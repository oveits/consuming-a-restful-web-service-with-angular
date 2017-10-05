import { AppPage } from './app.po';

describe('consuming-a-restful-web-service-with-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Angular 4 Hello World Quickstart');
  });
});
