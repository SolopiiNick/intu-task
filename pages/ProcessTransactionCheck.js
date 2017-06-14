import Base from '../utils/Base';

const APPROVED_POPUP_TEXT = 'Approved';
const ERROR_POPUP_TEXT = 'Error';
const DUPLICATE_POPUP_TEXT = 'Duplicate transaction in progress, please try again';

const fillCheckGenerailFields = Symbol('fill check tab general fields');
const fillCheckBillingInfoFields = Symbol('fill check tab billing info fields');

class ProcessTransactionsCheck extends Base {
  get url() { return `${this.baseUrl}/transaction?tab=check`; }

  get selector() { return $('form[name="checkingForm"]'); }

  get checkActionButton() { return element(by.css('form[name=checkingForm] .item-btn-charge')); }
  get refundActionButton() { return element(by.css('form[name=checkingForm] .item-btn-refund')); }

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
  get sameAsBillingInput() { return element(by.css('.same-as-billing md-checkbox[ng-show=cardBillingFieldsLength].ng-valid-parse')); }
  get submitButton() { return element(by.cssContainingText('[type=submit] span', 'Process')); }
  get confirmPopup() { return element(by.cssContainingText('.transactions-dialog-header h1', APPROVED_POPUP_TEXT)); }
  get errorPopup() { return element(by.cssContainingText('.transaction-error-header h1', ERROR_POPUP_TEXT)); }
  get duplicatePopup() {
    return element(by.cssContainingText('.transaction-error-content-danger', DUPLICATE_POPUP_TEXT));
  }

  closePopupButton() { return element(by.css('.transaction-error button')); }
  openProcessTransactionsCheckTab() {
    this.checkTab.click();
  }

  closePopup() {
    this.closePopupButton.click();
  }

  fillFields(field) {
    if (field.generalInfo) this[fillCheckGenerailFields](field.generalInfo);
    if (field.billingInfo) this[fillCheckBillingInfoFields](field.billingInfo);
  }

  [fillCheckGenerailFields](generalInfo) {
    Object.keys(generalInfo).forEach(this.inputField.apply(this, [generalInfo, 'generalInfo']));
  }
  [fillCheckBillingInfoFields](billingInfo) {
    Object.keys(billingInfo).forEach(this.inputField.apply(this, [billingInfo, 'billingInfo']));
  }
  setChargeAction() {
    this.checkActionButton.click();
  }
  setRefundAction() {
    this.checkActionButton.click();
  }
  setNewCustomer(value) {
    this.newCustomerInput.sendKeys(value);
  }
  setSameAsBillingInput() {
    this.sameAsBillingInput.click();
  }
  clickProcessTransaction() {
    this.submitButton.click();
  }
}

export default ProcessTransactionsCheck;
