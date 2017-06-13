import { CheckLogic } from '../specsLogic';
const checkLogic = new CheckLogic();

describe('Process Transactions Check', () => {
  beforeAll(checkLogic.beforeAll.bind(checkLogic));
  beforeEach(checkLogic.beforeEach.bind(checkLogic));

  it('shoud be visible', checkLogic.shouldBeVisible.bind(checkLogic));
});
