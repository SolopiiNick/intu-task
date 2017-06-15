import Base from '../utils/Base';

class History extends Base {
  get url() {
    return `${this.baseUrl}/batches`;
  }

  get selector() { return $('button[aria-label="Current Batch"]'); }

  get historyTab() {
    return element(by.xpath('//*[@id="vertical-navigation"]/ms-navigation/ul/li[4]/div/a/span'));
  }

  get allTransactionsTab() {
    return element(by.xpath('//*[@id="batches"]/div[2]/div/md-tabs/md-tabs-wrapper/md-tabs-canvas/' +
      'md-pagination-wrapper/md-tab-item[3]'));
  }

  voidFilter() {
    return element(by.css('.quick-filters-item.status.voided'));
  }

  get queuedTab() {
    return element(by.css('md-tab-item[aria-controls="tab-content-47"]'));
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

  get refundButton() {
    return element(by.css('img[alt="refund"]'));
  }

  get deleteButton() {
    return element(by.css('md-icon[alt="delete"]'));
  }

  get okButton() {
    return element(by.cssContainingText('button span', 'Ok'));
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

  clickVoidFilter() {
    browser.executeScript('arguments[0].click();', this.voidFilter());
  }

}
export default History;
