import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionChecks } from '../pages';
import { checkTranasction } from '../dataMock';

class CheckLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.pageObject = new ProcessTransactionChecks();
  }

  shouldBeVisible() {
    expect(this.pageObject.isDisplayed()).toBe(true);
  }

  sendSavingWithTel() {
    this.pageObject.setChargeAction();
    this.pageObject.fillFields(checkTranasction);
    this.pageObject.clickProcessTransaction();
  }

  sendCheckingWithPpd() {
    this.pageObject.setChargeAction();
    this.pageObject.fillFields(checkTranasction);
    this.pageObject.setNewCustomer(true);
    this.pageObject.clickProcessTransaction();
  }

  sendDuplicateSavingWithCcd() {
    this.pageObject.setChargeAction();
    this.pageObject.fillCheckGenerailFields(checkTranasction);
    this.pageObject.clickProcessTransaction();
    // TODO wait for popup
  }

  sendBillingCheckingWithPpd() {
    this.pageObject.setRefundAction();
    this.pageObject.fillCheckGenerailFields(checkTranasction);
    this.pageObject.fillCheckBillingInfoFields(checkTranasction);
    this.pageObject.setSameAsBillingInput();
  }
}

export default CheckLogic;
