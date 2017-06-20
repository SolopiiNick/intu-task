import Base from '../utils/Base';

const WALLET_TAB_TEXT = 'WALLET';
const CHECK_TAB_TEXT = 'check';
const CARD_TAB_TEXT = 'card';

const fillCreateCustomerFields = Symbol('fill create customer fields');
const fillAddPaymentMethodCardFields = Symbol('fill add payment method card fields');
const fillAddPaymentMethodCheckFields = Symbol('fill add payment method check fields');
const fillCardExpireMonthField = Symbol('fill card expire month field');
const fillCardExpireYearField = Symbol('fill card expire year field');
const fillCheckTransactionTypeInput = Symbol('fill transaction type select');
const fillCheckAccountTypeInput = Symbol('fill account type select');

class Customers extends Base {
  get url() { return `${this.baseUrl}/customer/list`; }

  get selector() { return $('.customers-list'); }

  get hideFiltersButton() { return $('a[aria-label="Hide filters"]'); }
  get createNewButton() { return $('a[aria-label="Create new"]'); }
  get exportButton() { return $('a[aria-label="Export"]'); }

  get accountTypeInput() { return element(by.name('account_type')); }
  accountTypeSelect(type) { return element(by.css(`md-option[value="${type}"]`)); }

  get transactionTypeInput() { return element(by.name('transaction_type')); }
  transactionTypeSelect(type) { return element(by.css(`md-option[value="${type}"]`)); }

  get createCustomer() {
    return {
      popup: $('form[name="customerForm"]'),
      companyNameInput: $('input[aria-label="Company Name"]'),
      cancelButton: $('button[aria-label="Cancel"]'),
      completeButton: $('button[aria-label="Complete"]'),
    };
  }

  get addPaymentMethod() {
    return {
      popup: $('div.create-customer-header'),
      cardTab: element(by.cssContainingText('md-tab-item span', CARD_TAB_TEXT)),
      checkTab: element(by.cssContainingText('md-tab-item span', CHECK_TAB_TEXT)),
      addCardButton: $('button[ng-click="sendCardForm()"]'),
      addCheckButton: $('button[ng-click="sendCheckForm()"]'),
      cancelButton: $('button[ng-click="c()"]'),
    };
  }

  get addPaymentMethodCard() {
    return {
      cardNameInput: element(by.name('card_name')),
      cardNumberInput: element(by.name('card_number')),
      cardExpireMonth: {
        dropdown: element(by.name('expiry_month')),
        select: month => element(by.css(`md-option[ng-value="${month}"]`)),
      },
      cardExpireYear: {
        dropdown: element(by.name('expiry_year')),
        select: year => element(by.css(`md-option[ng-value="${year}"]`)),
      },
      avsStreetInput: element(by.name('card_address')),
      avsZipInput: element(by.name('cardZip')),
    };
  }

  get addPaymentMethodCheck() {
    return {
      checkNameInput: element(by.css('form[name=customerAddCheckForm] input[name=check_name]')),
      accountTypeInput: element(by.css('form[name=customerAddCheckForm] input[name=first_name]')),
      transactionTypeInput: element(by.css('form[name=customerAddCheckForm] input[name=first_name]')),
      routingNumberInput: element(by.css('form[name=customerAddCheckForm] input[name=routingNumber]')),
      accountNumberInput: element(by.css('form[name=customerAddCheckForm] input[name=accountNumber]')),
      avsStreetInput: element(by.css('form[name=customerAddCheckForm] input[name=address]')),
      avsZipInput: element(by.css('form[name=customerAddCheckForm] input[name=zip]')),
    };
  }

  get customersList() {
    return {
      createdCustomerItem: companyName => element(by.cssContainingText('.customer-item', companyName)),
      walletTab: {
        tab: element(by.cssContainingText('md-tab-item span', WALLET_TAB_TEXT)),
        addButton: $('button[aria-label="Add"]'),
      },
    };
  }

  fillFields({ createCustomer, addPaymentMethodCard, addPaymentMethodCheck }) {
    if (createCustomer) this[fillCreateCustomerFields](createCustomer);
    if (addPaymentMethodCard) this[fillAddPaymentMethodCardFields](addPaymentMethodCard);
    if (addPaymentMethodCheck) this[fillAddPaymentMethodCheckFields](addPaymentMethodCheck);
  }

  [fillCreateCustomerFields](createCustomer) {
    Object.keys(createCustomer).forEach(
      this.inputField.apply(this, [createCustomer, 'createCustomer']),
    );
  }

  [fillAddPaymentMethodCardFields](addPaymentMethodCard) {
    Object.keys(addPaymentMethodCard).forEach((key) => {
      if (key === 'cardExpireMonth') {
        this[fillCardExpireMonthField](addPaymentMethodCard.cardExpireMonth);
        return;
      }

      if (key === 'cardExpireYear') {
        this[fillCardExpireYearField](addPaymentMethodCard.cardExpireYear);
        return;
      }

      this.inputField.apply(this, [addPaymentMethodCard, 'addPaymentMethodCard'])(key);
    });
  }

  [fillAddPaymentMethodCheckFields](addPaymentMethodCheck) {
    Object.keys(addPaymentMethodCheck).forEach((key) => {
      if (key === 'accountTypeInput') {
        this[fillCheckAccountTypeInput](addPaymentMethodCheck[key]);
        return;
      }

      if (key === 'transactionTypeInput') {
        this[fillCheckTransactionTypeInput](addPaymentMethodCheck[key]);
        return;
      }

      this.inputField.apply(this, [addPaymentMethodCheck, 'addPaymentMethodCheck'])(key);
    });
  }

  [fillCardExpireMonthField](month) {
    this.addPaymentMethodCard.cardExpireMonth.dropdown.click();
    this.addPaymentMethodCard.cardExpireMonth.select(month).click();
  }

  [fillCardExpireYearField](year) {
    this.addPaymentMethodCard.cardExpireYear.dropdown.click();
    this.addPaymentMethodCard.cardExpireYear.select(year).click();
  }

  [fillCheckTransactionTypeInput](type) {
    this.transactionTypeInput.click();
    this.transactionTypeSelect(type).click();
  }

  [fillCheckAccountTypeInput](type) {
    this.accountTypeInput.click();
    this.accountTypeSelect(type).click();
  }

  clickCreateCustomer() {
    this.createNewButton.click();
  }

  fillCompanyName(companyName) {
    this.createCustomer.companyNameInput.sendKeys(companyName);
  }

  clickCompleteCreateCustomer() {
    this.createCustomer.completeButton.click();
  }

  selectCreatedCustomer(companyName) {
    this.customersList.createdCustomerItem(companyName).click();
  }

  selectWalletTab() {
    this.customersList.walletTab.tab.click();
  }

  clickAddPaymentMethod() {
    this.customersList.walletTab.addButton.click();
  }

  selectCardTab() {
    this.addPaymentMethod.cardTab.click();
  }

  selectCheckTab() {
    this.addPaymentMethod.checkTab.click();
  }

  clickAddCard() {
    this.addPaymentMethod.addCardButton.click();
  }

  clickAddCheck() {
    this.addPaymentMethod.addCheckButton.click();
  }
}

export default Customers;
