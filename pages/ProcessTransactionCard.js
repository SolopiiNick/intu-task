import Base from '../utils/Base';

const APPROVED_POPUP_TEXT = 'Approved';
const ERROR_POPUP_TEXT = 'Error';

const fillCardGeneralFields = Symbol('fill check tab general fields');
const fillCardBillingInfoFields = Symbol('fill check tab billing info fields');
const fillCardShippingInfoFields = Symbol('fill check tab shipping info fields');
const setChargeAction = Symbol('set charge action');

class ProcessTransactionCard extends Base {
  get url() { return `${this.baseUrl}/transaction?tab=card`; }

  get selector() { return $('div[name="cardForm"]'); }

  get chargeActionButton() { return element(by.css('div[ng-class="{\\\'active\\\': cardForm.generalInfo.action === \\\'charge\\\'}"]')); }

  get expirationMonthInput() { return element(by.name('expiry_month')); }

  expirationMonthSelect(month) { return element(by.css(`md-option[value="${month}"]`)); }

  get expirationYearInput() { return element(by.name('expiry_year')); }

  expirationYearSelect(year) { return element(by.css(`md-option[value="${year}"]`)); }

  get checkBillingBlock() { return element(by.model('cardShippingInfoShow')); }

  get checkSameAsBilling() { return element(by.model('cardShippingInfoShow')); }

  get submitButton() { return element(by.cssContainingText('[type=submit] span', 'Process')); }

  get approvePopup() { return element(by.cssContainingText('.transactions-dialog-header h1', APPROVED_POPUP_TEXT)); }
  get errorPopup() { return element(by.cssContainingText('.transaction-error-header h1', ERROR_POPUP_TEXT)); }

  get completeButton() { return element(by.buttonText('Complete')); }

  get generalInfo() {
    return {
      cardNameInput: element(by.name('cardName')),
      cardNumberInput: element(by.name('cardsSearch')),
      cardCvvInput: element(by.name('CardCvc')),
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

  fillCardExpireFields(month, year) {
    this.expirationMonthInput.click();
    this.expirationMonthSelect(month).click();
    this.expirationYearInput.click();
    this.expirationYearSelect(year).click();
  }

  sameAsBillingBlock() {
    this.checkBillingBlock.click();
    this.checkSameAsBilling.click();
  }

  submit() {
    this.submitButton.click();
  }

  complete() {
    this.completeButton.click();
  }

  selectAction(action) {
    switch (action) {
      case 'charge':
        this[setChargeAction]();
        break;
      default:
        this[setChargeAction]();
    }
  }

  fillFields(fields) {
    if (fields.generalInfo) this[fillCardGeneralFields](fields.generalInfo);
    if (fields.billingInfo) this[fillCardBillingInfoFields](fields.billingInfo);
    if (fields.shippingInfo) this[fillCardShippingInfoFields](fields.shippingInfo);
  }

  [fillCardGeneralFields](generalInfo) {
    Object.keys(generalInfo).forEach((key) => {
      if (key === 'actionSelect') {
        this.selectAction(generalInfo.actionSelect);
        return;
      }

      if (key === 'cardExpireDropdown') {
        const { month, year } = generalInfo.cardExpireDropdown;
        this.fillCardExpireFields(month, year);
        return;
      }

      this.inputField.apply(this, [generalInfo, 'generalInfo'])(key);
    });
  }
  [fillCardBillingInfoFields](billingInfo) {
    Object.keys(billingInfo).forEach(key => this.billingInfo[key].sendKeys(billingInfo[key]));
  }
  [fillCardShippingInfoFields](shippingInfo) {
    Object.keys(shippingInfo).forEach(key => this.shippingInfo[key].sendKeys(shippingInfo[key]));
  }
  [setChargeAction]() {
    this.chargeActionButton.click();
  }
}

export default ProcessTransactionCard;
