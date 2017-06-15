import Base from '../utils/Base';

class History extends Base {
  get url() {
    return `${this.baseUrl}/batches`;
  }

  get selector() { return $('button[aria-label="Current Batch"]'); }

  get historyTab() {
    return element(by.xpath('//*[@id="vertical-navigation"]/ms-navigation/ul/li[4]/div/a/span'));
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
    return element(by.css('button[aria-label="Ok"]'));
  }

  get repeaterData() {
    return element.all(by.repeater('row in rowData'));
  }

  itemTitleElement(cell) {
    cell.element(by.class('md-cell ng-binding ng-scope'));
  }


}
export default History;
