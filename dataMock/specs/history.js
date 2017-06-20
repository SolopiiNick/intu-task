import { cards } from '../cards';

const { discover, visa, masterCard, amex } = cards;

const historyDataMock = {
  madeDiscoverCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: discover.name,
      cardNumberInput: discover.number,
      cardCvvInput: discover.cvv,
      cardExpireDropdown: discover.expire,
      amountInput: '1012',
      taxInput: '0.92',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11746',
    },
  },
  madeVisaCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: visa.name,
      cardNumberInput: visa.number,
      cardCvvInput: visa.cvv,
      cardExpireDropdown: visa.expire,
      amountInput: '74.31',
      taxInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11746',
    },
  },
  madeMasterCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: masterCard.name,
      cardNumberInput: masterCard.number,
      cardCvvInput: masterCard.cvv,
      cardExpireDropdown: masterCard.expire,
      amountInput: '74.31',
      taxInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11746',
    },
  },
  madeAmexCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: amex.name,
      cardNumberInput: amex.number,
      cardCvvInput: amex.cvv,
      cardExpireDropdown: amex.expire,
      amountInput: '70',
      taxInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
};

export {
  historyDataMock,
};
