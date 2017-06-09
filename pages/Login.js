// page is non-angular

import Base from '../utils/Base';

browser.ignoreSynchronization = false;

class LoginPage extends Base {
  get url() { return `${this.baseUrl}/login`; }
  get selector() { return element(by.css('span.logo-text')); }

  get userInput() { return element(by.name('username')); }
  get passInput() { return element(by.name('password')); }
  get loginButton() { return element(by.buttonText('Log in')); }
  get logoutButton() { return element(by.buttonText('Logout')); }
  get selectTransaction() { return element(by.linkText('Process Transaction')); }
  get selectDashboard() { return element(by.css('i.icon.icon-ic-menu-dashboard-normal')); }
  get errorMessage() { return element(by.css('div[ng-show="vm.wrongLoginData"]')); }
  get emptyMassage() { return element(by.css('.md-input-message-animation')); }

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

  emptyLogin(username, password) {
    this.userInput.sendKeys(username);
    this.passInput.sendKeys(password);
  }

  dashboard() {
    this.selectDashboard.click();
  }

  transactionTab() {
    this.selectTransaction.click();
  }
}

export default new LoginPage();
