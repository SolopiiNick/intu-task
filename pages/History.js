import ProcessTransactions from './ProcessTransactions';

const fillCardGenerailFields = Symbol('fill check tab general fields');
const fillCardBillingInfoFields = Symbol('fill check tab billing info fields');
const fillCardShippingInfoFields = Symbol('fill check tab shipping info fields');
const setChargeAction = Symbol('set charge action');
const clickProcessTransaction = Symbol('click on process transaction button');

export class ProcessTransactionsCard extends ProcessTransactions {

  get chargeActionButton() { return element(by.css('div[ng-class="{\\\'active\\\': cardForm.generalInfo.action === \\\'charge\\\'}"]')); }

  get expirationDateInput() { return element(by.name('expiry_month')); }

  get expirationDateSelect() { return element(by.css('md-option[value="4"]')); }

  get expirationYearInput() { return element(by.name('expiry_year')); }

  get expirationYearSelect() { return element(by.css('md-option[value="20"]')); }

  get generalInfo() {
    return {
      cardNameInput: element(by.name('cardName')),
      cardInput: element(by.name('cardsSearch')),
      cvvInput: element(by.name('CardCvc')),
      amountInput: element(by.model('cardForm.amount')),
      taxInput: element(by.name('tax_currency')),
      surchargeInput: element(by.name('surcharge_currency')),
      avsStreetInput: element(by.name('billing_street')),
      avsZipInput: element(by.name('billing_zip')),
      poNumberInput: element(by.name('po_number')),
      companyName: element(by.name('company_name')),
      descriptionInput: element(by.name('description')),
      emailInput: element(by.name('email')),
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
  get shippingInfo() {
    return {
      sameBillingInput: element(by.model('cardShippingInfoShow')),
      sameBillingTrue: element(by.model('sameAsBilling')),
    };
  }

  get submitButton() { return element(by.cssContainingText('[type=submit] span', 'Process')); }

  get() {
    browser.get(this.url);
    this.waitUntilDisplayed();
    this.openProcessTransactionsCardTab();
  }

  openProcessTransactionsCardTab() {
    this.transactionTab.click();
    this.cardTab.click();
    this.expirationDateInput.click();
    this.expirationDateSelect.click();
    this.expirationYearInput.click();
    this.expirationYearSelect.click();
  }

  sendSimpleChargeTransaction(fieldsData) {
    this[setChargeAction]();
    this[fillCardGenerailFields](fieldsData);
    this[fillCardBillingInfoFields](fieldsData);
    this[fillCardShippingInfoFields](fieldsData);
    this[clickProcessTransaction]();
  }

  sendDuplicateTransaction(fieldsData) {
    this.sendSimpleChargeTransaction(fieldsData);
  }

  [fillCardGenerailFields](fieldsData) {
    Object.keys(this.generalInfo).forEach(key => this.generalInfo[key]
      .sendKeys(fieldsData.generalInfo[key]));
  }
  [fillCardBillingInfoFields](billingData) {
    Object.keys(this.billingInfo).forEach(key => this.billingInfo[key]
      .sendKeys(billingData.billingInfo[key]));
  }
  [fillCardShippingInfoFields](shippingData) {
    Object.keys(this.shippingInfo).forEach(key => this.shippingInfo[key]
      .sendKeys(shippingData.shippingInfo[key]));
  }
  [setChargeAction]() {
    this.chargeActionButton.click();
  }
  [clickProcessTransaction]() {
    this.submitButton.click();
  }
}

export class HistoryPage extends ProcessTransactions {
  get url() {
    return `${this.baseUrl}/batches`;
  }

  get historyTab() {
    return element(by.xpath('//*[@id="vertical-navigation"]/ms-navigation/ul/li[4]/div/a/span'));
  }

  get currentBatch() {
    return element(by.css('button[aria-label="Current Batch"]'));
  }

  get checkTransaction() {
    this.historyTab.click();
    this.currentBatch.click();
  }
}

