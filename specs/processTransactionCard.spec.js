import { ProcessTransactionCardLogic } from '../specsLogic';

const checkLogic = new ProcessTransactionCardLogic();

describe('Process Transaction - Card Tab', () => {
  beforeAll(checkLogic.beforeAll.bind(checkLogic));
  beforeEach(checkLogic.beforeEach.bind(checkLogic));

  it('shoud be visible', checkLogic.shouldBeVisible.bind(checkLogic));

  it('shoud approve transaction with "charge" action, without Customer and by using Discover',
    checkLogic.sendApproveWithCharge.bind(checkLogic));
});
