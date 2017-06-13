import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionChecks } from '../pages';
import { checkTranasction } from '../dataMock';

const processTransactionChecks = new ProcessTransactionChecks();

class CheckLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.pageObject = new ProcessTransactionChecks();
  }

  shouldBeVisible() {
    expect(this.pageObject.isDisplayed()).toBe(true);
  }

  sendSavingWithTel() {
    processTransactionChecks.setChargeAction();
    processTransactionChecks.fillFields(checkTranasction);
    processTransactionChecks.clickProcessTransaction();
  }

  sendCheckingWithPpd() {
    processTransactionChecks.setChargeAction();
    processTransactionChecks.fillFields(checkTranasction);
    processTransactionChecks.setNewCustomer(true);
    processTransactionChecks.clickProcessTransaction();
  }

  sendDuplicateSavingWithCcd() {
    processTransactionChecks.setChargeAction();
    processTransactionChecks.fillCheckGenerailFields(checkTranasction);
    processTransactionChecks.clickProcessTransaction();
    // TODO wait for popup
  }

  sendBillingCheckingWithPpd() {
    processTransactionChecks.setRefundAction();
    processTransactionChecks.fillCheckGenerailFields(checkTranasction);
    processTransactionChecks.fillCheckBillingInfoFields(checkTranasction);
    processTransactionChecks.setSameAsBillingInput();
  }
}

export default CheckLogic;
