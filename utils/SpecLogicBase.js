import { processTransactionCard } from '../pages';

class SpecLogicBase {
  beforeAll() {
    processTransactionCard.autoLogin();
  }
}

export default SpecLogicBase;
