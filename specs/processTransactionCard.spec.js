import { processTransactionCard } from '../pages';

describe('Process Transaction - Card Tab', () => {
  beforeAll(async () => {
    await processTransactionCard.get();
    processTransactionCard.cardTab.click();
  });

  it('shoud be visible', () => {
    expect(processTransactionCard.isDisplayed()).toBe(true);
  });
});
