const checkTransaction = {
  savingWithTel: {
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
  checkingWithPPD: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Checking',
      transactionTypeInput: 'PPD',
      routingNumberInput: '061000052',
      accountNumberInput: '10103344',
      amountInput: '80',
      companyName: 'New Company n',
    },
  },
  duplicateSavingWithCCD: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Savings',
      transactionTypeInput: 'CCD',
      routingNumberInput: '061000052',
      accountNumberInput: '10101122',
      amountInput: '100',
    },
  },
  checkingWithPPDAndBilling: {
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
      country: 'usa',
      state: 'Florida',
      phone: '(152)234234234',
    },
  },
  refundSavingWithCCD: {
    generalInfo: {
      checkNameInput: 'Test Check',
      accountTypeInput: 'Saving',
      transactionTypeInput: 'CCD',
      routingNumberInput: '061000227',
      accountNumberInput: '10102233',
      amountInput: '100',
      taxInput: '20',
      surchargeInput: '1',
      avsStreetInput: '1307 Broad Hollow Road',
      avsZipInput: '11747',
      companyName: 'New Company n',
    },
  },
};

export {
  checkTransaction,
};
