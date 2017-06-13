import { processTransactionCard } from '../pages';

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
