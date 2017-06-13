import Base from '../utils/Base';

const fillCardGeneralFields = Symbol('fill check tab general fields');
const setChargeAction = Symbol('set charge action');
const clickProcessTransaction = Symbol('click on process transaction button');

class ProcessTransactionCard extends Base {
  get url() { return `${this.baseUrl}/transaction?tab=card`; }

  get selector() { return $('div[name="cardForm"]'); }

  get chargeActionButton() { return element(by.css('div[ng-class="{\\\'active\\\': cardForm.generalInfo.action === \\\'charge\\\'}"]')); }

  get expirationDateInput() { return element(by.name('expiry_month')); }

  get expirationDateSelect() { return element(by.css('md-option[value="4"]')); }

  get expirationYearInput() { return element(by.name('expiry_year')); }

  get expirationYearSelect() { return element(by.css('md-option[value="20"]')); }

  get checkBillingBlock() { return element(by.model('cardShippingInfoShow')); }

  get checkSameAsBilling() { return element(by.model('cardShippingInfoShow')); }

  get submitButton() { return element(by.cssContainingText('[type=submit] span', 'Process')); }


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

  setExpireDate() {
    this.expirationDateInput.click();
    this.expirationDateSelect.click();
    this.expirationYearInput.click();
    this.expirationYearSelect.click();
  }

  sameAsBillingBlock() {
    this.checkBillingBlock.click();
    this.checkSameAsBilling.click();
  }

  submit() {
    this.submitButton.click();
  }

  fillFields(fieldsData) {
    if (fieldsData.generalInfo) this[fillCardGeneralFields](fieldsData);
  }

  sendSimpleChargeTransaction(fieldsData) {
    this[setChargeAction]();
    this.fillFields(fieldsData);
  }

  [fillCardGeneralFields](fieldsData) {
    Object.keys(fieldsData.generalInfo).forEach(this.inputField.apply(this, [fieldsData, 'generalInfo']));
  }
  [setChargeAction]() {
    this.chargeActionButton.click();
  }
  [clickProcessTransaction]() {
    this.submitButton.click();
  }
}

export default ProcessTransactionCard;
