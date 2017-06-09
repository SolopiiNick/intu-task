import { login, customer } from '../pages';

describe('Customer search', () => {
  beforeEach(() => {
    login.to();

    login.at();
  });

  // it('should display message for invalid credentials', function() {
  //     login.login('invalid_user', 'invalid_password');
  //
  //     expect(login.errorMessage.isDisplayed()).toBe(true);
  // });
  //
  // it('should display message for empty credentials', function() {
  //     login.login('', '');
  //
  //     expect(login.errorMessage.isDisplayed()).toBe(true);
  // });

  it('should go to Customer', () => {
    customer.search();

    // expect(friendPage.at()).toBeTruthy();
    // browser.pause();
  });
});
