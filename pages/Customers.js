import Base from '../utils/Base';

const fillCreateCustomerFields = Symbol('fill create customer fields');
const fillAddPaymentMethodCardFields = Symbol('fill add payment method card fields');
const fillAddPaymentMethodCheckFields = Symbol('fill add payment method check fields');
const fillCardExpireMonthField = Symbol('fill card expire month field');
const fillCardExpireYearField = Symbol('fill card expire year field');


class Customers extends Base {
  get url() { return `${this.baseUrl}/customer/list`; }

  get selector() { return $('.customers-list-wrapper'); }

  get hideFiltersButton() { return $('a[aria-label="Hide filters"]'); }
  get createNewButton() { return $('a[aria-label="Create new"]'); }
  get exportButton() { return $('a[aria-label="Export"]'); }

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
      cardTab: element(by.cssContainingText('md-tab-item span', 'card')),
      checkTab: element(by.cssContainingText('md-tab-item span', 'check')),
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

  get customersList() {
    return {
      createdCustomerItem: companyName => element(by.cssContainingText('.customer-item', companyName)),
      walletTab: {
        tab: element(by.cssContainingText('md-tab-item span', 'WALLET')),
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
    Object.keys(addPaymentMethodCheck).forEach(
      this.inputField.apply(this, [addPaymentMethodCheck, 'addPaymentMethodCheck']),
    );
  }

  [fillCardExpireMonthField](month) {
    this.addPaymentMethodCard.cardExpireMonth.dropdown.click();
    this.addPaymentMethodCard.cardExpireMonth.select(month).click();
  }

  [fillCardExpireYearField](year) {
    this.addPaymentMethodCard.cardExpireYear.dropdown.click();
    this.addPaymentMethodCard.cardExpireYear.select(year).click();
  }
}

export default Customers;
