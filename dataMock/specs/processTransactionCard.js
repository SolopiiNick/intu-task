import { getRandomInt } from '../../utils/helpers';
import { cards } from '../cards';

const { discover, discoverDeclined, visa, visaDeclined, masterCard, amex } = cards;

const MIN_NUM = 0;
const MAX_NUM = 100000000;

const processTransactionCardDataMock = {
  approveWithChargeByDiscover: {
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
  approveWithAuthorizeCreateCustomerByVisa: {
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
      companyNameInput: `Test Process Transaction Card ${getRandomInt(MIN_NUM, MAX_NUM)}`,
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      createCustomerCheckbox: true,
    },
  },
  approveWithChargeWithCustomerByMasterCard: {
    customersPage: {
      createCustomer: {
        companyNameInput: `Test Process Transaction Card ${getRandomInt(MIN_NUM, MAX_NUM)}`,
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
  approveWithPostauthorizeEditingCustomerByAmex: {
    customersPage: {
      createCustomer: {
        companyNameInput: `Test Process Transaction Card ${getRandomInt(MIN_NUM, MAX_NUM)}`,
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
        customerSelectInput: 'Test Process Transaction Card 3',
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
  declineRepeatedlyWithChargeWithUnexistingCustomerByVisa: {
    generalInfo: {
      actionSelect: 'charge',
      companyNameInput: `Unexisting Test Process Transaction Card ${getRandomInt(MIN_NUM, MAX_NUM)}`,
      cardNameInput: visaDeclined.name,
      cardNumberInput: visaDeclined.number,
      cardExpireMonth: visaDeclined.expire.month,
      cardExpireYear: visaDeclined.expire.year,
      amountInput: '137.50',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
  declineRepeatedlyWithChargeWithCustomerByDiscover: {
    customersPage: {
      createCustomer: {
        companyNameInput: `Test Process Transaction Card ${getRandomInt(MIN_NUM, MAX_NUM)}`,
      },
      addPaymentMethodCard: {
        cardNameInput: discoverDeclined.name,
        cardNumberInput: discoverDeclined.number,
        cardExpireMonth: discoverDeclined.expire.month,
        cardExpireYear: discoverDeclined.expire.year,
      },
    },
    processTransactionCardPage: {
      generalInfo: {
        customerSelectInput: 'Test Process Transaction Card 4',
        actionSelect: 'charge',
        cardNumberInput: 'autocomplete',
        amountInput: '1100.07',
        surchargeInput: '68',
      },
    },
  },
};

export {
  processTransactionCardDataMock,
};
