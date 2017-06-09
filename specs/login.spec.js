import { login } from '../pages';

import { merchantUser } from '../dataMock';

const EC = protractor.ExpectedConditions;


describe('merchant login', () => {
  beforeEach(() => {
    login.get();
  });

  it('should successful login', () => {
    const { username, password } = merchantUser;
    login.login(username, password);
    browser.wait(EC.elementToBeClickable(login.selectDashboard), 300000, 'Dashboard should be present on the page after open');
  });

  // it('should display message for invalid credentials', function() {
  //     loginPage.login('invalid_user', 'invalid_password');
  //
  //     expect(loginPage.errorMessage.isDisplayed()).toBe(true);
  // });
  //
  // it('should display message for empty credentials', function() {
  //     loginPage.login('', '');
  //
  //     expect(loginPage.errorMessage.isDisplayed()).toBe(true);
  // });

  // it('should go to Customer', function() {
  //   CustomerPage.search(userData.testUser);
  //
  //   // expect(friendPage.at()).toBeTruthy();
  //   browser.pause();
  // });
});
