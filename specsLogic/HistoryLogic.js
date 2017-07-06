import SpecBaseLogic from '../utils/SpecLogicBase';
import { History, ProcessTransactionCard, Customers, DashboardCard } from '../pages';
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
    this.dashboardCard = new DashboardCard();
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
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
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
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
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
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
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
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
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
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
  }

  checkAuthorizeCreateCustomerByVisaInQueuedTAb() {
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
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
  }

  checkPostAuthorizeCreateCustomerByAmexInQueuedTAb() {
    const customersDataMock =
      historyDataMock.approveWithPostAuthorizeCreateCustomerByAmex
        .customersPage;
    const cardDataMock =
      historyDataMock.approveWithPostAuthorizeCreateCustomerByAmex
        .processTransactionCardPage;

    this[createNewCustomer](customersDataMock);

    browser.waitForAngular()
      .then(() => {
        processTransactionCard.get();
        processTransactionCard.fillFields(cardDataMock);
        processTransactionCard.clickProcess();
        processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
        processTransactionCard.clickComplete();
      });

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.queuedTab.click();
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
  }

  checkCreateCustomerByDiscoverRefundInAllTransactionTAb() {
    const customersDataMock =
      historyDataMock.approveWithRefundCreateCustomerByDiscover
        .customersPage;
    const cardDataMock =
      historyDataMock.approveWithRefundCreateCustomerByDiscover
        .processTransactionCardPage;

    this[createNewCustomerWithCard](customersDataMock);

    browser.waitForAngular()
      .then(() => {
        processTransactionCard.get();
        processTransactionCard.fillFields(cardDataMock);
        processTransactionCard.clickProcess();
        processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
        processTransactionCard.clickComplete();
      });

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.waitUntilElementDisplayed(this.page.allTransactionsTab);
    browser.executeScript('arguments[0].scrollIntoView()', this.page.allTransactionsTab.getWebElement());
    this.page.allTransactionsTab.click();
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
  }

  transactionWithQueuedStatusIsVoided() {
    const customersDataMock =
      historyDataMock.queuedWithAuthCreateCustomerByVisa
        .customersPage;
    const cardDataMock =
      historyDataMock.queuedWithAuthCreateCustomerByVisa
        .processTransactionCardPage;

    this[createNewCustomer](customersDataMock);

    browser.waitForAngular()
      .then(() => {
        processTransactionCard.get();
        processTransactionCard.fillFields(cardDataMock);
        processTransactionCard.clickProcess();
        processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
        processTransactionCard.clickComplete();
      });

    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.waitUntilElementDisplayed(this.page.queuedTab);
    browser.executeScript('arguments[0].scrollIntoView()', this.page.queuedTab.getWebElement());
    this.page.queuedTab.click();
    this.page.clickVoidButton();
    expect(this.page.voidConfirmText.getText())
      .toEqual('Are you sure you want to void transaction?');
    this.page.okButton.click();
  }

  madeCaptureMasterCardWithAuthAction() {
    const { madeCaptureMasterCardWithAuthAction } = historyDataMock;
    processTransactionCard.fillFields(madeCaptureMasterCardWithAuthAction);
    processTransactionCard.clickProcess();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.clickComplete();

    this.page.historyTab.click();
    this.page.allTransactionsTab.click();
    this.page.clickCaptureActionButton();
    expect(this.page.captureConfirmText.getText()).toEqual('Are you sure you want to capture the ' +
      'transaction - transaction will be moved to current batch?');
    this.page.okButton.click();
    this.page.capturedFilter.click();
    this.checkTransactionAmount('$1,012.92');
  }

  madeCaptureAmexCardWithPostAuthAction() {
    const { madeCaptureAmexCardWithPostAuthAction } = historyDataMock;
    processTransactionCard.fillFields(madeCaptureAmexCardWithPostAuthAction);
    processTransactionCard.clickProcess();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    processTransactionCard.clickComplete();

    this.page.historyTab.click();
    this.page.allTransactionsTab.click();
    this.page.clickCaptureActionButton();
    expect(this.page.captureConfirmText.getText()).toEqual('Are you sure you want to capture the ' +
      'transaction - transaction will be moved to current batch?');
    this.page.okButton.click();
    this.page.batchesTab.click();
    this.page.currentBatch.click();
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
  }

  madeErrorWithChargeByAmex() {
    const { madeErrorWithChargeByAmex } = historyDataMock;
    processTransactionCard.fillFields(madeErrorWithChargeByAmex);
    processTransactionCard.clickProcess();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.errorPopup);
    expect(processTransactionCard.isElementDisplayed(processTransactionCard.errorPopup)).toBe(true);
    processTransactionCard.clickOkButton();

    this.page.historyTab.click();
    this.page.allTransactionsTab.click();
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
  }

  madeDeclineWithChargeByVisa() {
    browser.waitForAngular()
      .then(() => {
        this.dashboardCard.get();
        const { madeDeclineWithChargeByVisa } = historyDataMock;
        this.dashboardCard.fillFields(madeDeclineWithChargeByVisa);
        this.dashboardCard.clickProcess();
        this.dashboardCard.waitUntilElementDisplayed(this.dashboardCard.declinedPopup);
        expect(this.dashboardCard.isElementDisplayed(this.dashboardCard.declinedPopup)).toBe(true);
        this.dashboardCard.clickCancelButton();
      });

    this.page.historyTab.click();
    this.page.allTransactionsTab.click();
    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
  }

  refundTransactionWithCaptureStatusBiggerAmount() {
    const { refundTransactionWithCaptureStatus } = historyDataMock;
    processTransactionCard.fillFields(refundTransactionWithCaptureStatus);
    processTransactionCard.clickProcessBrowserExecute();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    expect(processTransactionCard.isElementDisplayed(processTransactionCard.approvePopup))
      .toBe(true);
    processTransactionCard.clickComplete();

    this.page.historyTab.click();
    this.page.allTransactionsTab.click();
    this.page.clickRefundButton();
    this.page.refundAmountInput.clear().sendKeys('1014');
    this.page.refundSubmitButton.click();
    this.page.clickViewButton();
    // this.page.transactionResultData(refundTransactionWithCaptureStatus.generalInfo.amountInput);
    // this.page.expandedContent.each((row) => {
    //   console.log(this.page.expandedContent[0]);
    //   const rowElement = row.$$('td');
    //   expect(rowElement.count()).toBe(2);
    //   rowElement.each((r) => {
    //     r.getText(t => console.log('t:', t));
    //   });
    //   expect(rowElement.get(1).getText()).toMatch('bla bla');
    // })
    // browser.executeScript('arguments[0].scrollIntoView()', this.page.tableData);
    // browser.sleep(500);
    // expect(this.page.cells[1].getText()).toEqual('something');

    // this.checkTransactionAmount('$21.00');
    // this.checkCompanyName('Test Company n');
    // this.checkCardType('Charge');
    // this.checkCardNumber('**** 1165');
  }

  refundTransactionWithQueuedStatusLessAmount() {
    const { refundTransactionWithQueuedStatus } = historyDataMock;
    processTransactionCard.fillFields(refundTransactionWithQueuedStatus);
    processTransactionCard.clickProcessBrowserExecute();
    processTransactionCard.waitUntilElementDisplayed(processTransactionCard.approvePopup);
    expect(processTransactionCard.isElementDisplayed(processTransactionCard.approvePopup))
      .toBe(true);
    processTransactionCard.clickComplete();

    this.page.historyTab.click();
    this.page.allTransactionsTab.click();
    this.page.clickRefundButton();
    this.page.refundAmountInput.clear().sendKeys('75');
    this.page.refundSubmitButton.click();
    this.page.clickViewButton();
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


  checkIfRowExist({ repeatSelector, colIdx, toEqualValue }) {
    this.page.repeaterData(repeatSelector)
      .then(rows => rows[0].all(by.repeater('column in columns')))
      .then(cols => cols[colIdx])
      .then(col => col.getAttribute('innerText'))
      .then((text) => {
        expect(text).toEqual(toEqualValue);
      });
  }

  checkCompanyName(expectValue) {
    this.checkIfRowExist({
      repeatSelector: 'row in rowData',
      colIdx: 1,
      toEqualValue: expectValue,
    });
  }

  checkCardType(expectValue) {
    this.checkIfRowExist({
      repeatSelector: 'row in rowData',
      colIdx: 2,
      toEqualValue: expectValue,
    });
  }

  checkCardNumber(expectValue) {
    this.checkIfRowExist({
      repeatSelector: 'row in rowData',
      colIdx: 3,
      toEqualValue: expectValue,
    });
  }

  checkTransactionAmount(expectValue) {
    this.checkIfRowExist({
      repeatSelector: 'row in rowData',
      colIdx: 4,
      toEqualValue: expectValue,
    });
  }
}

export default HistoryLogic;
