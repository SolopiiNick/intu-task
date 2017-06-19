import { cards } from '../cards';

const { discover, visa, visaDeclined, masterCard, amex } = cards;

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
  successApproveWithPostauthorizeEditingCustomerByAmex: {
    customersPage: {
      createCustomer: {
        companyNameInput: 'Test Process Transaction Card 5',
      },
      addPaymentMethodCard: {
        cardNameInput: amex.name,
        cardNumberInput: amex.number,
        cardExpireMonth: amex.expire.month,
        cardExpireYear: amex.expire.year,
      },
    },
    processTransactionCardPage: {
      generalInfo: {
        customerSelectInput: 'Test Process Transaction Card 5',
        actionSelect: 'postauthorize',
        cardNumberInput: 'autocomplete',
        cardCvvInput: amex.cvv,
        authNumberInput: '212121',
        amountInput: '77.19',
        avsStreetInput: '1307 Broad Hollow Road',
        avsZipInput: '11747',
        editCustomerCheckbox: true,
      },
    },
  },
  successDeclineRepeatedlyWithChargeWithUnexistingCustomerByVisa: {
    generalInfo: {
      actionSelect: 'charge',
      companyNameInput: 'Unexisting Test Process Transaction Card 1',
      cardNameInput: visaDeclined.name,
      cardNumberInput: visaDeclined.number,
      cardExpireMonth: visaDeclined.expire.month,
      cardExpireYear: visaDeclined.expire.year,
      amountInput: '137.50',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
};

export {
  processTransactionCardDataMock,
};
