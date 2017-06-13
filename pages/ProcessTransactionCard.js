import Base from '../utils/Base';

class ProcessTransactionCard extends Base {
  get url() { return `${this.baseUrl}/transaction?tab=card`; }

  get selector() { return $('div[name="cardForm"]'); }
}

export default new ProcessTransactionCard();
