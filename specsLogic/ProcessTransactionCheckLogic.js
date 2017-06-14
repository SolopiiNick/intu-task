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
    browser.wait(this.EC.presenceOf(this.confirmPopup), 5000, 'Approved Popup');
  }

  sendCheckingWithPPD() {
    this.page.setChargeAction();
    this.page.fillFields(processTransactionCheckDataMock.successCheckingWithPPD);
    this.page.setNewCustomer(true);
    this.page.clickProcessTransaction();
    browser.wait(this.EC.presenceOf(this.confirmPopup), 5000, 'Approved Popup');
  }

  sendDuplicateSavingWithCCD() {
    this.page.setChargeAction();
    this.page.fillFields(processTransactionCheckDataMock.successDuplicateSavingWithCCD);
    this.page.clickProcessTransaction();
    browser.wait(this.EC.presenceOf(this.confirmPopup), 5000, 'Approved Popup')
      .then(() => {
        this.page.setChargeAction();
        this.page.fillFields(processTransactionCheckDataMock.successDuplicateSavingWithCCD);
        this.page.clickProcessTransaction();
        browser.wait(this.EC.presenceOf(this.duplicatePopup), 5000, 'Duplicate popup');
      });
  }

  sendBillingCheckingWithPPD() {
    this.page.setRefundAction();
    this.page.fillFields(processTransactionCheckDataMock.successCheckingWithPPDAndBilling);
    this.page.setSameAsBillingInput();
    browser.wait(this.EC.presenceOf(this.confirmPopup), 5000, 'Approved Popup');
  }

  sendRefundSavingWithCCD() {
    this.page.setRefundAction();
    this.page.fillFields(processTransactionCheckDataMock.successRefundSavingWithCCD);
    this.page.setNewCustomer(true);
    browser.wait(this.EC.presenceOf(this.confirmPopup), 5000, 'Approved Popup');
  }
}

export default ProcessTransactionCheckLogic;
