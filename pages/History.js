import Base from '../utils/Base';

class History extends Base {
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

export default new History();
