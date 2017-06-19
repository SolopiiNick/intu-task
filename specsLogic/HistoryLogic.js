import SpecBaseLogic from '../utils/SpecLogicBase';
import { History, ProcessTransactionCard } from '../pages';
import { historyDataMock } from '../dataMock';

const processTransactionCard = new ProcessTransactionCard();

class HistoryLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new History();
  }

  beforeEach() {
    processTransactionCard.get();
  }

  checkMadeTransaction() {
    const { madeDiscoverCard } = historyDataMock;
    processTransactionCard.fillFields(madeDiscoverCard);
    processTransactionCard.submit();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.complete();

    this.page.historyTab.click();
    this.page.waitUntilDisplayed();
    this.page.currentBatch.click();
    this.transactionDate();
    this.companyName();
    this.cardNumber();
    this.amount();
  }

  checkVoidTransaction() {
    const { madeVisaCard } = historyDataMock;
    processTransactionCard.fillFields(madeVisaCard);
    processTransactionCard.submit();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.complete();

    this.page.historyTab.click();
    this.page.waitUntilDisplayed();
    this.page.currentBatch.click();
    this.page.clickVoidButton();
    this.page.voidConfirmText.isPresent();
    this.page.okButton.click();
    this.page.waitUntilElementDisplayed(this.page.allTransactionsTab);
    browser.executeScript('arguments[0].scrollIntoView()', this.page.allTransactionsTab.getWebElement());
    this.page.allTransactionsTab.click();
    this.page.voidFilter.click();
    this.transactionDate();
    this.companyName();
    this.cardNumber();
    this.amount();
  }

  checkRemovedTransaction() {
    const { madeMasterCard } = historyDataMock;
    processTransactionCard.fillFields(madeMasterCard);
    processTransactionCard.submit();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.complete();

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.clickRemoveButton();
    expect(this.page.removedTextPopup.getText()).toEqual('Are you sure you want to move transaction to «Queued» page?');
    this.page.okButton.click();
    this.page.waitUntilElementDisplayed(this.page.removedNotification);
    expect(this.page.isElementDisplayed(this.page.removedNotification)).toBe(true);
    this.page.waitUntilElementDisplayed(this.page.queuedTab);
    browser.executeScript('arguments[0].scrollIntoView()', this.page.queuedTab.getWebElement());
    this.page.queuedTab.click();
    this.transactionDate();
    this.companyName();
    this.cardNumber();
    this.amount();
  }

  checkRefundTransaction() {
    const { madeAmexCard } = historyDataMock;
    processTransactionCard.fillFields(madeAmexCard);
    processTransactionCard.submit();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.complete();

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.clickRefundButton();
    this.page.refundSubmitButton.click();
    this.cardType();
  }

  checkRechargeTransaction() {
    const { madeVisaCard } = historyDataMock;
    processTransactionCard.fillFields(madeVisaCard);
    processTransactionCard.submit();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.complete();

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.clickRechargeButton();
    expect(processTransactionCard.generalInfo.cardNameInput.getText()).toEqual('');
  }

  async transactionDate() {
    const rows = await element.all(by.repeater('row in rowData'));

    const itemTitleElement = rows[0].element(by.class('md-cell ng-binding ng-scope'));

    const itemTitle = await itemTitleElement.getText();
    expect(itemTitle).toEqual('5/12/17 9:06 PM');
  }

  async companyName() {
    const rows = await element.all(by.repeater('row in rowData'));

    const itemTitleElement = rows[1].element(by.class('md-cell ng-binding ng-scope'));

    const itemTitle = await itemTitleElement.getText();
    expect(itemTitle).toEqual('');
  }

  async cardType() {
    const rows = await element.all(by.repeater('row in rowData'));

    const itemTitleElement = rows[2].element(by.class('md-cell ng-binding ng-scope'));

    const itemTitle = await itemTitleElement.getText();
    expect(itemTitle).toEqual('Refund');
  }

  async cardNumber() {
    const rows = await element.all(by.repeater('row in rowData'));

    const itemTitleElement = rows[3].element(by.class('md-cell ng-binding ng-scope'));

    const itemTitle = await itemTitleElement.getText();
    expect(itemTitle).toEqual('2149');
  }

  async amount() {
    const rows = await element.all(by.repeater('row in rowData'));

    const itemTitleElement = rows[3].element(by.class('md-cell ng-binding ng-scope'));

    const itemTitle = await itemTitleElement.getText();
    expect(itemTitle).toEqual('526');
  }
}

export default HistoryLogic;
