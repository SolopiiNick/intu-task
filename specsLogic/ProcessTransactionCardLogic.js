import SpecBaseLogic from '../utils/SpecLogicBase';
import { ProcessTransactionCard, Customers } from '../pages';
import { processTransactionCardDataMock } from '../dataMock';

const createNewCustomer = Symbol('create new customer');
const createNewCard = Symbol('create new card');
const createNewCustomerWithCard = Symbol('create new customer with card');

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
    this.page.clickProcess();

    this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  approveWithAuthorizeCreateCustomerByVisa() {
    const dataMock = processTransactionCardDataMock.approveWithAuthorizeCreateCustomerByVisa;

    this.page.fillFields(dataMock);
    this.page.clickProcess();

    this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  async approveWithChargeWithCustomerByMasterCard() {
    const customersDataMock =
      processTransactionCardDataMock.approveWithChargeWithCustomerByMasterCard.customersPage;
    const cardDataMock =
      processTransactionCardDataMock.approveWithChargeWithCustomerByMasterCard
      .processTransactionCardPage;

    this[createNewCustomerWithCard](customersDataMock);

    this.page.get();
    this.page.fillFields(cardDataMock);
    this.page.clickProcessBrowserExecute();

    await this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  async approveWithPostauthorizeEditingCustomerByAmex() {
    const customersDataMock =
      processTransactionCardDataMock.approveWithPostauthorizeEditingCustomerByAmex.customersPage;
    const cardDataMock =
      processTransactionCardDataMock.approveWithPostauthorizeEditingCustomerByAmex
      .processTransactionCardPage;

    this[createNewCustomerWithCard](customersDataMock);

    this.page.get();
    this.page.fillFields(cardDataMock);
    this.page.clickProcessBrowserExecute();

    await this.page.waitUntilElementDisplayed(this.page.approvePopup);

    expect(this.page.isElementDisplayed(this.page.approvePopup)).toBe(true);
  }

  declineRepeatedlyWithChargeWithUnexistingCustomerByVisa() {
    const dataMock =
      processTransactionCardDataMock.declineRepeatedlyWithChargeWithUnexistingCustomerByVisa;

    this.page.fillFields(dataMock);
    this.page.clickProcess();

    this.page.waitUntilElementDisplayed(this.page.declinedPopup);
    this.page.clickTryAgainButton();
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

    this[createNewCustomerWithCard](customersDataMock);

    this.page.get();
    this.page.fillFields(cardDataMock);
    this.page.clickProcessBrowserExecute();

    await this.page.waitUntilElementDisplayed(this.page.declinedPopup);
    this.page.clickTryAgainButton();
    await this.page.waitUntilElementDisplayed(this.page.declinedPopup);

    expect(this.page.isElementDisplayed(this.page.declinedPopup)).toBe(true);
  }

  errorWithChargeWithExistingCustomerByAmex() {
    const cardDataMock =
      processTransactionCardDataMock.errorWithChargeWithCustomerByAmex.processTransactionCardPage;
    const customersDataMock =
      processTransactionCardDataMock.errorWithChargeWithCustomerByAmex
        .customersPage;

    this[createNewCustomer](customersDataMock);

    this.page.get();
    this.page.fillFields(cardDataMock);
    this.page.clickProcess();

    this.page.waitUntilElementDisplayed(this.page.errorPopup);

    expect(this.page.isElementDisplayed(this.page.errorPopup)).toBe(true);
  }

  [createNewCustomerWithCard](customersDataMock) {
    this[createNewCustomer](customersDataMock);
    this[createNewCard](customersDataMock);
  }

  [createNewCustomer](customersDataMock) {
    this.customersPage.get();
    this.customersPage.clickCreateCustomer();
    this.customersPage.fillFields({ createCustomer: customersDataMock.createCustomer });
    this.customersPage.clickCompleteCreateCustomer();
  }

  [createNewCard](customersDataMock) {
    this.customersPage.selectCreatedCustomer(customersDataMock.createCustomer.companyNameInput);
    this.customersPage.selectWalletTab();
    this.customersPage.clickAddPaymentMethod();
    this.customersPage.selectCardTab();
    this.customersPage.fillFields({ addPaymentMethodCard: customersDataMock.addPaymentMethodCard });
    this.customersPage.clickAddCard();
  }
}

export default ProcessTransactionCardLogic;
