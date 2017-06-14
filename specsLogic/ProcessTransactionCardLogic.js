import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionCard } from '../pages';
import { cards } from '../dataMock';

class ProcessTransactionCardLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new ProcessTransactionCard();
  }
  createCardProcess() {
    this.page.setExpireDate();
    this.page.sendSimpleChargeTransaction(cards.discover);
    this.page.sameAsBillingBlock();
    this.page.submit();
  }

  checkMadeTransaction() {

  }
}

export default ProcessTransactionCardLogic;
