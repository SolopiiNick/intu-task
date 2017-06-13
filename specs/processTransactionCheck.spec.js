import { ProcessTransactionCheckLogic } from '../specsLogic';
const checkLogic = new ProcessTransactionCheckLogic();

describe('Process Transactions Check', () => {
  beforeAll(checkLogic.beforeAll.bind(checkLogic));
  beforeEach(checkLogic.beforeEach.bind(checkLogic));

  it('shoud be visible', checkLogic.shouldBeVisible.bind(checkLogic));
});
