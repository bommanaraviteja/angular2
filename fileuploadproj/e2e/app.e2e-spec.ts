import { FileuploadprojPage } from './app.po';

describe('fileuploadproj App', function() {
  let page: FileuploadprojPage;

  beforeEach(() => {
    page = new FileuploadprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
