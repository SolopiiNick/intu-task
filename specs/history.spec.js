import { CardLogic } from '../specsLogic';

const cardLogic = new CardLogic();

describe('Process Transaction - Card Tab', () => {
  beforeAll(cardLogic.beforeAll.bind(cardLogic));
  beforeEach(cardLogic.beforeEach.bind(cardLogic));

  it('create card process', cardLogic.createCardProcess.bind(cardLogic));
});
