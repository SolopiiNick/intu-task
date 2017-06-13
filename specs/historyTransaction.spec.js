import { ProcessTransactionsCard } from '../pages/History';

import { merchantUser, cardHistory } from '../dataMock';

import { login } from '../pages';

const card = new ProcessTransactionsCard();
const EC = protractor.ExpectedConditions;

describe('merchant login', () => {
  beforeEach(() => {
    login.get();
  });


  it('should successful login + create card process', () => {
    const { username, password } = merchantUser;
    const transactionHistoryMocks = cardHistory[0] || {};
    login.login(username, password);
    browser.wait(EC.elementToBeClickable(login.selectDashboard), 30000, 'Dashboard should be present on the page ');
    card.openProcessTransactionsCardTab();
    card.sendSimpleChargeTransaction(transactionHistoryMocks);
  });
});
