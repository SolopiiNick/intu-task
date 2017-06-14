import { ProcessTransactionCheckLogic } from '../specsLogic';
const checkLogic = new ProcessTransactionCheckLogic();

describe('Process Transactions - Check', () => {
  beforeAll(checkLogic.beforeAll.bind(checkLogic));
  beforeEach(checkLogic.beforeEach.bind(checkLogic));

  it('Should be visible', checkLogic.shouldBeVisible.bind(checkLogic));
  it('Should send saving with TEL', checkLogic.sendSavingWithTEL.bind(checkLogic));
  it('Should send checking with PPD', checkLogic.sendCheckingWithPPD.bind(checkLogic));
  it('Should send duplicate saving with PPD', checkLogic.sendDuplicateSavingWithCCD.bind(checkLogic));
  it('Should send billing checking with PPD', checkLogic.sendBillingCheckingWithPPD.bind(checkLogic));
  it('Should send refund saving with PPD', checkLogic.sendRefundSavingWithCCD.bind(checkLogic));
});
