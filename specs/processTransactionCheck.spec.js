import { ProcessTransactionCheckLogic } from '../specsLogic';
const checkLogic = new ProcessTransactionCheckLogic();

describe('Process Transactions - Check', () => {
  beforeAll(checkLogic.beforeAll.bind(checkLogic));
  beforeEach(checkLogic.beforeEach.bind(checkLogic));

  it('Should be visible', checkLogic.shouldBeVisible.bind(checkLogic));
  it('Send Saving With TEL', checkLogic.sendSavingWithTEL.bind(checkLogic));
  it('Send Checking With PPD', checkLogic.sendCheckingWithPPD.bind(checkLogic));
  it('Send Duplicate Saving With PPD', checkLogic.sendDuplicateSavingWithCCD.bind(checkLogic));
  it('Send Billing Checking With PPD', checkLogic.sendBillingCheckingWithPPD.bind(checkLogic));
  it('Send Refund Saving With PPD', checkLogic.sendRefundSavingWithCCD.bind(checkLogic));
});
