import SpecBaseLogic from '../utils/SpecLogicBase';
import { History } from '../pages';

class HistoryLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new History();
  }
  checkMadeTransaction() {
    this.page.historyTab.click();
    this.page.currentBatch.click();
    this.page.rowData.isPresent();
  }
}

export default HistoryLogic;
