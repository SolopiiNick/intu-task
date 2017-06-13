import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionCard } from '../pages';
import { cards } from '../dataMock';

class HistoryLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.pageObject = new ProcessTransactionCard();
  }
  createCardProcess() {
    this.pageObject.setExpireDate();
    this.pageObject.sendSimpleChargeTransaction(cards.discover);
    this.pageObject.sameAsBillingBlock();
    this.pageObject.submit();
  }
}

export default HistoryLogic;
