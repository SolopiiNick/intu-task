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

  approveWithChargeByDiscover() {
    const dataMock = processTransactionCardDataMock.approveWithChargeByDiscover;

    this.page.fillFields(dataMock);
    this.page.process();

    this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  approveWithAuthorizeCreateCustomerByVisa() {
    const dataMock = processTransactionCardDataMock.approveWithAuthorizeCreateCustomerByVisa;

    this.page.fillFields(dataMock);
    this.page.process();

    this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  async approveWithChargeWithCustomerByMasterCard() {
    const customersDataMock =
      processTransactionCardDataMock.approveWithChargeWithCustomerByMasterCard.customersPage;
    const cardDataMock =
      processTransactionCardDataMock.approveWithChargeWithCustomerByMasterCard
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

  async approveWithPostauthorizeEditingCustomerByAmex() {
    const customersDataMock =
      processTransactionCardDataMock.approveWithPostauthorizeEditingCustomerByAmex.customersPage;
    const cardDataMock =
      processTransactionCardDataMock.approveWithPostauthorizeEditingCustomerByAmex
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
    this.page.process();

    await this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  declineRepeatedlyWithChargeWithUnexistingCustomerByVisa() {
    const dataMock =
      processTransactionCardDataMock.declineRepeatedlyWithChargeWithUnexistingCustomerByVisa;

    this.page.fillFields(dataMock);
    this.page.process();

    this.page.waitUntilElementDisplayed(this.page.declinedPopup);
    this.page.tryAgainButton.click();
    this.page.waitUntilElementDisplayed(this.page.declinedPopup);

    expect(this.page.isElementDisplayed(this.page.declinedPopup)).toBe(true);
  }

  async declineRepeatedlyWithChargeWithCustomerByDiscover() {
    const customersDataMock =
      processTransactionCardDataMock.declineRepeatedlyWithChargeWithCustomerByDiscover
      .customersPage;
    const cardDataMock =
      processTransactionCardDataMock.declineRepeatedlyWithChargeWithCustomerByDiscover
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

    await this.page.waitUntilElementDisplayed(this.page.declinedPopup);
    this.page.tryAgainButton.click();
    await this.page.waitUntilElementDisplayed(this.page.declinedPopup);

    expect(this.page.isElementDisplayed(this.page.declinedPopup)).toBe(true);
  }
}

export default ProcessTransactionCardLogic;
