import SpecBaseLogic from '../utils/SpecLogicBase';
import { History } from '../pages';

class HistoryLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new History();
  }
  checkMadeTransaction() {
    this.page.checkTransaction();
  }
}

export default HistoryLogic;
