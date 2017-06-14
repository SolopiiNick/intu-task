import { cards } from '../cards';

const { discover } = cards;

const processTransactionCardDataMock = {
  chargeSuccess: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: discover.name,
      cardNumberInput: discover.number,
      cardCvvInput: discover.cvv,
      cardExpireDropdown: discover.expire,
      amountInput: '1012',
      taxInput: '0.92',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
};

export {
  processTransactionCardDataMock,
};
