import { ProcessTransactionCardLogic } from '../specsLogic';

const cardLogic = new ProcessTransactionCardLogic();

describe('Process Transaction - Card Tab', () => {
  beforeAll(cardLogic.beforeAll.bind(cardLogic));
  beforeEach(cardLogic.beforeEach.bind(cardLogic));

  it('create card process', cardLogic.createCardProcess.bind(cardLogic));
});
