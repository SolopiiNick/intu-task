import { ProcessTransactionCardLogic } from '../specsLogic';

const cardLogic = new ProcessTransactionCardLogic();

describe('Process Transaction - Card Tab', () => {
  beforeAll(cardLogic.beforeAll.bind(cardLogic));
  beforeEach(cardLogic.beforeEach.bind(cardLogic));

  it('should be visible', cardLogic.shouldBeVisible.bind(cardLogic));

  it('should approve transaction with "charge" action, without Customer and by using Discover',
    cardLogic.successApproveWithChargeByDiscover.bind(cardLogic));

  it('should approve transaction with "authorize" action, create Customer and by using Visa',
    cardLogic.successApproveWithAuthorizeCreateCustomerByVisa.bind(cardLogic));

  it('should approve transaction with "charge" action, with existing Customer and by using Master Card',
    cardLogic.successApproveWithChargeWithCustomerByMasterCard.bind(cardLogic));

  it('should approve transaction with "postauthorize" action, editing existing Customer and by using Amex',
    cardLogic.successApproveWithPostauthorizeEditingCustomerByAmex.bind(cardLogic));
});
