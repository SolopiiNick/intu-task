import { CheckLogic } from '../specsLogic';
const checkLogic = new CheckLogic();

describe('Process Transactions Check', () => {
  beforeAll(checkLogic.beforeAll.bind(checkLogic));
  beforeEach(checkLogic.beforeEach.bind(checkLogic));

  it('shoud be visible', checkLogic.shouldBeVisible.bind(checkLogic));

  // it('should go to friend dashboard on successful login', () => {
  //   const { username, password } = merchantUser;
  //   login.login(username, password);
  //   browser.wait(EC.presenceOf(selectCustomer), 10000);
  //   login.dashboard();
  // });

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

  // it('should go to Customer', function() {
  //   CustomerPage.search(userData.testUser);
  //
  //   // expect(friendPage.at()).toBeTruthy();
  //   browser.pause();
  // });
});
