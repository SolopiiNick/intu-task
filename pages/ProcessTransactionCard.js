import Base from '../utils/Base';

const APPROVED_POPUP_TEXT = 'Approved';
const DECLINED_POPUP_TEXT = 'Declined!';
const ERROR_POPUP_TEXT = 'Error';

const fillCardGeneralFields = Symbol('fill check tab general fields');
const fillCardBillingInfoFields = Symbol('fill check tab billing info fields');
const fillCardShippingInfoFields = Symbol('fill check tab shipping info fields');
const fillStateField = Symbol('fill state in billing info fields');
const fillShippingStateField = Symbol('fill state in shipping info fields');
const selectCustomer = Symbol('select customer');
const selectAction = Symbol('select action');
const selectCard = Symbol('select card');
const fillCardExpireMonthField = Symbol('fill card expire month field');
const fillCardExpireYearField = Symbol('fill card expire year field');
const checkCreateCustomer = Symbol('check create customer');
const checkEditCustomer = Symbol('check edit customer');

class ProcessTransactionCard extends Base {
  get url() { return `${this.baseUrl}/transaction?tab=card`; }
  get selector() { return $('div[name="cardForm"]'); }

  get autoCompleteItem() {
    return element(by
      .css('md-virtual-repeat-container:not(.ng-hide) [md-extra-name="$mdAutocompleteCtrl.itemName"]'));
  }

  get checkBillingBlock() { return element(by.model('cardBillingInfoShow')); }
  get checkSameAsBilling() { return element(by.model('cardShippingInfoShow')); }

  get selectShippingBlock() { return element(by.model('cardShippingInfoShow')); }

  get processButton() { return $('button[ng-click="processCard()"]'); }

  get approvePopup() { return element(by.cssContainingText('.transactions-dialog-header h1', APPROVED_POPUP_TEXT)); }
  get declinedPopup() { return element(by.cssContainingText('.transactions-dialog-header h1', DECLINED_POPUP_TEXT)); }
  get errorPopup() { return element(by.cssContainingText('.transaction-error-header h1', ERROR_POPUP_TEXT)); }

  get completeButton() { return element(by.buttonText('Complete')); }
  get tryAgainButton() { return element(by.buttonText('Try Again')); }

  get checkShippingBlock() { return element(by.model('cardShippingInfoShow')); }

  get generalInfo() {
    return {
      customerSelectInput: element(by.name('customersSearch')),
      customerAutocompleteItem: $('md-virtual-repeat-container:not(.ng-hide) [md-extra-name="$mdAutocompleteCtrl.itemName"]'),
      actions: {
        chargeButton: $('.layout-align-space-around-center .item-btn-charge'),
        authorizeButton: $('.layout-align-space-around-center .item-btn-authorize'),
        postauthorizeButton: $('.layout-align-space-around-center .item-btn-postauthorize'),
        refundButton: $('.layout-align-space-around-center .item-btn-refund'),
      },
      cardNameInput: element(by.name('cardName')),
      cardNumberInput: element(by.name('cardsSearch')),
      cardAutocompleteItem: $('md-virtual-repeat-container:not(.ng-hide) [md-extra-name="$mdAutocompleteCtrl.itemName"]'),
      cardCvvInput: element(by.name('CardCvc')),
      cardExpireMonth: {
        dropdown: element(by.name('expiry_month')),
        select: month => element(by.css(`md-option[value="${month}"]`)),
      },
      cardExpireYear: {
        dropdown: element(by.name('expiry_year')),
        select: year => element(by.css(`md-option[value="${year}"]`)),
      },
      authNumberInput: element(by.name('auth_number')),
      amountInput: element(by.model('cardForm.amount')),
      taxInput: $('input[aria-label="TaxCurrency"]'),
      surchargeInput: $('input[aria-label="SurchargeCurrency"]'),
      avsStreetInput: element(by.name('billing_street')),
      avsZipInput: element(by.name('billing_zip')),
      poNumberInput: element(by.name('po_number')),
      companyNameInput: element(by.name('company_name')),
      invoiceNumber: element(by.name('invoice_number')),
      descriptionInput: element(by.model('cardForm.generalInfo.description')),
      emailInput: element(by.name('email')),
      // appeares after 'companyNameInput' has some text
      createCustomerCheckbox: element(by.css('md-checkbox[aria-label="Create a new customer"]')),
      // appeares after 'cardNumberInput' and 'avsStreetInput' has some text
      editCustomerCheckbox: element(by.css('md-checkbox[aria-label="Edit current customer"]')),
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
      state: element(by.name('billingStatesSearch')),
      phone: element(by.name('billing_phone')),
    };
  }

  get shippingInfo() {
    return {
      sameBillingInput: element(by.model('cardShippingInfoShow')),
      sameBillingTrue: element(by.model('sameAsBilling')),
      firstName: element(by.name('first_name2')),
      lastName: element(by.name('last_name2')),
      street: element(by.name('street3')),
      street2: element(by.name('street4')),
      city: element(by.name('city2')),
      zipCode: element(by.name('zip_code2')),
      state: element(by.name('shippingStatesSearch')),
      country: element(by.name('country')),
      phone: element(by.name('card_shipping_phone')),
    };
  }

