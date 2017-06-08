import BasePage from './Base';

browser.ignoreSynchronization = true;

class CustomerPage extends BasePage {
  get url() {
    return 'http://hhhhhhhhhhh.merchant.release.accept.blue/dashboard';
  }

  get selectCustomer() {
    return element(element.all(by.css('a[href="null"]')).count());
  }
  // this.passInput = element(by.name('password'));
  // this.loginButton = $('.login');
  // this.errorMessage = element(by.xpath('//div[@ng-show = "vm.wrongLoginData"]
  // //span [@style = "Username or password is not correct!"]'));
  // this.pageLoaded = this.and(
  //   this.isVisible($('div#page'))
  // );

  // this.loginAs = function(userObj) {
  //   this.login(userObj.username, userObj.password);
  // };

  search() {
    this.selectCustomer.click();
    // this.passInput.sendKeys(pass);
    // this.loginButton.click();
  }
}

export default new CustomerPage();
