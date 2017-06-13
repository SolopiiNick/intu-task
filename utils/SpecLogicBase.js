import { ProcessTransactionCard } from '../pages';

const processTransactionCard = new ProcessTransactionCard();

class SpecLogicBase {
  constructor() {
    this.pageObject = null;
  }
  beforeAll() {
    processTransactionCard.autoLogin();
  }
  beforeEach() {
    this.pageObject.get();
  }
}

export default SpecLogicBase;
