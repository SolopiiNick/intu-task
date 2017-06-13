import Base from '../utils/Base';

const fillCheckGenerailFields = Symbol('fill check tab general fields');
const fillCheckBillingInfoFields = Symbol('fill check tab billing info fields');
const setChargeAction = Symbol('set charge action');
const clickProcessTransaction = Symbol('click on process transaction button');

class ProcessTransactionsCheck extends Base {
  get url() { return `${this.baseUrl}/transaction?tab=check`; }

  get checkActionButton() { return element(by.css('form[name=checkingForm] .item-btn-charge')); }

  get generalInfo() {
    return {
      checkNameInput: element(by.name('check_name')),
      accountTypeInput: element(by.name('account_type')),
      transactionTypeInput: element(by.name('transaction_type')),
      routingNumberInput: element(by.name('routingNumber')),
      accountNumberInput: element(by.name('checksSearch')),
      amountInput: element(by.name('amount')),
      taxInput: element(by.name('tax_currency')),
      surchargeInput: element(by.name('surcharge_currency')),
      avsStreetInput: element(by.name('billing_street')),
      avsZipInput: element(by.name('billing_zip')),
      poNumberInput: element(by.name('po_number')),
      companyName: element(by.name('company_name')),
      descriptionInput: element(by.name('description')),
      emailInput: element(by.name('email')),
      billingSwitchInput: element(by.model('checkBillingInfoShow')),
    };
  }
  get billingInfo() {
    return {
      firstName: element(by.name('first_name')),
      lastName: element(by.name('last_name')),
      street: element(by.name('street')),
      street2: element(by.name('street2')),
      city: element(by.name('city')),
      zipCode: element(by.name('zip_code')),
      country: element(by.name('country')),
      state: element(by.name('billingStatesSearchCheck')),
      phone: element(by.name('billing_phone')),
    };
  }
  get newCustomerInput() { return element(by.model('createNewCustomer')); }
  get submitButton() { return element(by.cssContainingText('[type=submit] span', 'Process')); }

  sendSimpleChargeTransaction(fieldsData) {
    this[setChargeAction]();
    this[fillCheckGenerailFields](fieldsData);
    this[clickProcessTransaction]();
  }

  sendDuplicateTransaction(fieldsData) {
    this.sendSimpleChargeTransaction(fieldsData);
  }

  [fillCheckGenerailFields](fieldsData) {
    Object.keys(this.generalInfo).forEach(key => this.generalInfo[key].sendKeys(fieldsData[key]));
  }
  [fillCheckBillingInfoFields](billingData) {
    Object.keys(this.billingInfo).forEach(key => this.billingInfo[key].sendKeys(billingData[key]));
  }
  [setChargeAction]() {
    this.checkActionButton.click();
  }
  [clickProcessTransaction]() {
    this.submitButton.click();
  }
}

export default new ProcessTransactionsCheck();
