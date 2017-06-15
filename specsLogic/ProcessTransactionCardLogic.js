import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionCard } from '../pages';
import { processTransactionCardDataMock } from '../dataMock';

class ProcessTransactionCardLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new ProcessTransactionCard();
  }

  shouldBeVisible() {
    expect(this.page.isDisplayed()).toBe(true);
  }

  sendApproveWithCharge() {
    const { chargeSuccess } = processTransactionCardDataMock;

    this.page.fillFields(chargeSuccess);
    this.page.submit();

    this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }
}

export default ProcessTransactionCardLogic;
