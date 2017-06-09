// page is non-angular

import Base from '../utils/Base';

browser.ignoreSynchronization = false;

class LoginPage extends Base {
  get url() { return `${this.baseUrl}/login`; }
  get selector() { return element(by.css('span.logo-text')); }

  get userInput() { return element(by.name('username')); }
  get passInput() { return element(by.name('password')); }
  get loginButton() { return element(by.buttonText('Log in')); }
  get selectTransaction() { return element(by.linkText('Process Transaction')); }
  get selectDashboard() { return element(by.css('i.icon.icon-ic-menu-dashboard-normal')); }
  get errorMessage() { return element(by.xpath('//div[@ng-show = "vm.wrongLoginData"]//span [@style = "Username or password is not correct!"]')); }

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
    this.selectDashboard.click();
  }

  transactionTab() {
    this.selectTransaction.click();
  }
}

export default new LoginPage();
