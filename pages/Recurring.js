import Base from '../utils/Base';

// const RECURRING_TAB = 'Recurring';

class Recurring extends Base {
  get url() {
    return `${this.baseUrl}/recurring`;
  }

  get selector() {
    return element(by.id('batchesTableContainer'));
  }

  get recurringTab() {
    return element(by.css('.icon.icon-ic-refund-circle-actions'));
  }

  get viewButton() {
    return element.all(by.css('a[title="view"]'));
  }

  get recurringInfo() {
    return {
      paymentTitle: element(by.name('recurringName')),
    };
  }

  get paymentTitle() {
    return element(by.name('recurringName'));
  }

  get cardViewButton() {
    return element.all(by.css('.icon-eye'));
  }

  get toastNotification() {
    return element(by.css('md-toast .md-toast-wrapper .md-toast-body .md-toast-text'));
  }

  clickViewRecurringButton() {
    this.viewButton.get(0).click();
  }

  clickCardViewButton() {
    browser.executeScript('arguments[0].scrollIntoView()', this.cardViewButton.get(1).getWebElement());
    browser.executeScript('arguments[0].click()', this.cardViewButton.get(1).getWebElement());
  }

  get expandedContent() {
    return element(by.css('.ab-expanded-content')).all(by.css('tr'));
  }
}

export default Recurring;
