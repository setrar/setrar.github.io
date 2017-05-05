import { GhPagesPage } from './app.po';

describe('gh-pages App', () => {
  let page: GhPagesPage;

  beforeEach(() => {
    page = new GhPagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
