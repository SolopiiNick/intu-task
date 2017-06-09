import ProcessTransaction from './ProcessTransactions';

class ProcessTransactionCard extends ProcessTransaction {
  get selector() { return $('.transaction-card'); }

  get() {
    browser.get(this.url);
    this.waitUntilDisplayed();
  }
}

export default new ProcessTransactionCard();
