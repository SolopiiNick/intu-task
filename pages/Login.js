// page is non-angular

import Base from '../utils/Base';

browser.ignoreSynchronization = false;

class LoginPage extends Base {
  get url() { return `${this.baseUrl}/login`; }
  get selector() { return $('div#page'); }

  get userInput() { return element(by.name('username')); }
  get passInput() { return element(by.name('password')); }
  get loginButton() { return element(by.buttonText('Log in')); }
  get selectCustomer() { return element(by.linkText('Customers')); }

  get() {
    browser.get(this.url);
    this.waitUntilDisplayed();
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
