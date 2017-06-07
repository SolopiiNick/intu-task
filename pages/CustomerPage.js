browser.ignoreSynchronization = true;
var basePage = require('./basePage.js');

var CustomerPage = function() {
  this.url = 'http://hhhhhhhhhhh.merchant.release.accept.blue/dashboard';
  this.selectCustomer = element(element.all(by.css('a[href="null"]')).count());
  // this.passInput = element(by.name('password'));
  // this.loginButton = $('.login');
  // this.errorMessage = element(by.xpath('//div[@ng-show = "vm.wrongLoginData"]//span [@style = "Username or password is not correct!"]'));
  // this.pageLoaded = this.and(
  //   this.isVisible($('div#page'))
  // );

  // this.loginAs = function(userObj) {
  //   this.login(userObj.username, userObj.password);
  // };

  this.search = function(selectCustomer) {
    this.selectCustomer.click();
    // this.passInput.sendKeys(pass);
    // this.loginButton.click();
  };
};
CustomerPage.prototype = basePage; // extend basePage...
module.exports = new CustomerPage();
