// page is non-angular

import Base from '../utils/Base';

browser.ignoreSynchronization = false;

class HistoryPage extends Base {
  get url() {
    return `${this.baseUrl}/batches`;
  }

  get historyTab() {
    return element(by.xpath('//*[@id="vertical-navigation"]/ms-navigation/ul/li[4]/div/a/span'));
  }

  get currentBatch() {
    return element(by.css('button[aria-label="Current Batch"]'));
  }
}

export default new HistoryPage();

