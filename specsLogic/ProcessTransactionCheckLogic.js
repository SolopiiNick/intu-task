import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionChecks } from '../pages';
import { processTransactionCheckDataMock } from '../dataMock';

class ProcessTransactionCheckLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new ProcessTransactionChecks();
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
    this.page.waitUntilElementDisplayed(this.page.approvePopup);
    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  sendRefundSavingWithCCD() {
    this.page.setRefundAction();
    this.page.fillFields(processTransactionCheckDataMock.successRefundSavingWithCCD);
    this.page.setNewCustomer();
    this.page.waitUntilElementDisplayed(this.page.approvePopup);
    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }
}

export default ProcessTransactionCheckLogic;
