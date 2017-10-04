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

  const blog_title = element(by.id('blog_title'));
  const blog_content = element(by.id('blog_content'));

  it('should display the blog title as header 1 and id="blog_title"', () => {
    expect(element(by.css('h1')).getText()).toEqual('Angular 4 Hello World Quickstart');
    expect(blog_title.getText()).toEqual('Angular 4 Hello World Quickstart');
  });

  it('should display the blog content', () => {
    expect(blog_content.getText()).toEqual('In this hello world style tutorial, we will follow a step by step guide to a working Angular 4 application.');
  });

});
