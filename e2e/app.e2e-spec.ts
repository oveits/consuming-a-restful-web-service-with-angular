import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('consuming-a-restful-web-service-with-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  const blogtitle = element(by.id('blogtitle'));
  const blogbody = element(by.id('blogbody'));

  it('should display blog title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Angular 4 Hello World Quickstart');
  });

});

describe('Blog', () => {

  beforeEach(() => {
    browser.get('/');
  });

  const blogtitle = element(by.id('blogtitle'));

  it('should display the blog title', () => {
    expect(element(by.css('h1')).getText()).toEqual('Angular 4 Hello World Quickstart');
    expect(blogtitle.getText()).toEqual('Angular 4 Hello World Quickstart');
  });

});
