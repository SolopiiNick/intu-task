import Base from '../utils/Base';

class History extends Base {
  get url() {
    return `${this.baseUrl}/batches`;
  }

  get selector() { return $('button[aria-label="Current Batch"]'); }

  get historyTab() {
    return element(by.xpath('//*[@id="vertical-navigation"]/ms-navigation/ul/li[4]/div/a/span'));
  }

  get currentBatch() {
    return element(by.css('button[aria-label="Current Batch"]'));
  }

  get rowData() {
    return element(by.css('tr[ng-repeat="row in rowData"]'));
  }

  checkTransaction() {
    this.historyTab.click();
    this.currentBatch.click();
    this.rowData.isPresent();
  }
}

export default History;
