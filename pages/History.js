import Base from '../utils/Base';

const QUEUED_TAB = 'Queued';
const ALL_TRANSACTION_TAB = 'All transactions';
const VOID_FILTER_TEXT = 'voided';
const VOID_CONFIRM_TEXT = 'Are you sure you want to void transaction?';
const REFUND_CONFIRM_TEXT = 'Please enter the amount for refund.';
const REMOVED_CONFIRM_TEXT = 'Are you sure you want to move transaction to «Queued» page?';
const OK_BUTTON_TEXT = 'Ok';

class History extends Base {
  get url() {
    return `${this.baseUrl}/batches`;
  }

  get selector() {
    return $('button[aria-label="Current Batch"]');
  }

  get historyTab() {
    return element(by.xpath('//*[@id="vertical-navigation"]/ms-navigation/ul/li[4]/div/a/span'));
  }

  get queuedTab() {
    return element(by.cssContainingText('md-tab-item span', QUEUED_TAB));
  }

  get allTransactionsTab() {
    return element(by.cssContainingText('md-tab-item span', ALL_TRANSACTION_TAB));
  }

  get voidFilter() {
    return element(by.cssContainingText('.quick-filters-list', VOID_FILTER_TEXT));
  }

  get currentBatch() {
    return element(by.css('button[aria-label="Current Batch"]'));
  }

  get rowData() {
    return element(by.css('tr[ng-repeat="row in rowData"]'));
  }

  get voidButton() {
    return element(by.css('img[alt="void"]'));
  }

  get voidConfirmText() {
    return element(by.cssContainingText('.confirm-dialog-content', VOID_CONFIRM_TEXT));
  }

  get refundButton() {
    return element(by.css('img[alt="refund"]'));
  }

  get rechargeButton() {
    return element(by.css('img[alt="recharge"]'));
  }

  get refundAmountInput() {
    return element(by.css('input[name="refund"]'));
  }

  get refundSubmitButton() {
    return element(by.buttonText('Refund'));
  }

  get refundTextPopup() {
    return element(by.cssContainingText('.confirm-dialog-content', REFUND_CONFIRM_TEXT));
  }

  get removedButton() {
    return element(by.css('md-icon[alt="delete"]'));
  }

  get removedTextPopup() {
    return element(by.cssContainingText('.confirm-dialog-content', REMOVED_CONFIRM_TEXT));
  }

  get removedNotification() {
    return element(by.css('div[layout-align="space-between center"]'));
  }

  get okButton() {
    return element(by.cssContainingText('button span', OK_BUTTON_TEXT));
  }

  get repeaterData() {
    return element.all(by.repeater('row in rowData'));
  }

  itemTitleElement(cell) {
    cell.element(by.class('md-cell ng-binding ng-scope'));
  }

  clickVoidButton() {
    browser.executeScript('arguments[0].click();', this.voidButton);
  }

  clickRemoveButton() {
    browser.executeScript('arguments[0].click();', this.removedButton);
  }

  clickRefundButton() {
    browser.executeScript('arguments[0].click();', this.refundButton);
  }

  clickRechargeButton() {
    browser.executeScript('arguments[0].click();', this.rechargeButton);
  }

}
export default History;
