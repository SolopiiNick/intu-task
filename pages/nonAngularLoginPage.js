browser.ignoreSynchronization = false;
var basePage = require('./basePage.js');

var LoginPage = function() {
    this.url = 'http://merchant.release.accept.blue/login';
    this.userInput = element(by.name('username'));
    this.passInput = element(by.name('password'));
    this.loginButton = element(by.buttonText('Log in'));
    this.selectCustomer = element(by.linkText('Customers'));
    this.errorMessage = element(by.xpath('//div[@ng-show = "vm.wrongLoginData"]//span [@style = "Username or password is not correct!"]'));
    this.pageLoaded = this.and(
        this.isVisible($('div#page'))
    );

    this.loginAs = function(userObj) {
        this.login(userObj.username, userObj.password);
    };

    this.login = function(user, pass) {
        this.userInput.sendKeys(user);
        this.passInput.sendKeys(pass);
        this.loginButton.click();
    };

  this.dashboard = function() {
    this.selectCustomer.click();
  };
};
LoginPage.prototype = basePage; // extend basePage...
module.exports = new LoginPage();
