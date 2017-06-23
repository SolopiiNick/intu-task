import { ProcessTransactionCardLogic } from '../specsLogic';

const cardLogic = new ProcessTransactionCardLogic();

describe('Process Transaction - Card Tab', () => {
  beforeAll(cardLogic.beforeAll.bind(cardLogic));
  beforeEach(cardLogic.beforeEach.bind(cardLogic));

  it('should be visible', cardLogic.shouldBeVisible.bind(cardLogic));

  it('should approve transaction with "charge" action, without Customer and by using Discover',
    cardLogic.approveWithChargeByDiscover.bind(cardLogic));

  it('should approve transaction with "authorize" action, create Customer and by using Visa',
    cardLogic.approveWithAuthorizeCreateCustomerByVisa.bind(cardLogic));

  it('should approve transaction with "charge" action, with existing Customer and by using Master Card',
    cardLogic.approveWithChargeWithCustomerByMasterCard.bind(cardLogic));

  it('should approve transaction with "postauthorize" action, editing existing Customer and by using Amex',
    cardLogic.approveWithPostauthorizeEditingCustomerByAmex.bind(cardLogic));

  it('should decline repeatedly transaction with "charge" action, with unexisting Customer and by using Visa',
    cardLogic.declineRepeatedlyWithChargeWithUnexistingCustomerByVisa.bind(cardLogic));

  it('should decline repeatedly transaction with "charge" action, with existing Customer and by using Discover',
    cardLogic.declineRepeatedlyWithChargeWithCustomerByDiscover.bind(cardLogic));

  it('should error transaction with "charge" action, with existing Customer and by using Amex',
    cardLogic.errorWithChargeWithExistingCustomerByAmex.bind(cardLogic));
});
