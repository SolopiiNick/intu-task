// page is non-angular

import BasePage from './Base';

browser.ignoreSynchronization = false;

class LoginPage extends BasePage {
  get url() {
    return 'http://merchant.release.accept.blue/login';
  }
  get userInput() {
    return element(by.name('username'));
  }
  get passInput() {
    return element(by.name('password'));
  }
  get loginButton() {
    return element(by.buttonText('Log in'));
  }
  get selectCustomer() {
    return element(by.linkText('Customers'));
  }
  get errorMessage() {
    return element(by.xpath('//div[@ng-show = "vm.wrongLoginData"]//span [@style = "Username or password is not correct!"]'));
  }
  get pageLoaded() {
    return this.and(
      this.isVisible($('div#page')),
    );
  }

  loginAs({ username, password }) {
    this.login(username, password);
  }

  login(username, password) {
    this.userInput.sendKeys(username);
    this.passInput.sendKeys(password);
    this.loginButton.click();
  }

  dashboard() {
    this.selectCustomer.click();
  }

  transactionTab() {
    this.transactionButton.click();
  }
}

export default new LoginPage();
