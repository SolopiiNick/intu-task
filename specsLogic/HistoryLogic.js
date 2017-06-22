import SpecBaseLogic from '../utils/SpecLogicBase';
import { History, ProcessTransactionCard, Customers } from '../pages';
import { historyDataMock } from '../dataMock';

const createNewCustomer = Symbol('create new customer');
const createNewCard = Symbol('create new card');
const createNewCustomerWithCard = Symbol('create new customer with card');

const processTransactionCard = new ProcessTransactionCard();

class HistoryLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new History();
    this.customersPage = new Customers();
  }

  beforeEach() {
    processTransactionCard.get();
  }

  checkMadeTransaction() {
    const madeDiscoverCard = historyDataMock.madeDiscoverCard;
    processTransactionCard.fillFields(madeDiscoverCard);
    processTransactionCard.clickProcess();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.clickComplete();

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
    processTransactionCard.clickProcess();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.clickComplete();

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
    processTransactionCard.clickProcess();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.clickComplete();

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.clickRemoveButton();
    expect(this.page.removedTextPopup.getText())
      .toEqual('Are you sure you want to move transaction to «Queued» page?');
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
    processTransactionCard.clickProcess();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.clickComplete();

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.clickRefundButton();
    this.page.refundSubmitButton.click();
    this.cardType();
  }

  checkRechargeTransaction() {
    const { madeVisaCard } = historyDataMock;
    processTransactionCard.fillFields(madeVisaCard);
    processTransactionCard.clickProcess();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.clickComplete();

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.clickRechargeButton();
    browser.executeScript('arguments[0].scrollIntoView(true);', processTransactionCard.generalInfo.cardNameInput);
    // expect(processTransactionCard.generalInfo.cardNameInput.getAttribute('value'))
    //   .toEqual('Test Visa');
    // expect(processTransactionCard.generalInfo.amountInput.getAttribute('value'))
    //   .toEqual('74.31');
    expect(processTransactionCard.generalInfo.cardCvvInput.getAttribute('value')).toEqual('123');
    expect(processTransactionCard.generalInfo.taxInput.getAttribute('value')).toEqual('1');
    expect(processTransactionCard.generalInfo.avsStreetInput.getAttribute('value'))
      .toEqual('1307 Broad Hollow Road');
    expect(processTransactionCard.generalInfo.avsZipInput.getAttribute('value'))
      .toEqual('11746');
    expect(processTransactionCard.generalInfo.cardNameInput.isDisplayed());
  }

  checkMadeAuthTransaction() {
    const { madeMasterCardWithAuthAction } = historyDataMock;
    processTransactionCard.fillFields(madeMasterCardWithAuthAction);
    processTransactionCard.clickProcess();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.clickComplete();

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.queuedTab.click();
    this.cardType();
  }

  async checkAuthorizeCreateCustomerByVisaInQueuedTAb() {
    const customersDataMock =
      historyDataMock.approveWithAuthorizeCreateCustomerByVisa
        .customersPage;
    const cardDataMock =
      historyDataMock.approveWithAuthorizeCreateCustomerByVisa
        .processTransactionCardPage;

    this[createNewCustomerWithCard](customersDataMock);

    processTransactionCard.get();
    processTransactionCard.fillFields(cardDataMock);
    processTransactionCard.clickProcess();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.clickComplete();

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.queuedTab.click();
    this.cardType();
  }

  [createNewCustomerWithCard](customersDataMock) {
    this[createNewCustomer](customersDataMock);
    this[createNewCard](customersDataMock);
  }

  [createNewCustomer](customersDataMock) {
    this.customersPage.get();
    this.customersPage.clickCreateCustomer();
    this.customersPage.fillFields({ createCustomer: customersDataMock.createCustomer,
      addBillingInfo: customersDataMock.addBillingInfo,
      addShippingInfo: customersDataMock.addShippingInfo });
    this.customersPage.clickCompleteCreateCustomer();
  }

  [createNewCard](customersDataMock) {
    this.customersPage.selectCreatedCustomer(customersDataMock.createCustomer.companyNameInput);
    this.customersPage.selectWalletTab();
    this.customersPage.clickAddPaymentMethod();
    this.customersPage.selectCardTab();
    this.customersPage.fillFields({ addPaymentMethodCard: customersDataMock.addPaymentMethodCard });
    this.customersPage.clickAddCard();
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
