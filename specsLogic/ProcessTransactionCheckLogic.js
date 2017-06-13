import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionChecks } from '../pages';
import { checkTranasction } from '../dataMock';

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
    this.page.fillFields(checkTranasction.successSavingWithTEL);
    this.page.clickProcessTransaction();
  }

  sendCheckingWithPPD() {
    this.page.setChargeAction();
    this.page.fillFields(checkTranasction.successCheckingWithPPD);
    this.page.setNewCustomer(true);
    this.page.clickProcessTransaction();
  }

  sendDuplicateSavingWithCCD() {
    this.page.setChargeAction();
    this.page.fillFields(checkTranasction.successDuplicateSavingWithCCD);
    this.page.clickProcessTransaction();
    // TODO wait for popup
  }

  sendBillingCheckingWithPPD() {
    this.page.setRefundAction();
    this.page.fillFields(checkTranasction.successCheckingWithPPDAndBilling);
    this.page.setSameAsBillingInput();
  }
}

export default ProcessTransactionCheckLogic;
