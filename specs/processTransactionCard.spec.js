import { processTransactionCard } from '../pages';

describe('Process Transaction - Card Tab', () => {
  beforeAll(() => {
    processTransactionCard.autoLogin();
  });

  beforeEach(() => {
    processTransactionCard.get();
  });

  it('shoud be visible', () => {
    expect(processTransactionCard.isDisplayed()).toBe(true);
  });
});
