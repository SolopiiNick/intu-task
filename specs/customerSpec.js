var loginPage = require('../pages/nonAngularLoginPage');
var friendPage = require('../pages/friendPage');
var customerPage = require('../pages/CustomerPage')
var userData = require('../data/userData');

describe ('Customer search', function() {
  beforeEach(function() {
    loginPage.to();

    loginPage.at();
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

  it('should go to friend dashboard on successful login', function() {
    loginPage.loginAs(userData.testUser);

    expect(friendPage.at()).toBeFalse();
    browser.pause();
  });

  it('should go to Customer', function() {
    customerPage.search();

    // expect(friendPage.at()).toBeTruthy();
    browser.pause();
  });
});
