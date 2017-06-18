import Base from '../utils/Base';

const WALLET_TAB_TEXT = 'WALLET';
const CREATE_CUSTOMER_COMPLETE_BUTTON_TEXT = 'Complete';
const CHECK_TAB_TEXT = 'check';

const fillCheckGenerailFields = Symbol('fill check tab general fields');
const fillTransactionTypeInput = Symbol('fill transaction type select');
const fillAccountTypeInput = Symbol('fill account type select');

class Customers extends Base {
  get url() { return `${this.baseUrl}/customer/list`; }

  get selector() { return $('.customers-list'); }

  get walletTab() { return element(by.cssContainingText('md-tab-item span', WALLET_TAB_TEXT)); }
  get walletTabAddButton() { return element(by.css('.add-note-btn')); }
  get firstCustomer() { return element(by.css('.customer-item-wrapper:nth-child(1)')); }

  get checkTab() { return element(by.cssContainingText('md-tabs md-tab-item span', CHECK_TAB_TEXT)); }

  get companyName() { return element(by.model('customerFormData.company')); }

  get createCustomerButton() { return element(by.css('a[aria-label="Create new"]')); }
  get createCustomerCompleteButton() {
    return element(by.cssContainingText('form[name=customerForm] span',
      CREATE_CUSTOMER_COMPLETE_BUTTON_TEXT));
  }
  get addPaymentMethodButton() {
    return element(by.css('.add-card-dialog button[ng-click="sendCheckForm()"]'));
  }

  get accountTypeInput() { return element(by.name('account_type')); }
  accountTypeSelect(type) { return element(by.css(`md-option[value="${type}"]`)); }

  get transactionTypeInput() { return element(by.name('transaction_type')); }
  transactionTypeSelect(type) { return element(by.css(`md-option[value="${type}"]`)); }

  get generalInfo() {
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

  closePopupButton() { return element(by.css('.transaction-error button')); }

  completePopupButton() { return element(by.css('button[ng-click=completeAction()]')); }

  closePopup() {
    this.completePopupButton.click();
  }

  fillFields(field) {
    if (field.newCheckInfo) this[fillCheckGenerailFields](field.newCheckInfo);
  }

  [fillCheckGenerailFields](generalInfo) {
    Object.keys(generalInfo).forEach((key) => {
      if (key === 'accountTypeInput') return this[fillAccountTypeInput](generalInfo[key]);
      if (key === 'transactionTypeInput') return this[fillTransactionTypeInput](generalInfo[key]);
      this.inputField.apply(this, [generalInfo, 'generalInfo'])(key);
    });
  }

  [fillTransactionTypeInput](type) {
    this.transactionTypeInput.click();
    this.transactionTypeSelect(type).click();
  }

  [fillAccountTypeInput](type) {
    this.accountTypeInput.click();
    this.accountTypeSelect(type).click();
  }

  clickProcessTransaction() {
    this.submitButton.click();
  }

  createCustomer() {
    this.createCustomerButton.click();
  }

  fillCompanyName(name) {
    this.companyName.sendKeys(name);
  }

  completeCreateCustomer() {
    this.createCustomerCompleteButton.click();
  }

  selectCreatedCustomer() {
    this.firstCustomer.click();
  }

  selectWalletTab() {
    this.walletTab.click();
  }

  clickAddPaymentMethod() {
    this.walletTabAddButton.click();
  }

  clickSavePaymentMethod() {
    this.addPaymentMethodButton.click();
  }

  selectCheckPage() {
    this.checkTab.click();
  }
}

export default Customers;
