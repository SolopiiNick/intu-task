import { cards } from '../cards';
import { getRandomInt } from '../../utils/Helpers';

const { discover, amex, visaDeclined } = cards;

const MIN_NUM = 0;
const MAX_NUM = 10000;

const recurringDataMock = {
  madeRecurringWithDiscoverCard: {
    generalInfo: {
      actionSelect: 'charge',
      cardNameInput: discover.name,
      cardNumberInput: discover.number,
      cardCvvInput: discover.cvv,
      cardExpireMonth: discover.expire.month,
      cardExpireYear: discover.expire.year,
      amountInput: '1010',
      taxInput: '0.92',
      surchargeInput: '3',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      companyNameInput: 'Test Company n',
      poNumberInput: '0002',
      invoiceNumber: '0002',
      descriptionInput: 'test description',
      emailInput: 'test@codemotion.eu',
      createCustomerCheckbox: true,
    },
    recurringInfo: {
      paymentTitle: `Test ${getRandomInt(MIN_NUM, MAX_NUM)}`,
      startingFromDate: null,
      everyPeriodValue: 'week',
      repeatTimes: '10',
      billFirstTransaction: false,
    },
  },
  madeRecurringOngoingWithAmexAndCustomer: {
    customersPage: {
      createCustomer: {
        companyNameInput: `Recurring ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        emailInput: 'test@codemotion.eu',
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
        actionSelect: 'charge',
        cardNumberInput: 'autocomplete',
        cardCvvInput: amex.cvv,
        amountInput: '77.19',
        avsStreetInput: '1307 Broad Hollow Road',
        avsZipInput: '11747',
      },
      recurringInfo: {
        paymentTitle: `Test ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        startingFromDate: '',
        everyPeriodValue: '2 weeks',
        ongoing: '10',
        billFirstTransaction: true,
      },
    },
  },
  successChargeRecurring: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Checking',
      transactionTypeInput: 'PPD',
      routingNumberInput: '061092387',
      accountNumberInput: '10102233',
      amountInput: '100.2',
      taxInput: '10',
      surchargeInput: '20',
      companyName: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
    },
    recurringInfo: {
      paymentTitle: `Test ${getRandomInt(MIN_NUM, MAX_NUM)}`,
      startBillingDate: null,
      everyPeriodValue: 'month',
      ongoing: '10',
    },
  },
  successChargeWithExistingCustomer: {
    customersPage: {
      createCustomer: {
        companyNameInput: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        emailInput: 'test@codemotion.eu',
      },
      addPaymentMethodCheck: {
        checkNameInput: 'Test Check',
        accountTypeInput: 'Savings',
        transactionTypeInput: 'CCD',
        routingNumberInput: '061000227',
        accountNumberInput: '10103344',
      },
    },
    processTransactionCheck: {
      generalInfo: {
        amountInput: '100.9',
        avsStreetInput: '1307 Broad Hollow Road',
        avsZipInput: '11747',
      },
      recurringInfo: {
        paymentTitle: `Test ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        startBillingDate: null,
        everyPeriodValue: 'quarter',
        repeatTimes: '2',
        billFirstTransaction: true,
      },
    },
    transactionResult: ['370', 'Charge', 'Settled', '', 'OK8434',
      'No AVS response (Typically no AVS data sent or swiped transaction)',
      'No CVV2/CVC data available for transaction.'],
  },
  declineChargeRecurring: {
    processTransactionCardPage: {
      generalInfo: {
        actionSelect: 'charge',
        cardNameInput: visaDeclined.name,
        cardNumberInput: visaDeclined.number,
        cardCvvInput: visaDeclined.cvv,
        cardExpireMonth: visaDeclined.expire.month,
        cardExpireYear: visaDeclined.expire.year,
        amountInput: '130',
        surchargeInput: '7.50',
        avsStreetInput: '1307 Broad Hollow Road',
        avsZipInput: '11747',
        companyNameInput: `Test Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        emailInput: 'test@codemotion.eu',
        createCustomerCheckbox: true,
      },
      recurringInfo: {
        paymentTitle: `Test ${getRandomInt(MIN_NUM, MAX_NUM)}`,
        everyPeriodValue: '6 months',
        repeatTimes: '5',
        billFirstTransaction: true,
      },
    },
    generalSettingInfo: {
      everyPeriodValue: '3',
    },
    transactionResult: ['370', 'Charge', 'Settled', '', 'OK8434',
      'No AVS response (Typically no AVS data sent or swiped transaction)',
      'No CVV2/CVC data available for transaction.'],
  },
};

export {
  recurringDataMock,
};
