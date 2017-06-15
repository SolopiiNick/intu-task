import { HistoryLogic } from '../specsLogic';
const historyLogic = new HistoryLogic();

describe('Process Transaction - Batch', () => {
  beforeAll(historyLogic.beforeAll.bind(historyLogic));
  beforeEach(historyLogic.beforeEach.bind(historyLogic));

  it('should process Discover card  + check made transaction in History tab',
    historyLogic.checkMadeTransaction.bind(historyLogic));
  it('should process Visa card  + void and check made transaction in History tab',
    historyLogic.checkVoidTransaction.bind(historyLogic));
});
