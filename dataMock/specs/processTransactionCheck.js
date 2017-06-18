import { getRandomInt } from '../../utils/Helpers';

const MIN_NUM = 0;
const MAX_NUM = 100000000;

const processTransactionCheckDataMock = {
  successSavingWithTEL: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Savings',
      transactionTypeInput: 'TEL',
      routingNumberInput: '061000227',
      accountNumberInput: '10102233',
      amountInput: '100',
      taxInput: '10.04',
      surchargeInput: '15.11',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
  },
  successCheckingWithPPD: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Checking',
      transactionTypeInput: 'PPD',
      routingNumberInput: '061000052',
      accountNumberInput: '10103344',
      amountInput: '80',
      companyName: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
    },
  },
  successDuplicateSavingWithCCD: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Savings',
      transactionTypeInput: 'CCD',
      routingNumberInput: '061000052',
      accountNumberInput: '10101122',
      amountInput: '100',
    },
  },
  successCheckingWithPPDAndBilling: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Checking',
      transactionTypeInput: 'PPD',
      routingNumberInput: '061000227',
      accountNumberInput: '10102233',
      amountInput: '100',
      taxInput: '10.04',
      surchargeInput: '15.11',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      poNumberInput: '0002',
      descriptionInput: 'test description',
      emailInput: 'an@codemotion.eu',
    },
    billingInfo: {
      firstName: 'Leo',
      lastName: 'Cockin',
      street: '123 6th St.',
      street2: '123 8th St.',
      city: 'Melbourne',
      zipCode: '32904',
      phone: '(152)234234234',
    },
  },
  successRefundSavingWithCCD: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Savings',
      transactionTypeInput: 'CCD',
      routingNumberInput: '061000227',
      accountNumberInput: '10102233',
      amountInput: '100',
      taxInput: '20',
      surchargeInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      companyName: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
    },
  },
  successRefundWithExistingCustomer: {
    companyName: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
    newCheckInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Checking',
      transactionTypeInput: 'CCD',
      routingNumberInput: '061092387',
      accountNumberInput: '10104455',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
    },
    generalInfo: {
      amountInput: '100.99',
      taxInput: '0.01',
    },
  },
  successChargeWithExistingCustomer: {
    companyName: `New Company ${getRandomInt(MIN_NUM, MAX_NUM)}`,
    newCheckInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Savings',
      transactionTypeInput: 'WEB',
      routingNumberInput: '061000227',
      accountNumberInput: '10105566',
    },
    generalInfo: {
      accountTypeInput: 'Checking',
      amountInput: '100.99',
      taxInput: '0.01',
    },
  },
};

export {
  processTransactionCheckDataMock,
};
