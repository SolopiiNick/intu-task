import { HistoryLogic } from '../specsLogic';
const historyLogic = new HistoryLogic();

describe('Process Transaction - Batch', () => {
  beforeAll(historyLogic.beforeAll.bind(historyLogic));
  beforeEach(historyLogic.beforeEach.bind(historyLogic));

  it('should process Discover card  + check made transaction in History tab',
    historyLogic.checkMadeTransaction.bind(historyLogic));

  it('should process Visa card  + void and check made transaction in History tab',
    historyLogic.checkVoidTransaction.bind(historyLogic));

  it('should process Master card  + remove and check removed transaction in History tab',
    historyLogic.checkRemovedTransaction.bind(historyLogic));

  it('should process Amex card  + refund and check refunded transaction in History tab',
    historyLogic.checkRefundTransaction.bind(historyLogic));

  it('should process Visa + recharge and check out all fields on the Process Transaction page',
    historyLogic.checkRechargeTransaction.bind(historyLogic));

  it('all columns of the Queued table contain info according to processed transaction',
    historyLogic.checkMadeAuthTransaction.bind(historyLogic));

  it('all data of created transaction with existing Customer is correct on Queued tab',
    historyLogic.checkAuthorizeCreateCustomerByVisaInQueuedTAb.bind(historyLogic));
});

