import { HistoryLogic } from '../specsLogic';

const batchLogic = new HistoryLogic();

describe('Process Transaction - Card Tab', () => {
  beforeAll(batchLogic.beforeAll.bind(batchLogic));
  beforeEach(batchLogic.beforeEach.bind(batchLogic));

  it('check made transaction', batchLogic.checkMadeTransaction.bind(batchLogic));
});
