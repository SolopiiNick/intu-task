import Base from '../utils/Base';

const APPROVED_POPUP_TEXT = 'Approved';
const ERROR_POPUP_TEXT = 'Error';
const DUPLICATE_POPUP_TEXT = 'Duplicate transaction in progress, please try again';

const fillCheckGenerailFields = Symbol('fill check tab general fields');
const fillCheckBillingInfoFields = Symbol('fill check tab billing info fields');
const fillCheckRecurringInfoFields = Symbol('fill check tab recurring info fields');
const fillTransactionTypeInput = Symbol('fill transaction type select');
const fillAccountTypeInput = Symbol('fill account type select');

class ProcessTransactionsCheck extends Base {
  get url() { return `${this.baseUrl}/transaction?tab=check`; }

  get selector() { return $('form[name="checkingForm"]'); }

  get checkActionButton() { return element(by.css('form[name=checkingForm] .item-btn-charge')); }
  get refundActionButton() { return element(by.css('form[name=checkingForm] .item-btn-refund span')); }

  get generalInfo() {
    return {
      checkNameInput: element(by.name('check_name')),
      accountTypeInput: element(by.name('account_type')),
      transactionTypeInput: element(by.name('transaction_type')),
      routingNumberInput: element(by.name('routingNumber')),
      accountNumberInput: element(by.name('checksSearch')),
      amountInput: element(by.model('checkForm.amount')),
      taxInput: element(by.model('checkForm.taxCurrency')),
      surchargeInput: element(by.model('checkForm.surchargeCurrency')),
      avsStreetInput: element(by.model('checkForm.generalInfo.billingAddress')),
      avsZipInput: element(by.model('checkForm.generalInfo.billingZip')),
      poNumberInput: element(by.model('checkForm.generalInfo.po')),
      companyName: element(by.model('checkForm.generalInfo.company')),
      descriptionInput: element(by.model('checkForm.generalInfo.description')),
      emailInput: element(by.model('checkForm.generalInfo.email')),
      billingSwitchInput: element(by.model('checkBillingInfoShow')),
    };
  }
  get billingInfo() {
    return {
      firstName: element(by.css('form[name=checkingForm] input[name=first_name]')),
      lastName: element(by.css('form[name=checkingForm] input[name=last_name]')),
      street: element(by.css('form[name=checkingForm] input[name=street]')),
      street2: element(by.css('form[name=checkingForm] input[name=street2]')),
      city: element(by.css('form[name=checkingForm] input[name=city]')),
      zipCode: element(by.css('form[name=checkingForm] input[name=zip_code]')),
      country: element(by.css('form[name=checkingForm] input[name=country]')),
      state: element(by.css('form[name=checkingForm] input[name=billingStatesSearchCheck]')),
      phone: element(by.css('form[name=checkingForm] input[name=billing_phone]')),
    };
  }
  get newCustomerInput() { return element(by.css('form[name=checkingForm] md-checkbox[ng-model=createNewCustomer]')); }
  get editCustomerInput() { return element(by.css('form[name=checkingForm] md-checkbox[ng-model=updateCurrentCustomer]')); }
  get customerInput() { return element(by.css('form[name=checkingForm] input[name=customersSearchCheck]')); }
  get checkBillingBlock() { return element(by.model('checkBillingInfoShow')); }
  get checkShippingBlock() { return element(by.model('checkShippingInfoShow')); }
  get checkRecurringBlock() { return element(by.model('checkRecurringInfoShow')); }

  get accountTypeInput() { return element(by.css('form[name=checkingForm] [name=account_type]')); }
  accountTypeSelect(type) { return element(by.css(`md-option[value="${type}"]`)); }

  get transactionTypeInput() { return element(by.css('form[name=checkingForm] [name=transaction_type]')); }
  transactionTypeSelect(type) { return element(by.css(`md-option[value="${type}"]`)); }

  get paymentTitle() { return element(by.css('form[name=checkingForm] input[name=payment_title]')); }

  get startBillingDate() { return element(by.css('form[name=checkingForm] input[name=start_date]')); }
  getElementStartDate(date) {
    const selector = date
      || 'form[name=checkingForm] .moment-picker-specific-views tr:last-child td:last-child';
    return element(by.css(selector));
  }

  get everyPeriodInput() { return element(by.css('form[name=checkingForm] [name=period]')); }
  everyPeriodSelect(period) {
    return element(by.cssContainingText('._md-active md-option ._md-text', period));
  }

  get repeatTimesRadio() { return element(by.css('form[name=checkingForm] [value=remTransNumber]')); }
  get repeatTimesInput() { return element(by.css('form[name=checkingForm] input[name=repeat_amount]')); }
  get repeatOngoingRadio() { return element(by.css('form[name=checkingForm] [value=recurringOngoing]')); }

