import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionChecks, Customers } from '../pages';
import { processTransactionCheckDataMock } from '../dataMock';

const createNewCustomerWithCheck = Symbol('Create new customer with check');

class ProcessTransactionCheckLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new ProcessTransactionChecks();
    this.customersPage = new Customers();
  }

  shouldBeVisible() {
    expect(this.page.isDisplayed()).toBe(true);
  }

  sendSavingWithTEL() {
    this.page.setChargeAction();
    this.page.fillFields(processTransactionCheckDataMock.successSavingWithTEL);
    this.page.clickProcessTransaction();
    this.page.waitUntilElementDisplayed(this.page.approvePopup);
    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  sendCheckingWithPPD() {
    this.page.setChargeAction();
    this.page.fillFields(processTransactionCheckDataMock.successCheckingWithPPD);
    this.page.setNewCustomer();
    this.page.clickProcessTransaction();
    this.page.waitUntilElementDisplayed(this.page.approvePopup);
    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  sendDuplicateSavingWithCCD() {
    this.page.setChargeAction();
    this.page.fillFields(processTransactionCheckDataMock.successDuplicateSavingWithCCD);
    this.page.clickProcessTransaction();
    browser.wait(this.EC.presenceOf(this.page.approvePopup), 5000, 'Approved Popup')
      .then(() => {
        this.page.closePopup();
        this.page.setChargeAction();
        this.page.fillFields(processTransactionCheckDataMock.successDuplicateSavingWithCCD);
        this.page.clickProcessTransaction();
        this.page.waitUntilElementDisplayed(this.page.duplicatePopup);
        expect(this.page.isElementDisplayed(this.page.duplicatePopup)).toBe(true);
      });
  }

  sendBillingCheckingWithPPD() {
    this.page.setRefundAction();
    this.page.fillFields(processTransactionCheckDataMock.successCheckingWithPPDAndBilling);
    this.page.setSameAsBillingInput();
    this.page.clickProcessTransaction();
    this.page.waitUntilElementDisplayed(this.page.approvePopup);
    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  sendRefundSavingWithCCD() {
    this.page.setRefundAction();
    this.page.fillFields(processTransactionCheckDataMock.successRefundSavingWithCCD);
    this.page.setNewCustomer();
    this.page.clickProcessTransaction();
    this.page.waitUntilElementDisplayed(this.page.approvePopup);
    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  sendRefundWithExistingCustomer() {
    const testData = processTransactionCheckDataMock.successRefundWithExistingCustomer;

    this[createNewCustomerWithCheck](testData);
    browser.sleep(500)
      .then(() => {
        this.page.get();
        this.page.setRefundAction();
        this.page.fillCustomerAutoComplete(testData.companyName);
        this.page.fillAccountNumberAutoComplete();
        this.page.fillFields(testData);
        this.page.clickProcessTransaction();
        this.page.waitUntilElementDisplayed(this.page.approvePopup);
        expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
      });
  }

  sendChargeWithExistingCustomer() {
    const testData = processTransactionCheckDataMock.successChargeWithExistingCustomer;

    this[createNewCustomerWithCheck](testData);
    browser.sleep(500)
      .then(() => {
        this.page.get();
        this.page.setChargeAction();
        this.page.fillCustomerAutoComplete(testData.companyName);
        this.page.fillAccountNumberAutoComplete();
        this.page.fillFields(testData);
        this.page.setEditCustomer();
        this.page.clickProcessTransaction();
        this.page.waitUntilElementDisplayed(this.page.approvePopup);
        expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
      });
  }

  [createNewCustomerWithCheck](testData) {
    this.customersPage.get();
    this.customersPage.createCustomer();
    this.customersPage.fillCompanyName(testData.companyName);
    this.customersPage.completeCreateCustomer();
    this.customersPage.selectCreatedCustomer();
    this.customersPage.selectWalletTab();
    this.customersPage.clickAddPaymentMethod();
    this.customersPage.selectCheckPage();
    this.customersPage.fillFields(testData);
    this.customersPage.clickSavePaymentMethod();
  }
}

export default ProcessTransactionCheckLogic;
