import { TestRestCallPage } from './app.po';

describe('test-rest-call App', function() {
  let page: TestRestCallPage;

  beforeEach(() => {
    page = new TestRestCallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
