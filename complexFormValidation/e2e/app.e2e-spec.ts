import { ComplexFormValidationPage } from './app.po';

describe('complex-form-validation App', function() {
  let page: ComplexFormValidationPage;

  beforeEach(() => {
    page = new ComplexFormValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
