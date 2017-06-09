import { processTransactionsChecks } from '../pages';

import { checkTranasction } from '../dataMock';

const EC = protractor.ExpectedConditions;

describe('merchant login', () => {
  beforeEach(() => {
    console.log(checkTranasction);
    console.log(EC);
    processTransactionsChecks.get();
  });

  // it('should go to friend dashboard on successful login', () => {
  //   const { username, password } = merchantUser;
  //   login.login(username, password);
  //   browser.wait(EC.presenceOf(selectCustomer), 10000);
  //   login.dashboard();
  // });

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
