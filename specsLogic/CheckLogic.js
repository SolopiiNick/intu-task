import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionChecks } from '../pages';
import { checkTranasction } from '../dataMock';

class CheckLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new ProcessTransactionChecks();
  }

  shouldBeVisible() {
    expect(this.page.isDisplayed()).toBe(true);
  }

  sendSavingWithTel() {
    this.page.setChargeAction();
    this.page.fillFields(checkTranasction);
    this.page.clickProcessTransaction();
  }

  sendCheckingWithPpd() {
    this.page.setChargeAction();
    this.page.fillFields(checkTranasction);
    this.page.setNewCustomer(true);
    this.page.clickProcessTransaction();
  }

  sendDuplicateSavingWithCcd() {
    this.page.setChargeAction();
    this.page.fillCheckGenerailFields(checkTranasction);
    this.page.clickProcessTransaction();
    // TODO wait for popup
  }

  sendBillingCheckingWithPpd() {
    this.page.setRefundAction();
    this.page.fillCheckGenerailFields(checkTranasction);
    this.page.fillCheckBillingInfoFields(checkTranasction);
    this.page.setSameAsBillingInput();
  }
}

export default CheckLogic;
