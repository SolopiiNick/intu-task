import ProcessTransaction from './ProcessTransactions';

class ProcessTransactionCard extends ProcessTransaction {
  get url() { return `${this.baseUrl}/transaction?tab=card`; }

  get selector() { return $('div[name="cardForm"]'); }
}

export default new ProcessTransactionCard();
