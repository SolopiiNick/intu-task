import { ProcessTransactionCheckLogic } from '../specsLogic';
const checkLogic = new ProcessTransactionCheckLogic();

describe('Process Transactions - Check', () => {
  beforeAll(checkLogic.beforeAll.bind(checkLogic));
  beforeEach(checkLogic.beforeEach.bind(checkLogic));

  it('Should be visible', checkLogic.shouldBeVisible.bind(checkLogic));
  it('Should send saving With TEL', checkLogic.sendSavingWithTEL.bind(checkLogic));
  it('Should send checking With PPD', checkLogic.sendCheckingWithPPD.bind(checkLogic));
  it('Should send duplicate Saving With PPD', checkLogic.sendDuplicateSavingWithCCD.bind(checkLogic));
  it('Should send billing Checking With PPD', checkLogic.sendBillingCheckingWithPPD.bind(checkLogic));
  it('Should send refund Saving With PPD', checkLogic.sendRefundSavingWithCCD.bind(checkLogic));
});
