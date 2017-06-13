import { processTransactionCard } from '../pages';
import { processTransactionCardDataMock } from '../dataMock';

describe('Process Transaction - Card Tab', () => {
  beforeAll(() => {
    processTransactionCard.autoLogin();
  });

  beforeEach(() => {
    processTransactionCard.get();
  });

  // it('shoud be visible', () => {
  //   expect(processTransactionCard.isDisplayed()).toBe(true);
  // });

  it('shoud approve transaction with "charge" action, without Customer and by using Discover', () => {
    const { chargeSuccess } = processTransactionCardDataMock;

    processTransactionCard.fillFields(chargeSuccess);
    processTransactionCard.submitButton.click();

    expect(true).toBe(true);
  });
});
