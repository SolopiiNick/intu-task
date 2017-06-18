import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionCard, Customers } from '../pages';
import { processTransactionCardDataMock } from '../dataMock';

class ProcessTransactionCardLogic extends SpecBaseLogic {
  constructor() {
    super();
    this.page = new ProcessTransactionCard();
    this.customersPage = new Customers();
  }

  shouldBeVisible() {
    expect(this.page.isDisplayed()).toBe(true);
  }

  successApproveWithChargeByDiscover() {
    const dataMock = processTransactionCardDataMock.successApproveWithChargeByDiscover;

    this.page.fillFields(dataMock);
    this.page.process();

    this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  successApproveWithAuthorizeCreateCustomerByVisa() {
    const dataMock = processTransactionCardDataMock.successApproveWithAuthorizeCreateCustomerByVisa;

    this.page.fillFields(dataMock);
    this.page.process();

    this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  async successApproveWithChargeWithCustomerByMasterCard() {
    const customersDataMock =
      processTransactionCardDataMock.successApproveWithChargeWithCustomerByMasterCard.customersPage;
    const cardDataMock =
      processTransactionCardDataMock.successApproveWithChargeWithCustomerByMasterCard
      .processTransactionCardPage;

    await this.customersPage.get();

    this.customersPage.createNewButton.click();
    await this.customersPage.waitUntilElementDisplayed(this.customersPage.createCustomer.popup);
    this.customersPage.fillFields({ createCustomer: customersDataMock.createCustomer });
    this.customersPage.createCustomer.completeButton.click();

    const createdCustomerItem = this.customersPage.customersList.createdCustomerItem(
      customersDataMock.createCustomer.companyNameInput,
    );
    await this.customersPage.waitUntilElementDisplayed(createdCustomerItem);
    createdCustomerItem.click();
    this.customersPage.customersList.walletTab.tab.click();

    this.customersPage.customersList.walletTab.addButton.click();
    await this.customersPage.waitUntilElementDisplayed(this.customersPage.addPaymentMethod.popup);
    this.customersPage.addPaymentMethod.cardTab.click();

    this.customersPage.fillFields({ addPaymentMethodCard: customersDataMock.addPaymentMethodCard });
    this.customersPage.addPaymentMethod.addCardButton.click();

    this.page.get();

    this.page.fillFields(cardDataMock);
    // Need to scroll to 'processButton', but than Protractor's '.click()' do not work here
    browser.executeScript('arguments[0].scrollIntoView()', this.page.processButton.getWebElement());
    browser.executeScript('arguments[0].click()', this.page.processButton.getWebElement());

    await this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }
}

export default ProcessTransactionCardLogic;
