import { cards } from '../cards';

const { discover, visa, masterCard } = cards;

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
      surchargeInput: '1',
    },
  },
  madeMasterCard: {
    generalInfo: {
      cardNameInput: masterCard.name,
      cardNumberInput: masterCard.number,
      cardCvvInput: masterCard.cvv,
      cardExpireDropdown: masterCard.expire,
      amountInput: '74.43',
      taxInput: '1',
      surchargeInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11746',
      descriptionInput: 'test description visa',
      emailInput: 'an@codemotion.eu',
      poNumberInput: '0002',
    },
  },
};

export {
  historyDataMock,
};
