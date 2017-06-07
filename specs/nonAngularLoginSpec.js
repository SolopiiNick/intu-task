var loginPage = require('../pages/nonAngularLoginPage');
var friendPage = require('../pages/friendPage');
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

    it('should go to friend dashboard on successful login', function() {
        loginPage.login('Hillotestm', '123456');
        // browser.sleep(5222);
        browser.wait(EC.presenceOf(selectCustomer), 1000);
        loginPage.dashboard();
        console.log(selectCustomer)

        // expect(friendPage.at()).toBeFalse();

    });
    // it('should go to Customer', function() {
    //   CustomerPage.search(userData.testUser);
    //
    //   // expect(friendPage.at()).toBeTruthy();
    //   browser.pause();
    // });
});