  sameAsBillingBlock() {
    this.checkShippingBlock.click();
    this.checkSameAsBilling.click();
  }

  clickProcess() {
    this.processButton.click();
  }

  selectBillingBlock() {
    this.checkBillingBlock.click();
  }

  clickProcessBrowserExecute() {
    // Need to scroll to 'processButton', but than Protractor's '.click()' do not work here
    browser.executeScript('arguments[0].scrollIntoView()', this.processButton.getWebElement());
    browser.executeScript('arguments[0].click()', this.processButton.getWebElement());
  }

  clickComplete() {
    this.completeButton.click();
  }

  clickTryAgainButton() {
    this.tryAgainButton.click();
  }

  clickOnAutoCompleteItem() {
    this.waitUntilElementDisplayed(this.autoCompleteItem);
    this.autoCompleteItem.click();
  }

  clickSwitchShippingInfo() {
    this.selectShippingBlock.click();
  }

  fillStateAutoComplete(state) {
    this.billingInfo.state.sendKeys(state);
    this.clickOnAutoCompleteItem();
  }

  fillSippingStateAutoComplete(state) {
    this.shippingInfo.state.sendKeys(state);
    this.clickOnAutoCompleteItem();
  }


  fillFields(fields) {
    if (fields.generalInfo) this[fillCardGeneralFields](fields.generalInfo);
    if (fields.billingInfo) this[fillCardBillingInfoFields](fields.billingInfo);
    if (fields.shippingInfo) this[fillCardShippingInfoFields](fields.shippingInfo);
  }

  [fillCardGeneralFields](generalInfo) {
    Object.keys(generalInfo).forEach((key) => {
      if (key === 'customerSelectInput') {
        this[selectCustomer](generalInfo.customerSelectInput);
        return;
      }

      if (key === 'actionSelect') {
        this[selectAction](generalInfo.actionSelect);
        return;
      }

      if (key === 'cardNumberInput' && generalInfo.cardNumberInput === 'autocomplete') {
        this[selectCard]();
        return;
      }

      if (key === 'cardExpireMonth') {
        this[fillCardExpireMonthField](generalInfo.cardExpireMonth);
        return;
      }

      if (key === 'cardExpireYear') {
        this[fillCardExpireYearField](generalInfo.cardExpireYear);
        return;
      }

      if (key === 'createCustomerCheckbox') {
        this[checkCreateCustomer]();
        return;
      }

      if (key === 'editCustomerCheckbox') {
        this[checkEditCustomer]();
        return;
      }

      this.inputField.apply(this, [generalInfo, 'generalInfo'])(key);
    });
  }

  [fillCardBillingInfoFields](billingInfo) {
    Object.keys(billingInfo).forEach((key) => {
      if (key === 'checkBillingBlock') {
        this.selectBillingBlock(billingInfo.checkBillingBlock);
        return;
      }
      if (key === 'state') {
        this[fillStateField](billingInfo.state);
        return;
      }
      this.inputField.apply(this, [billingInfo, 'billingInfo'])(key);
    });
  }

  [fillCardShippingInfoFields](shippingInfo) {
    Object.keys(shippingInfo).forEach((key) => {
      if (key === 'firstName') {
        this.clickSwitchShippingInfo(shippingInfo.selectShippingBlock);
        return;
      }
      if (key === 'state') {
        this[fillShippingStateField](shippingInfo.state);
        return;
      }
      this.inputField.apply(this, [shippingInfo, 'shippingInfo'])(key);
    });
  }

  [selectCustomer](customerName) {
    this.generalInfo.customerSelectInput.sendKeys(customerName);
    this.waitUntilElementDisplayed(this.generalInfo.customerAutocompleteItem);
    this.generalInfo.customerAutocompleteItem.click();
  }

  [selectAction](action) {
    switch (action) {
      case 'charge':
        this.generalInfo.actions.chargeButton.click();
        break;
      case 'authorize':
        this.generalInfo.actions.authorizeButton.click();
        break;
      case 'postauthorize':
        this.generalInfo.actions.postauthorizeButton.click();
        break;
      case 'refund':
        this.generalInfo.actions.refundButton.click();
        break;
      default:
        this.generalInfo.actions.chargeButton.click();
    }
  }

  [selectCard]() {
    this.generalInfo.cardNumberInput.click();
    this.waitUntilElementDisplayed(this.generalInfo.cardAutocompleteItem);
    this.generalInfo.cardAutocompleteItem.click();
  }

  [fillCardExpireMonthField](month) {
    this.generalInfo.cardExpireMonth.dropdown.click();
    this.generalInfo.cardExpireMonth.select(month).click();
  }

  [fillCardExpireYearField](year) {
    this.generalInfo.cardExpireYear.dropdown.click();
    this.generalInfo.cardExpireYear.select(year).click();
  }

  [checkCreateCustomer]() {
    this.generalInfo.createCustomerCheckbox.click();
  }

  [checkEditCustomer]() {
    this.generalInfo.editCustomerCheckbox.click();
  }

  [fillStateField](state) {
    this.fillStateAutoComplete(state);
  }

  [fillShippingStateField](state) {
    this.fillSippingStateAutoComplete(state);
  }
}

export default ProcessTransactionCard;
