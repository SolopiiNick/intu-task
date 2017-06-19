import { cards } from '../cards';

const { discover, visa, masterCard } = cards;

const processTransactionCardDataMock = {
  successApproveWithChargeByDiscover: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: discover.name,
      cardNumberInput: discover.number,
      cardCvvInput: discover.cvv,
      cardExpireMonth: discover.expire.month,
      cardExpireYear: discover.expire.year,
      amountInput: '1012',
      taxInput: '0.92',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
  successApproveWithAuthorizeCreateCustomerByVisa: {
    generalInfo: {
      actionSelect: 'authorize',
      cardNameInput: visa.name,
      cardNumberInput: visa.number,
      cardCvvInput: visa.cvv,
      cardExpireMonth: visa.expire.month,
      cardExpireYear: visa.expire.year,
      amountInput: '75',
      taxInput: '1',
      surchargeInput: '0.31',
      companyNameInput: 'Test Process Transaction Card 1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      createCustomerCheckbox: true,
    },
  },
  successApproveWithChargeWithCustomerByMasterCard: {
    customersPage: {
      createCustomer: {
        companyNameInput: 'Test Process Transaction Card 2',
      },
      addPaymentMethodCard: {
        cardNameInput: masterCard.name,
        cardNumberInput: masterCard.number,
        cardExpireMonth: masterCard.expire.month,
        cardExpireYear: masterCard.expire.year,
        avsStreetInput: '1307 Broad Hollow Road',
        avsZipInput: '11747',
      },
    },
    processTransactionCardPage: {
      generalInfo: {
        customerSelectInput: 'Test Process Transaction Card 2',
        actionSelect: 'charge',
        cardNumberInput: 'autocomplete',
        cardCvvInput: masterCard.cvv,
        amountInput: '74',
        taxInput: '0.43',
        surchargeInput: '2',
      },
    },
  },
};

export {
  processTransactionCardDataMock,
};
