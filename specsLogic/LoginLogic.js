import SpecBaseLogic from '../utils/SpecLogicBase';

import { Login } from '../pages';

import { merchantUser } from '../dataMock';

const EC = protractor.ExpectedConditions;


class LoginLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new Login();
  }

  loginInvalidUser() {
    this.page.invalidUser();
    expect(this.page.errorMessage.isDisplayed()).toBe(true);
  }

  loginEmptyUser() {
    this.page.emptyLogin('', '123456');
    expect(this.page.emptyMassage.isDisplayed()).toBe(true);
  }

  loginValidUser() {
    const { username, password } = merchantUser;
    this.page.login(username, password);
    browser.wait(EC.elementToBeClickable(this.page.logoutButton), 30000, 'Dashboard should be present on the page');
  }
}

export default LoginLogic;