  get billFirstTransactionToday() { return element(by.model('checkForm.recurringInfo.billFirstToday')); }

  get autoCompleteItem() {
    return element(by
      .css('md-virtual-repeat-container:not(.ng-hide) [md-extra-name="$mdAutocompleteCtrl.itemName"]'));
  }

  get sameAsBillingInput() {
    return element(by.css('.same-as-billing md-checkbox[ng-show=cardBillingFieldsLength].ng-valid-parse'));
  }
  get submitButton() { return element(by.cssContainingText('form[name=checkingForm] [type=submit] span', 'Process')); }
  get approvePopup() { return element(by.cssContainingText('.transactions-dialog-header h1', APPROVED_POPUP_TEXT)); }
  get errorPopup() { return element(by.cssContainingText('.transaction-error-header h1', ERROR_POPUP_TEXT)); }
  get duplicatePopup() {
    return element(by.cssContainingText('.transaction-error-content-danger', DUPLICATE_POPUP_TEXT));
  }

  closePopupButton() { return element(by.css('.transaction-error button')); }

  completePopupButton() { return element(by.css('button[ng-click="completeAction()"]')); }

  closePopup() {
    this.completePopupButton.click();
  }

  fillFields(field) {
    if (field.generalInfo) this[fillCheckGenerailFields](field.generalInfo);
    if (field.billingInfo) this[fillCheckBillingInfoFields](field.billingInfo);
    if (field.recurringInfo) this[fillCheckRecurringInfoFields](field.recurringInfo);
  }

  [fillCheckGenerailFields](generalInfo) {
    Object.keys(generalInfo).forEach((key) => {
      if (key === 'accountTypeInput') return this[fillAccountTypeInput](generalInfo[key]);
      if (key === 'transactionTypeInput') return this[fillTransactionTypeInput](generalInfo[key]);
      this.inputField.apply(this, [generalInfo, 'generalInfo'])(key);
    });
  }

  [fillCheckBillingInfoFields](billingInfo) {
    this.checkBillingBlock.click();
    Object.keys(billingInfo).forEach(this.inputField.apply(this, [billingInfo, 'billingInfo']));
  }

  [fillCheckRecurringInfoFields](recurringInfo) {
    this.checkRecurringBlock.click();

    browser.executeScript('arguments[0].scrollIntoView()', this.paymentTitle.getWebElement());
    this.paymentTitle.sendKeys(recurringInfo.paymentTitle);
    this.setStartBillingDate(recurringInfo.startBillingDate);
    this.everyPeriodInput.click();
    this.everyPeriodSelect(recurringInfo.everyPeriodValue).click();

    if (recurringInfo.repeatTimes) this.setRepeatTimes(recurringInfo.repeatTimes);
    if (recurringInfo.ongoing) this.setOngoing();

    if (recurringInfo.billFirstTransaction) this.setFirstBillingToday();
  }

  [fillTransactionTypeInput](type) {
    this.transactionTypeInput.click();
    this.transactionTypeSelect(type).click();
  }

  [fillAccountTypeInput](type) {
    this.accountTypeInput.click();
    this.accountTypeSelect(type).click();
  }

  setChargeAction() {
    this.checkActionButton.click();
  }

  setRefundAction() {
    this.refundActionButton.click();
  }

  setNewCustomer() {
    this.newCustomerInput.click();
  }

  setEditCustomer() {
    this.editCustomerInput.click();
  }

  setSameAsBillingInput() {
    this.checkShippingBlock.click();
    this.sameAsBillingInput.click();
  }

  clickOnAutoCompleteItem() {
    this.waitUntilElementDisplayed(this.autoCompleteItem);
    this.autoCompleteItem.click();
  }

  fillCustomerAutoComplete(companyName) {
    this.customerInput.sendKeys(companyName);
    this.clickOnAutoCompleteItem();
  }

  fillAccountNumberAutoComplete() {
    this.generalInfo.accountNumberInput.click();
    this.clickOnAutoCompleteItem();
  }

  setStartBillingDate(date = null) {
    this.startBillingDate.click();
    const selectedTD = this.getElementStartDate(date);
    browser.executeScript('arguments[0].scrollIntoView()', selectedTD.getWebElement());
    selectedTD.click();
  }

  setRepeatTimes(time) {
    this.repeatTimesRadio.click();
    this.repeatTimesInput.sendKeys(time);
  }

  setOngoing() {
    this.repeatOngoingRadio.click();
  }

  setFirstBillingToday() {
    this.billFirstTransactionToday.click();
  }

  clickProcessTransaction() {
    browser.executeScript('arguments[0].scrollIntoView()', this.submitButton.getWebElement());
    this.submitButton.click();
  }
}

export default ProcessTransactionsCheck;
