import { login, processTransactionCard } from '../pages';

import { merchantUser, cards } from '../dataMock';

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
    processTransactionCard.setExpireDate();
    browser.actions().mouseMove(processTransactionCard.generalInfo.taxInput).perform();
    processTransactionCard.sendSimpleChargeTransaction(cards.discover);
  });
});
