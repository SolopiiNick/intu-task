import { ProcessTransactionChecks } from '../pages';
import SpecBaseLogic from '../utils/SpecLogicBase';

const processTransactionChecks = new ProcessTransactionChecks();

// import { checkTranasction } from '../dataMock';

class CheckLogic extends SpecBaseLogic {
  beforeEach() {
    processTransactionChecks.get();
  }

  shouldBeVisible() {
    expect(processTransactionChecks.isDisplayed()).toBe(true);
  }

  sendSavingWithTel(fieldsData) {
    processTransactionChecks.setChargeAction();
    processTransactionChecks.fillCheckGenerailFields(fieldsData);
    processTransactionChecks.clickProcessTransaction();
  }

  sendCheckingWithPpd(fieldsData) {
    processTransactionChecks.setChargeAction();
    processTransactionChecks.fillCheckGenerailFields(fieldsData);
    this.newCustomerInput.sendKeys(true);
    processTransactionChecks.clickProcessTransaction();
  }

  sendDuplicateSavingWithCcd(fieldsData) {
    processTransactionChecks.setChargeAction();
    processTransactionChecks.fillCheckGenerailFields(fieldsData);
    processTransactionChecks.clickProcessTransaction();
    // TODO wait for popup
  }

  sendBillingCheckingWithPpd(fieldsData) {
    processTransactionChecks.setRefundAction();
    processTransactionChecks.fillCheckGenerailFields(fieldsData);
    processTransactionChecks.fillCheckBillingInfoFields(fieldsData);
    this.sameAsBillingInput.click();
  }
}

export default CheckLogic;
