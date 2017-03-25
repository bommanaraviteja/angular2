import { TestSharedServicePage } from './app.po';

describe('test-shared-service App', function() {
  let page: TestSharedServicePage;

  beforeEach(() => {
    page = new TestSharedServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
