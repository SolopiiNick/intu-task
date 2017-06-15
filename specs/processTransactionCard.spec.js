import { ProcessTransactionCardLogic } from '../specsLogic';

const cardLogic = new ProcessTransactionCardLogic();

describe('Process Transaction - Card Tab', () => {
  beforeAll(cardLogic.beforeAll.bind(cardLogic));
  beforeEach(cardLogic.beforeEach.bind(cardLogic));

  it('shoud be visible', cardLogic.shouldBeVisible.bind(cardLogic));

  it('shoud approve transaction with "charge" action, without Customer and by using Discover',
    cardLogic.sendApproveWithCharge.bind(cardLogic));
});
