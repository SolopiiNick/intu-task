import { processTransactionCard } from '../pages';

import { cards } from '../dataMock';

describe('Process Transaction - Card Tab', () => {
  beforeAll(() => {
    processTransactionCard.autoLogin();
  });

  beforeEach(() => {
    processTransactionCard.get();
  });

  it('create card process', () => {
    processTransactionCard.setExpireDate();
    processTransactionCard.sendSimpleChargeTransaction(cards.discover);
    processTransactionCard.sameAsBillingBlock();
    processTransactionCard.submit();
  });
});
