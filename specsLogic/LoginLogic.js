import SpecBaseLogic from '../utils/SpecLogicBase';

import { Login } from '../pages';

import { merchantUser } from '../dataMock';

const EC = protractor.ExpectedConditions;

const { username, password } = merchantUser;

class LoginLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new Login();
  }

  loginInvalidUser() {
    this.page.userInput.sendKeys('invalid_user');
    this.page.passInput.sendKeys('invalid_password');
    this.page.loginButton.click();
    expect(this.page.errorMessage.isDisplayed()).toBe(true);
  }

  loginEmptyUser() {
    this.page.userInput.sendKeys('');
    this.page.passInput.sendKeys('123456');
    expect(this.page.emptyMassage.isDisplayed()).toBe(true);
  }

  loginValidUser() {
    this.page.userInput.sendKeys(username);
    this.page.passInput.sendKeys(password);
    this.page.loginButton.click();
    browser.wait(EC.elementToBeClickable(this.page.logoutButton), 30000, 'Dashboard should be present on the page');
  }
}

export default LoginLogic;
