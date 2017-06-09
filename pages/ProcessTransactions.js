import BasePage from './Base';

browser.ignoreSynchronization = true;

class ProcessTransactions extends BasePage {
  get url() {
    return `${this.baseUrl}/transaction`;
  }

  get cardTab() {
    return element(by.cssContainingText('span.ad-tabs-wide', 'Card'));
  }

  get checkTab() {
    return element(by.cssContainingText('span.ad-tabs-wide', 'Check'));
  }
}

export default new ProcessTransactions();
