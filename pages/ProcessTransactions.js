import Base from '../utils/Base';

browser.ignoreSynchronization = true;

class ProcessTransactions extends Base {
  get url() {
    return `${this.baseUrl}/transaction`;
  }

  get transactionTab() {
    return element(by.linkText('Process Transaction'));
  }

  get cardTab() {
    return element(by.cssContainingText('span.ad-tabs-wide', 'Card'));
  }

  get checkTab() {
    return element(by.cssContainingText('span.ad-tabs-wide', 'Check'));
  }
}

export default ProcessTransactions;
