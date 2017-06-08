var loginPage = require('../pages/nonAngularLoginPage');
var userData = require('../data/userData');
var EC = protractor.ExpectedConditions;

var selectCustomer = element(by.linkText('Customers'));

describe ('merchant login', function() {
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

    it('should login', function() {
        loginPage.login('Hillotestm', '123456');
        // browser.sleep(5222);
        browser.wait(EC.presenceOf(transactionButton), 10000);
        loginPage.transactionTab();

        // expect(friendPage.at()).toBeFalse();

    });

    // it('should go to Customer', function() {
    //   CustomerPage.search(userData.testUser);
    //
    //   // expect(friendPage.at()).toBeTruthy();
    //   browser.pause();
    // });
});
