import { GoogleCaptchExamplePage } from './app.po';

describe('google-captch-example App', function() {
  let page: GoogleCaptchExamplePage;

  beforeEach(() => {
    page = new GoogleCaptchExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
