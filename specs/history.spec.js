import { login, processTransactionCard } from '../pages';

import { merchantUser, processTransactionCardDataMock } from '../dataMock';

const EC = protractor.ExpectedConditions;

describe('merchant login', () => {
  beforeEach(() => {
    login.get();
  });


  it('should successful login + create card process', () => {
    const { username, password } = merchantUser;
    login.login(username, password);
    browser.wait(EC.elementToBeClickable(login.selectDashboard), 30000, 'Dashboard should be present on the page ');

    processTransactionCard.get();

    const { chargeSuccess } = processTransactionCardDataMock;

    processTransactionCard.fillFields(chargeSuccess);
    processTransactionCard.submitButton.click();
  });
});
